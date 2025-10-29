// src/components/ChangeLimitModal.jsx
import React, { useState, useEffect } from 'react';
import ActionModal from './ActionModal';
import { toast } from 'react-toastify';

const ChangeLimitModal = ({ show, onHide, card, currentLimit, onUpdateLimit }) => {
    const [newLimitInput, setNewLimitInput] = useState(currentLimit);

    useEffect(() => {
        if (show) {
            setNewLimitInput(currentLimit);
        }
    }, [show, currentLimit]);

    const handleSubmit = () => {
        const newLimit = parseInt(newLimitInput, 10) || 0;
        onUpdateLimit(card.id, newLimit);
        showSuccessToast(`Ліміт для ${card.name} змінено на ${newLimit} ${getCurrencySymbol(card.currency)}!`);
    };

    const showSuccessToast = (message) => {
        toast.success(message);
        onHide();
    };

    const getCurrencySymbol = (currencyCode) => {
        switch (currencyCode) {
            case 'UAH': return '₴';
            case 'USD': return '$';
            case 'EUR': return '€';
            default: return currencyCode;
        }
    };

    if (!card) return null;

    return (
        <ActionModal show={show} onHide={onHide} title="Змінити кредитний ліміт">
            <div>
                <p className="mb-4">Встановіть новий кредитний ліміт для картки <span className="font-semibold">{card.name}</span>.</p>
                <label htmlFor="limitInputModalNew" className="block text-sm font-medium mb-1">Новий ліміт ({getCurrencySymbol(card.currency)}):</label>
                <input
                    type="number"
                    id="limitInputModalNew"
                    value={newLimitInput}
                    onChange={(e) => setNewLimitInput(e.target.value)}
                    className="w-full p-2 border rounded bg-gray-50 mb-4"
                />
                <button
                    onClick={handleSubmit}
                    className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
                    Встановити ліміт
                </button>
            </div>
        </ActionModal>
    );
};

export default ChangeLimitModal;
