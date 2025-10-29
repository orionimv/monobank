// src/components/InsuranceInfoModal.jsx
import React, { useState } from 'react';
import ActionModal from './ActionModal';
import { toast } from 'react-toastify';
import { BsPersonVcard, BsPassport, BsTelephone, BsEnvelope, BsCalendarEvent } from 'react-icons/bs';

const InsuranceInfoModal = ({ show, onHide }) => {
    const [selectedInsurance, setSelectedInsurance] = useState(null);
    const [fullName, setFullName] = useState('');
    const [passport, setPassport] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');

    const handleSelectInsurance = (type) => {
        setSelectedInsurance(type);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Insurance Data:", { type: selectedInsurance, fullName, passport, phone, email, dob });
        toast.success(`Заявка на "${selectedInsurance}" успішно відправлена!`);
        handleClose();
    };

    const handleClose = () => {
        setSelectedInsurance(null);
        setFullName('');
        setPassport('');
        setPhone('');
        setEmail('');
        setDob('');
        onHide();
    };

    const isFormDisabled = !fullName || !passport || !dob || !phone || !email;

    return (
        <ActionModal show={show} onHide={handleClose} title="Страхування">
            {!selectedInsurance ? (
                <div className="space-y-3">
                    <p className="text-sm text-gray-600 mb-4">Виберіть тип страхування для оформлення:</p>
                    <button
                        onClick={() => handleSelectInsurance('ОСЦПВ')}
                        className="w-full text-left p-3 border rounded-lg hover:bg-gray-100 hover:border-purple-500 transition-colors">
                        <span className="font-medium text-purple-600"> Автоцивілка (ОСЦПВ)</span>
                        <p className="text-xs text-gray-500">Обовʼязкове страхування цивільно-правової відповідальності</p>
                    </button>
                    <button
                        onClick={() => handleSelectInsurance('Зелена картка')}
                        className="w-full text-left p-3 border rounded-lg hover:bg-gray-100 hover:border-purple-500 transition-colors">
                        <span className="font-medium text-purple-600">Зелена картка</span>
                        <p className="text-xs text-gray-500">Міжнародний сертифікат страхування цивільно-провової відповідальності</p>
                    </button>
                    <button
                        onClick={() => handleSelectInsurance('Медичне страхування')}
                        className="w-full text-left p-3 border rounded-lg hover:bg-gray-100 hover:border-purple-500 transition-colors">
                        <span className="font-medium text-purple-600">Медичне страхування</span>
                        <p className="text-xs text-gray-500">Доступ до якістної медицини</p>
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <p className="text-sm text-gray-600 mb-1">Оформлення страхування: <span className="font-semibold text-purple-600">{selectedInsurance}</span></p>
                    <p className="text-xs text-gray-500 mb-4">Будь ласка, введіть ваші дані:</p>

                    <div>
                        <label htmlFor="insFullNameModalForm" className="block text-sm font-medium text-gray-700 mb-1">ПІБ:</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3"><BsPersonVcard className="text-gray-400" /></span>
                            <input type="text" id="insFullNameModalForm" value={fullName} onChange={(e) => setFullName(e.target.value)} required className="pl-10 w-full p-2 border rounded bg-gray-50"/>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="insPassportModalForm" className="block text-sm font-medium text-gray-700 mb-1">Серія та номер паспорта:</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3"><BsPassport className="text-gray-400" /></span>
                            <input type="text" id="insPassportModalForm" value={passport} onChange={(e) => setPassport(e.target.value)} required className="pl-10 w-full p-2 border rounded bg-gray-50" placeholder="АА 123456"/>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="insDobModalForm" className="block text-sm font-medium text-gray-700 mb-1">Дата народження:</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3"><BsCalendarEvent className="text-gray-400" /></span>
                            <input
                                type="date"
                                id="insDobModalForm"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                required
                                className="pl-10 w-full p-2 border rounded bg-gray-50 text-gray-900"
                                max={new Date().toISOString().split("T")[0]}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="insPhoneModalForm" className="block text-sm font-medium text-gray-700 mb-1">Телефон:</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3"><BsTelephone className="text-gray-400" /></span>
                            <input type="tel" id="insPhoneModalForm" value={phone} onChange={(e) => setPhone(e.target.value)} required className="pl-10 w-full p-2 border rounded bg-gray-50" placeholder="+380..."/>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="insEmailModalForm" className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3"><BsEnvelope className="text-gray-400" /></span>
                            <input type="email" id="insEmailModalForm" value={email} onChange={(e) => setEmail(e.target.value)} required className="pl-10 w-full p-2 border rounded bg-gray-50" placeholder="your@email.com"/>
                        </div>
                    </div>

                    <div className="flex gap-4 pt-2">
                        <button
                            type="button"
                            onClick={() => setSelectedInsurance(null)}
                            className="w-1/3 bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300">
                            Назад
                        </button>
                        <button
                            type="submit"
                            disabled={isFormDisabled}
                            className={`w-2/3 text-white py-2 rounded transition-colors ${isFormDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700'}`}>
                            Відправити заявку
                        </button>
                    </div>
                </form>
            )}
        </ActionModal>
    );
};
export default InsuranceInfoModal;
