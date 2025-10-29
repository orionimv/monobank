// src/components/TopUpJarModal.jsx
import React, { useState, useEffect } from 'react';
import ActionModal from './ActionModal';
import { toast } from 'react-toastify';

const TopUpJarModal = ({ show, onHide, deposit }) => {
    const [amount, setAmount] = useState('');

    useEffect(() => {
        if (show) {
            setAmount('');
        }
    }, [show]);

    const handleSubmit = () => {
        showSuccessToast(`'Банка' поповнена на ${amount} ₴!`);
    };

    const showSuccessToast = (message) => {
        toast.success(message);
        onHide();
    };

    const isDisabled = !amount || parseFloat(amount) <= 0;

    if (!deposit) return null;

    return (
        <ActionModal show={show} onHide={onHide} title={`Поповнити "${deposit.title}"`}>
            <div>
                <p className="mb-4">Введіть суму поповнення.</p>
                <label htmlFor="topUpAmountModal" className="block text-sm font-medium mb-1">Сума (₴):</label>
                <input
                    type="number" id="topUpAmountModal"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full p-2 border rounded bg-gray-50 mb-4"/>
                <button
                    onClick={handleSubmit}
                    disabled={isDisabled}
                    className={`w-full text-white py-2 rounded transition-colors ${isDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-800 hover:bg-black'}`}>
                    Поповнити
                </button>
            </div>
        </ActionModal>
    );
};

export default TopUpJarModal;
