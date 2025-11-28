import React from 'react';
import { BsSearch, BsBell, BsPersonCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom'; // 1. Імпортуємо навігацію

const TopBar = () => {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white shadow-md">

            {/* Ліва частина: Логотип + Курси валют */}
            <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold tracking-wider">monobank</span>
                    <span className="text-xs text-gray-400 border-l border-gray-600 pl-2">WEB</span>
                </div>

                <div className="hidden lg:flex items-center space-x-4 text-xs text-gray-300">
                    <div className="flex flex-col">
                        <span>USD</span>
                        <span className="font-bold text-white">39.80</span>
                    </div>
                    <div className="flex flex-col">
                        <span>EUR</span>
                        <span className="font-bold text-white">41.50</span>
                    </div>
                    <div className="flex flex-col">
                        <span>BTC</span>
                        <span className="font-bold text-white">248.5k</span>
                    </div>
                </div>
            </div>

            <div className="hidden md:flex items-center space-x-1 bg-gray-700/50 p-1 rounded-lg">
                <button
                    onClick={() => navigate('/money-transfer')}
                    className="px-4 py-2 text-sm font-medium hover:bg-gray-600 rounded-md transition-colors"
                >
                    Переказати
                </button>
                <button
                    onClick={() => navigate('/replenish-card')}
                    className="px-4 py-2 text-sm font-medium hover:bg-gray-600 rounded-md transition-colors"
                >
                    Поповнити
                </button>
                <button
                    onClick={() => navigate('/bank-services')}
                    className="px-4 py-2 text-sm font-medium hover:bg-gray-600 rounded-md transition-colors"
                >
                    Інше
                </button>
            </div>

            <div className="flex items-center space-x-4">
                <div className="hidden md:flex items-center space-x-2 text-right">
                    <div className="text-xs text-gray-400">Вітаю,</div>
                    <div className="text-sm font-bold">Максим!</div>
                </div>

                <button className="p-2 hover:bg-gray-700 rounded-full text-gray-300 hover:text-white transition">
                    <BsSearch size={18} />
                </button>

                <button className="p-2 hover:bg-gray-700 rounded-full text-gray-300 hover:text-white transition relative">
                    <BsBell size={18} />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center overflow-hidden border-2 border-gray-700 cursor-pointer">
                    <BsPersonCircle size={20} />
                </div>
            </div>
        </div>
    );
};

export default TopBar;
