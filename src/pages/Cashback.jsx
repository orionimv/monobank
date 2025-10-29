// src/pages/Cashback.jsx
import React, { useState } from 'react';
import CashbackCategory from '../components/CashbackCategory';
import WithdrawCashbackModal from '../components/WithdrawCashbackModal';
import { cardsData } from '../data';
import { toast } from 'react-toastify';

const categories = [
    { id: 'food', name: 'Продукти', icon: '🛒', percentage: 2 },
    { id: 'taxi', name: 'Таксі', icon: '🚕', percentage: 5 },
    { id: 'cinema', name: 'Кіно', icon: '🍿', percentage: 10 },
    { id: 'restaurants', name: 'Ресторани', icon: '🍔', percentage: 3 },
    { id: 'clothes', name: 'Одяг', icon: '👕', percentage: 7 },
    { id: 'gas', name: 'АЗС', icon: '⛽', percentage: 4 },
];

const Cashback = () => {
    const [cashbackAmount, setCashbackAmount] = useState(145.50);
    const [selectedCategories, setSelectedCategories] = useState(['food']);
    const [showWithdrawModal, setShowWithdrawModal] = useState(false);

    const handleSelect = (id) => {
        const isSelected = selectedCategories.includes(id);
        if (isSelected) {
            setSelectedCategories(prev => prev.filter(catId => catId !== id));
        } else {
            if (selectedCategories.length < 2) {
                setSelectedCategories(prev => [...prev, id]);
            }
        }
    };

    const handleWithdrawClick = () => {
        if (cashbackAmount >= 100) {
            setShowWithdrawModal(true);
        }
    };

    const confirmWithdrawal = (cardId) => {
        const card = cardsData.find(c => c.id === cardId);
        if (card) {
            const amountToWithdraw = cashbackAmount.toFixed(2);
            setCashbackAmount(0);
            setShowWithdrawModal(false);
            toast.success(`Кешбек ${amountToWithdraw} ₴ виведений на картку "${card.name}"!`);
        } else {
            toast.error("Помилка: Картка не знайдена!");
            setShowWithdrawModal(false);
        }
    };

    const isWithdrawDisabled = cashbackAmount < 100;

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-gray-900">Кешбек</h1>

            {/* Блок "Заработано" */}
            <div className="bg-white p-6 rounded-2xl shadow-md flex justify-between items-center">
                <div>
                    <div className="text-sm text-gray-500">Нараховано у Жовтні</div>
                    <div className="text-4xl font-bold text-gray-900">
                        {cashbackAmount.toFixed(2)} ₴
                    </div>
                </div>
                <button
                    onClick={handleWithdrawClick}
                    className={`py-3 px-6 rounded-lg font-semibold transition-colors ${
                        isWithdrawDisabled
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-purple-600 text-white hover:bg-purple-700'
                    }`}
                    disabled={isWithdrawDisabled}
                >
                    {isWithdrawDisabled ? `(еще ${ (100 - cashbackAmount).toFixed(2) } ₴)` : 'Вивести на картку'}
                </button>
            </div>

            <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Виберіть 2 категории
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categories.map(cat => (
                        <CashbackCategory
                            key={cat.id}
                            {...cat}
                            isSelected={selectedCategories.includes(cat.id)}
                            onClick={() => handleSelect(cat.id)}
                        />
                    ))}
                </div>
            </div>

            <WithdrawCashbackModal
                show={showWithdrawModal}
                onHide={() => setShowWithdrawModal(false)}
                onConfirm={confirmWithdrawal}
                amount={cashbackAmount}
            />
        </div>
    );
};

export default Cashback;
