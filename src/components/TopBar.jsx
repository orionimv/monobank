// src/components/TopBar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { BsArrowDown, BsArrowUp, BsSearch } from 'react-icons/bs';

const TopBar = () => {
    const { user, logout } = useAuth();

    const getTopNavLinkClass = ({ isActive }) => {
        const baseClasses = "px-4 py-2 text-sm font-medium rounded-md transition-colors";
        return isActive
            ? `${baseClasses} bg-gray-600 text-white`
            : `${baseClasses} text-gray-300 hover:bg-gray-600`;
    };

    return (
        <div className="flex items-center justify-between w-full h-16 px-6 bg-gray-800 border-b border-gray-700 text-sm">

            <div className="flex items-center space-x-8">
                <div className="flex items-baseline space-x-2">
                    <span className="text-2xl font-bold text-white">monobank</span>
                    <span className="text-lg font-light text-gray-400">| Web</span>
                </div>

                <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1 text-gray-300">
                        <span>USD: 39.80</span>
                        <BsArrowDown className="text-red-500" />
                    </div>
                    <span className="text-gray-600">|</span>
                    <div className="flex items-center space-x-1 text-gray-300">
                        <span>EUR: 41.50</span>
                        <BsArrowUp className="text-green-500" />
                    </div>
                    <span className="text-gray-600">|</span>
                    <div className="flex items-center space-x-1 text-gray-300">
                        <span>BTC: 248.5k</span>
                        <BsArrowUp className="text-green-500" />
                    </div>
                </div>
            </div>

            <div className="flex items-center space-x-1 bg-gray-700 rounded-lg p-1">
                <NavLink
                    to="/money-transfer"
                    className={getTopNavLinkClass}
                >
                    Переказати
                </NavLink>
                <NavLink
                    to="/charge-phone"
                    className={getTopNavLinkClass}
                >
                    Поповнити рахунок
                </NavLink>
                <NavLink
                    to="/replenish-card"
                    className={getTopNavLinkClass}
                >
                    Поповнити картку
                </NavLink>
            </div>

            <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-300">Вітаю, {user?.name || 'User'}!</span>
                <button className="text-gray-400 hover:text-white">
                    <BsSearch className="text-lg" />
                </button>

                <button onClick={logout} className="block relative" title="Вийти">
                    <img
                        src={user?.photo}
                        alt="Profile"
                        className="w-9 h-9 rounded-full border-2 border-gray-600"
                    />
                    <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-gray-800"></span>
                </button>
            </div>
        </div>
    );
};

export default TopBar;
