// src/components/CardDetailsModal.jsx
import React from 'react';
import ActionModal from './ActionModal';

const CardDetailsModal = ({ show, onHide, card }) => {
    if (!card) return null;

    return (
        <ActionModal show={show} onHide={onHide} title="Реквізити картки">
            <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Картка:</span> {card.name}</p>
                <p><span className="font-semibold">Номер:</span> {card.number}</p>
                <p><span className="font-semibold">Дійсна до:</span> {card.expiry}</p>
                <p><span className="font-semibold">IBAN:</span> UAXXXXXXXXXXXXXXXXXXXXXXXXX</p>
                <button
                    onClick={() => navigator.clipboard.writeText(`UA...`)}
                    className="mt-4 w-full bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300">
                    Копіювати IBAN
                </button>
            </div>
        </ActionModal>
    );
};
export default CardDetailsModal;
