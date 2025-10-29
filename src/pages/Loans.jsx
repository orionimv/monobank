// src/pages/Loans.jsx
import React, { useState, useEffect } from 'react';
import LoanCard from '../components/LoanCard';
import DepositCard from '../components/DepositCard';
import ApplyLoanModal from '../components/ApplyLoanModal';
import MakePaymentModal from '../components/MakePaymentModal';
import OpenJarModal from '../components/OpenJarModal';
import TopUpJarModal from '../components/TopUpJarModal';
import { toast } from 'react-toastify';

const initialLoans = [
    { id: 'l1', title: 'Розстрочка на MacBook', amountLeft: 30150, paid: 19850, total: 50000, nextPayment: 5000 },
];

// НАЧАЛЬНЫЕ БАНКИ
const initialDeposits = [
    { id: 'd1', title: 'На відпустку', icon: '🌴', current: 40500, goal: 100000, rate: 5 },
    { id: 'd2', title: 'На машину', icon: '🚗', current: 150000, goal: 500000, rate: 7 },
];

const loadJarsFromLocalStorage = () => {
    try {
        const savedJarsRaw = localStorage.getItem('myJars');
        if (!savedJarsRaw) return [];

        const parsedJars = JSON.parse(savedJarsRaw);
        if (Array.isArray(parsedJars) && parsedJars.every(jar => jar && typeof jar === 'object' && jar.id)) {
            return parsedJars.map(jar => ({ ...jar, current: Number(jar.current) || 0 }));
        }
        console.warn("Invalid data found in localStorage for 'myJars'. Resetting.");
        localStorage.removeItem('myJars');
        return [];

    } catch (e) {
        console.error("Failed to load or parse jars from localStorage:", e);
        localStorage.removeItem('myJars');
        return [];
    }
};

const mergeInitialAndSavedJars = (initial, saved) => {
    const jarMap = new Map();
    initial.forEach(jar => jarMap.set(jar.id, { ...jar, current: Number(jar.current) || 0 }));
    saved.forEach(jar => {
        const currentAmount = Number(jar.current) || 0;
        jarMap.set(jar.id, { ...(jarMap.get(jar.id) || {}), ...jar, current: currentAmount });
    });
    return Array.from(jarMap.values());
};


const Loans = () => {
    const [myDeposits, setMyDeposits] = useState(() => {
        const savedJars = loadJarsFromLocalStorage();
        return mergeInitialAndSavedJars(initialDeposits, savedJars);
    });

    useEffect(() => {
        try {
            const validJars = myDeposits.filter(jar => jar && jar.id && typeof jar.current === 'number');
            if (validJars.length !== myDeposits.length) {
                console.warn("Attempted to save invalid jar data.");
            }
            localStorage.setItem('myJars', JSON.stringify(validJars));
        } catch (e) { console.error("Failed to save jars:", e); }
    }, [myDeposits]);

    const addJar = (name, goal) => {
        const newJar = { id: `jar-${Date.now()}`, title: name || 'Нова Банка', icon: '🏦', current: 0, goal: parseFloat(goal) || 1000, rate: 3 };
        setMyDeposits(prevDeposits => [...(prevDeposits || []), newJar]);
    };

    const handleTopUpJar = (jarId, amount) => {
        const topUpAmount = parseFloat(amount) || 0;
        if (topUpAmount <= 0) return;

        setMyDeposits(prevDeposits =>
            (prevDeposits || []).map(jar =>
                jar.id === jarId ? { ...jar, current: (Number(jar.current) || 0) + topUpAmount } : jar
            )
        );
    };

    const handleDeleteJar = (jarIdToDelete) => {
        const jarToDelete = (myDeposits || []).find(jar => jar.id === jarIdToDelete);
        setMyDeposits(prevDeposits =>
            (prevDeposits || []).filter(jar => jar.id !== jarIdToDelete)
        );
        if (jarToDelete) {
            toast.info(`Банка "${jarToDelete.title}" розбита!`);
        }
    };

    const [showApplyLoan, setShowApplyLoan] = useState(false);
    const [showMakePayment, setShowMakePayment] = useState(false);
    const [showOpenJar, setShowOpenJar] = useState(false);
    const [showTopUpJar, setShowTopUpJar] = useState(false);
    const [selectedLoan, setSelectedLoan] = useState(null);
    const [selectedDeposit, setSelectedDeposit] = useState(null);

    const openApplyLoan = () => setShowApplyLoan(true);
    const closeApplyLoan = () => setShowApplyLoan(false);
    const openMakePayment = (loan) => { setSelectedLoan(loan); setShowMakePayment(true); };
    const closeMakePayment = () => setShowMakePayment(false);
    const openOpenJar = () => setShowOpenJar(true);
    const closeOpenJar = () => setShowOpenJar(false);
    const openTopUpJar = (deposit) => { setSelectedDeposit(deposit); setShowTopUpJar(true); };
    const closeTopUpJar = () => setShowTopUpJar(false);

    const depositsToRender = Array.isArray(myDeposits) ? myDeposits : [];

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-gray-900">Кредити/Депозити</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                <div className="space-y-6">
                    <div className="flex justify-between items-center">
                        <h3 className="text-2xl font-semibold text-gray-900">Мої кредити</h3>
                        <button onClick={openApplyLoan} className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700">
                            + Подати заявку
                        </button>
                    </div>
                    {initialLoans.map(loan => (
                        <LoanCard
                            key={loan.id}
                            {...loan}
                            onMakePayment={() => openMakePayment(loan)}
                        />
                    ))}
                </div>

                <div className="space-y-6">
                    <div className="flex justify-between items-center">
                        <h3 className="text-2xl font-semibold text-gray-900">Мої 'Банки'</h3>
                        <button onClick={openOpenJar} className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-black">
                            + Відкрити 'Банку'
                        </button>
                    </div>
                    {depositsToRender.length === 0 ? (
                        <p className="text-gray-500 italic">У вас поки немає відкритих 'Банок'.</p>
                    ) : (
                        depositsToRender.map(deposit => (
                            deposit && deposit.id ? (
                                <DepositCard
                                    key={deposit.id}
                                    {...deposit}
                                    onTopUp={() => openTopUpJar(deposit)}
                                    onDelete={() => handleDeleteJar(deposit.id)}
                                />
                            ) : null
                        ))
                    )}
                </div>
            </div>

            <ApplyLoanModal show={showApplyLoan} onHide={closeApplyLoan} />
            <MakePaymentModal show={showMakePayment} onHide={closeMakePayment} loan={selectedLoan} />
            <OpenJarModal show={showOpenJar} onHide={closeOpenJar} onAddJar={addJar} />
            <TopUpJarModal show={showTopUpJar} onHide={closeTopUpJar} deposit={selectedDeposit} onConfirmTopUp={handleTopUpJar}/>
        </div>
    );
};

export default Loans;
