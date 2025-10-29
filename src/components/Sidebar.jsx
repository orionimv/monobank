// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

import {
    BsGrid1X2Fill,
    BsBarChartFill,
    BsCreditCard2FrontFill,
    BsBank,
    BsCashStack,
    BsGearFill,
    BsPeople
} from 'react-icons/bs';

const navLinks = [
    { to: '/', end: true, icon: <BsGrid1X2Fill />, name: 'Головна' },
    { to: '/transactions', icon: <BsBarChartFill />, name: 'Транзакції' },
    { to: '/cards', icon: <BsCreditCard2FrontFill />, name: 'Картки' },
    { to: '/loans', icon: <BsBank />, name: 'Кредити/Депозити' },
    { to: '/cashback', icon: <BsCashStack />, name: 'Кешбек' },
    { to: '/payroll', icon: <BsPeople />, name: 'Виплата зарплати' },
    { to: '/bank-services', icon: <BsGearFill />, name: 'Банковські сервіси' },
];

const Sidebar = () => {
    const getLinkClass = ({ isActive }) => {
        const baseClasses = 'flex items-center space-x-4 px-5 py-3 text-gray-400 rounded-lg';
        return isActive
            ? `${baseClasses} bg-purple-600 text-white shadow-lg`
            : `${baseClasses} hover:bg-gray-700 hover:text-white`;
    };

    return (
        <div className="flex flex-col w-72 h-full px-6 py-8 bg-gray-800 border-r border-gray-700">

            <nav className="flex flex-col space-y-3 flex-1">
                {navLinks.map((link) => (
                    <NavLink
                        key={link.name}
                        to={link.to}
                        end={link.end ?? false}
                        className={getLinkClass}
                    >
                        <span className="text-xl">{link.icon}</span>
                        <span className="font-medium">{link.name}</span>
                    </NavLink>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;
