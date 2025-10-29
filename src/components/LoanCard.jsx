// src/components/LoanCard.jsx
import React from 'react';

const ProgressBar = ({ paid, total }) => { /* ... */ };

const LoanCard = ({ title, amountLeft, paid, total, nextPayment, onMakePayment }) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col justify-between">
            <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-2">{title}</h5>
                <div className="text-sm text-gray-500">Залишилось виплатити</div>
                <div className="text-3xl font-bold text-gray-900 my-1">
                    {amountLeft.toLocaleString('ua-UA')} ₴
                </div>
            </div>
            <div className="my-4">
                <ProgressBar paid={paid} total={total} />
            </div>
            <div>
                <div className="text-sm text-gray-500">Наступний платіж (до 15.11)</div>
                <div className="text-lg font-medium text-gray-900">
                    {nextPayment.toLocaleString('ua-UA')} ₴
                </div>
            </div>
            <button
                onClick={onMakePayment}
                className="mt-4 w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700">
                Внести платіж
            </button>
        </div>
    );
};

export default LoanCard;
