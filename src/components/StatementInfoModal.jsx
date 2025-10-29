// src/components/StatementInfoModal.jsx
import React from 'react';
import ActionModal from './ActionModal';
import { toast } from 'react-toastify';
import { cardsData } from '../data';

const StatementInfoModal = ({ show, onHide }) => {

    const handleSend = () => {
        toast.success("Виписка відправлена на Ваш email!");
        onHide();
    };

    return (
        <ActionModal show={show} onHide={onHide} title="Виписки та довідки">
            <div>
                <p className="mb-4">Виберіть картку та період для отримання виписки або довідки</p>

                <div className="mb-4">
                    <label htmlFor="statementCard" className="block text-sm font-medium mb-1">Картка:</label>
                    <select id="statementCard" className="w-full p-2 border rounded bg-gray-50">
                        {cardsData.map(card => (
                            <option key={card.id} value={card.id}>{card.name} ({card.number.slice(-4)})</option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Період:</label>
                    <div className="space-y-2">
                        <label className="flex items-center space-x-2"> <input type="radio" name="stmtPeriod" value="month" defaultChecked className="form-radio text-purple-600"/> <span>За останній місяць</span> </label>
                        <label className="flex items-center space-x-2"> <input type="radio" name="stmtPeriod" value="quarter" className="form-radio text-purple-600"/> <span>За квартал</span> </label>
                        <label className="flex items-center space-x-2"> <input type="radio" name="stmtPeriod" value="year" className="form-radio text-purple-600"/> <span>За рік</span> </label>
                        <label className="flex items-center space-x-2"> <input type="radio" name="stmtPeriod" value="custom" className="form-radio text-purple-600"/> <span>Вибрати дати:</span> <input type="date" className="p-1 border rounded bg-gray-50 ml-2"/> <span className="mx-1">-</span> <input type="date" className="p-1 border rounded bg-gray-50 ml-1"/> </label>
                    </div>
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium mb-1">Тип документа:</label>
                    <select id="docType" className="w-full p-2 border rounded bg-gray-50">
                        <option value="statement">Виписка по картці</option>
                        <option value="balance_cert">Довідка о стані рахунку</option>
                        <option value="credit_cert">Довідка о кредитній заборгованості</option>
                    </select>
                </div>

                <button onClick={handleSend} className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
                    Відправити на Email
                </button>
            </div>
        </ActionModal>
    );
};
export default StatementInfoModal;
