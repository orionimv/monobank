// src/components/DepositCard.jsx
import React from 'react';
import { BsTrash } from 'react-icons/bs';

const ProgressBar = ({ current, goal }) => {
    const percentage = Math.min((current / goal) * 100, 100);
    return (
        <div>
            <div className="bg-gray-200 rounded-full h-2.5">
                <div
                    className="bg-green-500 h-2.5 rounded-full"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
};

const DepositCard = ({ id, title, icon, current, goal, rate, onTopUp, onDelete }) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-md relative group">
            <div className="flex items-center space-x-3 mb-3">
                <span className="text-3xl">{icon}</span>
                <h5 className="text-lg font-semibold text-gray-900">{title}</h5>
            </div>
            <div className="text-3xl font-bold text-gray-900">
                {(current || 0).toLocaleString('ua-UA')} ₴
            </div>
            <div className="text-sm text-gray-500 mb-4">
                из {(goal || 0).toLocaleString('ua-UA')} ₴
            </div>
            <ProgressBar current={current || 0} goal={goal || 1} />
            <div className="text-sm text-green-600 mt-3">
                {rate}% річних (вже накопичено +{ ((current || 0) * (rate / 100)).toLocaleString('ua-UA') } ₴)
            </div>

            <button
                onClick={onTopUp}
                className="mt-4 w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-black transition-colors">
                Поповнити
            </button>

            <button
                onClick={() => onDelete(id)}
                className="absolute top-3 right-3 p-2 bg-red-100 text-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-200"
                title="Розбити банку"
            >
                <BsTrash size={18} />
            </button>
        </div>
    );
};

export default DepositCard;
