// src/components/ChangePinModal.jsx
import React, { useState } from 'react';
import ActionModal from './ActionModal';
import { toast } from 'react-toastify';

const ChangePinModal = ({ show, onHide, card }) => {
    const [newPinValue, setNewPinValue] = useState('');
    const [confirmPinValue, setConfirmPinValue] = useState('');

    const handleSubmit = () => {
        showSuccessToast(`PIN-код для ${card.name} змінено!`);
    };

    const showSuccessToast = (message) => {
        toast.success(message);
        onHide();
    };

    const isDisabled = newPinValue.length !== 4 || newPinValue !== confirmPinValue;

    if (!card) return null;

    return (
        <ActionModal show={show} onHide={onHide} title="Налаштування PIN-коду">
            <div>
                <p className="mb-4">Введіть новий PIN-код для картки <span className="font-semibold">{card.name}</span>.</p>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="newPinModal" className="block text-sm font-medium mb-1">Новий PIN (4 цифри):</label>
                        <input
                            type="password"
                            id="newPinModal"
                            maxLength="4"
                            value={newPinValue}
                            onChange={(e) => setNewPinValue(e.target.value.replace(/\D/g, ''))}
                            className="w-full p-2 border rounded bg-gray-50 mb-4 text-center text-lg tracking-[0.5em]"
                            autoComplete="new-password"
                        />
                    </div>
                    <div>
                        <label htmlFor="confirmPinModal" className="block text-sm font-medium mb-1">Підтвердіть PIN:</label>
                        <input
                            type="password"
                            id="confirmPinModal"
                            maxLength="4"
                            value={confirmPinValue}
                            onChange={(e) => setConfirmPinValue(e.target.value.replace(/\D/g, ''))}
                            className="w-full p-2 border rounded bg-gray-50 mb-4 text-center text-lg tracking-[0.5em]"
                            autoComplete="new-password"
                        />
                    </div>
                </div>
                <button
                    onClick={handleSubmit}
                    disabled={isDisabled}
                    className={`w-full text-white py-2 rounded transition-colors ${isDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700'}`}>
                    Змінити PIN
                </button>
            </div>
        </ActionModal>
    );
};

export default ChangePinModal;
