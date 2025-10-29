// src/components/LimitsSecurityModal.jsx
import React, { useState } from 'react';
import ActionModal from './ActionModal';
import { toast } from 'react-toastify';

const LimitsSecurityModal = ({ show, onHide }) => {
    const [onlineLimit, setOnlineLimit] = useState(20000);
    const [cashLimit, setCashLimit] = useState(5000);

    const handleSave = () => {
        toast.success("Лимиты успешно обновлены!");
        onHide();
    };

    return (
        <ActionModal show={show} onHide={onHide} title="Ліміти та безпека">
            <div className="space-y-6">
                <div>
                    <label htmlFor="limitOnlineModal" className="block text-sm font-medium mb-2 text-gray-700">
                        Ліміт оплат в интернеті (₴/мес): <span className="font-bold text-purple-600">{onlineLimit.toLocaleString('ua-UA')} ₴</span>
                    </label>
                    <input
                        type="range" id="limitOnlineModal"
                        min="0" max="100000" step="1000"
                        value={onlineLimit}
                        onChange={(e) => setOnlineLimit(parseInt(e.target.value, 10))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0 ₴</span>
                        <span>100 000 ₴</span>
                    </div>
                </div>
                <div>
                    <label htmlFor="limitCashModal" className="block text-sm font-medium mb-2 text-gray-700">
                        Ліміт зняття готівки (₴/день): <span className="font-bold text-purple-600">{cashLimit.toLocaleString('ua-UA')} ₴</span>
                    </label>
                    <input
                        type="range" id="limitCashModal"
                        min="0" max="20000" step="500"
                        value={cashLimit}
                        onChange={(e) => setCashLimit(parseInt(e.target.value, 10))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0 ₴</span>
                        <span>20 000 ₴</span>
                    </div>
                </div>
                <button
                    onClick={handleSave}
                    className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 mt-4 font-medium">
                    Зберегти ліміти
                </button>
            </div>
        </ActionModal>
    );
};
export default LimitsSecurityModal;
