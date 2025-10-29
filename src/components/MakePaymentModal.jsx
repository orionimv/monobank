// src/components/MakePaymentModal.jsx
import React, { useState, useEffect } from 'react';
import ActionModal from './ActionModal';
import { toast } from 'react-toastify';

const MakePaymentModal = ({ show, onHide, loan }) => {
    const [amount, setAmount] = useState('');

    useEffect(() => {
        if (show) {
            setAmount(loan?.nextPayment?.toString() || '');
        }
    }, [show, loan]);

    const handleSubmit = () => {
        showSuccessToast(`Платіж ${amount} ₴ внесено!`);
    };

    const showSuccessToast = (message) => {
        toast.success(message);
        onHide();
    };

    const minPayment = loan?.nextPayment || 0;
    const isDisabled = !amount || parseFloat(amount) < minPayment;

    if (!loan) return null;

    return (
        <ActionModal show={show} onHide={onHide} title={`Внести платіж за "${loan.title}"`}>
            <div>
                <p className="mb-4">Введіть суму платежу (мін. {minPayment.toLocaleString('ua-UA')} ₴).</p>
                <label htmlFor="paymentAmountModal" className="block text-sm font-medium mb-1">Сума (₴):</label>
                <input
                    type="number" id="paymentAmountModal"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full p-2 border rounded bg-gray-50 mb-4"/>
                <button
                    onClick={handleSubmit}
                    disabled={isDisabled}
                    className={`w-full text-white py-2 rounded transition-colors ${isDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700'}`}>
                    Оплатити
                </button>
            </div>
        </ActionModal>
    );
};

export default MakePaymentModal;
