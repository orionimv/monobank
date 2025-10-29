// src/components/BlockCardModal.jsx
import React from 'react';
import ActionModal from './ActionModal';
import { toast } from 'react-toastify';

const BlockCardModal = ({ show, onHide, card, showSuccessToast }) => {
    if (!card) return null;

    const handleConfirm = () => {
        showSuccessToast(`Картку ${card.name} заблоковано!`);
    };

    return (
        <ActionModal show={show} onHide={onHide} title="Заблокувати картку">
            <div>
                <p className="mb-4">Ви впевнені, що хочете заблокувати картку <span className="font-semibold">{card.name} ({card.number.slice(-4)})</span>?</p>
                <p className="text-sm text-gray-500 mb-4">Після блокування ви не зможете нею користуватися. Розблокувати можна буде в будь-який момент.</p>
                <button onClick={handleConfirm} className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">Заблокувати</button>
            </div>
        </ActionModal>
    );
};
export default BlockCardModal;
