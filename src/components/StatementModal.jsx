// src/components/StatementModal.jsx
import React from 'react';
import ActionModal from './ActionModal';
import { toast } from 'react-toastify';

const StatementModal = ({ show, onHide, card, showSuccessToast }) => {
    if (!card) return null;

    const handleConfirm = () => {
        showSuccessToast(`Виписку для ${card.name} надіслано!`);
    };

    return (
        <ActionModal show={show} onHide={onHide} title="Надіслати виписку">
            <div>
                <p className="mb-4">Оберіть період для виписки по картці <span className="font-semibold">{card.name}</span>:</p>
                <div className="space-y-3 mb-4">
                    <label className="flex items-center space-x-2"> <input type="radio" name="period" value="month" defaultChecked className="form-radio text-purple-600"/> <span>За останній місяць</span> </label>
                    <label className="flex items-center space-x-2"> <input type="radio" name="period" value="quarter" className="form-radio text-purple-600"/> <span>За квартал</span> </label>
                    <label className="flex items-center space-x-2"> <input type="radio" name="period" value="year" className="form-radio text-purple-600"/> <span>За рік</span> </label>
                    <label className="flex items-center space-x-2"> <input type="radio" name="period" value="custom" className="form-radio text-purple-600"/> <span>Обрати дати:</span> <input type="date" className="p-1 border rounded bg-gray-50 ml-2"/> <span className="mx-1">-</span> <input type="date" className="p-1 border rounded bg-gray-50 ml-1"/> </label>
                </div>
                <button onClick={handleConfirm} className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">Надіслати на Email</button>
            </div>
        </ActionModal>
    );
};
export default StatementModal;
