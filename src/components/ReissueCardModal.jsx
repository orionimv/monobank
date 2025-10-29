// src/components/ReissueCardModal.jsx
import React from 'react';
import ActionModal from './ActionModal';
import { toast } from 'react-toastify';

const ReissueCardModal = ({ show, onHide, card, showSuccessToast }) => {
    if (!card) return null;

    const handleConfirm = () => {
        showSuccessToast(`Замовлено перевипуск картки ${card.name}!`);
    };

    return (
        <ActionModal show={show} onHide={onHide} title="Перевипустити картку">
            <div>
                <p className="mb-4">Замовити перевипуск картки <span className="font-semibold">{card.name}</span>?</p>
                <button onClick={handleConfirm} className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">Підтвердити</button>
            </div>
        </ActionModal>
    );
};
export default ReissueCardModal;
