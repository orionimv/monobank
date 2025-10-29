// src/components/WithdrawCashbackModal.jsx
import React, { useState } from 'react';
import ActionModal from './ActionModal';
import { cardsData } from '../data';
import { FaCcVisa, FaCcMastercard } from 'react-icons/fa6';
import { SiPayoneer } from 'react-icons/si';

const getLogoIcon = (logoName) => {
    if (logoName === 'Visa') return <FaCcVisa className="text-blue-600" />;
    if (logoName === 'MasterCard') return <FaCcMastercard className="text-red-600" />;
    if (logoName === 'Payoneer') return <SiPayoneer className="text-orange-500" />;
    return null;
};

const WithdrawCashbackModal = ({ show, onHide, onConfirm, amount }) => {
    const [selectedCardId, setSelectedCardId] = useState(cardsData[0]?.id || null);

    const handleConfirm = () => {
        if (selectedCardId) {
            onConfirm(selectedCardId);
        }
    };

    return (
        <ActionModal show={show} onHide={onHide} title={`Вывести ${amount.toFixed(2)} ₴`}>
            <div>
                <p className="mb-4 text-sm text-gray-600">Виберіть картку для зарахування кешбека:</p>

                <div className="space-y-3 mb-6">
                    {cardsData.map(card => (
                        <label
                            key={card.id}
                            className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${selectedCardId === card.id ? 'border-purple-600 bg-purple-50 ring-2 ring-purple-300' : 'border-gray-300 hover:bg-gray-50'}`}
                        >
                            <input
                                type="radio"
                                name="withdrawCard"
                                value={card.id}
                                checked={selectedCardId === card.id}
                                onChange={() => setSelectedCardId(card.id)}
                                className="form-radio h-4 w-4 text-purple-600 mr-3"
                            />
                            <div className="flex-1 flex justify-between items-center">
                                <div>
                                    <span className="font-medium text-gray-900">{card.name}</span>
                                    <span className="text-sm text-gray-500 ml-2">({card.number.slice(-9)})</span>
                                </div>
                                <span className="text-2xl">{getLogoIcon(card.logo)}</span>
                            </div>
                        </label>
                    ))}
                </div>

                <button
                    onClick={handleConfirm}
                    disabled={!selectedCardId}
                    className={`w-full text-white py-2 rounded transition-colors ${!selectedCardId ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700'}`}>
                    Підтвердити виведення
                </button>
            </div>
        </ActionModal>
    );
};

export default WithdrawCashbackModal;
