// src/components/ApplyLoanModal.jsx
import React, { useState } from 'react';
import ActionModal from './ActionModal';
import { toast } from 'react-toastify';

const ApplyLoanModal = ({ show, onHide }) => {
    const [amount, setAmount] = useState('');
    const [term, setTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = () => {
        setIsLoading(true);

        setTimeout(() => {
            console.log('Відправка заявки:', { amount, term });

            setIsLoading(false);
            showSuccessToast('Заявка на кредит успешні відправлена!');
        }, 2000);
    };

    const showSuccessToast = (message) => {
        toast.success(message);
        onHide();
        setAmount('');
        setTerm('');
    };

    const isDisabled = !amount || !term || parseFloat(amount) <= 0 || parseInt(term, 10) <= 0 || isLoading;

    return (
        <ActionModal show={show} onHide={onHide} title="Подати заявку на кредит">
            <div>
                <p className="mb-4">Вкажіть бажаєму суму та срок кредита</p>
                <label htmlFor="loanAmountApplyModal" className="block text-sm font-medium mb-1">Сума (₴):</label>
                <input
                    type="number" id="loanAmountApplyModal"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full p-2 border rounded bg-gray-50 mb-4"
                    disabled={isLoading}
                />
                <label htmlFor="loanTermApplyModal" className="block text-sm font-medium mb-1">Термін (місяців):</label>
                <input
                    type="number" id="loanTermApplyModal"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    className="w-full p-2 border rounded bg-gray-50 mb-4"
                    disabled={isLoading}
                />
                <button
                    onClick={handleSubmit}
                    disabled={isDisabled}
                    className={`w-full text-white py-2 rounded transition-colors flex items-center justify-center ${isDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700'}`}>
                    {isLoading ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Відправка...
                        </>
                    ) : (
                        'Відправити заявку'
                    )}
                </button>
            </div>
        </ActionModal>
    );
};

export default ApplyLoanModal;
