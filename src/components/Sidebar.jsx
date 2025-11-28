import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    BsGrid1X2Fill, BsBarChartFill, BsCreditCard2FrontFill,
    BsBank, BsCashStack, BsGearFill, BsPeople, BsX, BsBoxArrowLeft
} from 'react-icons/bs';

const navLinks = [
    { to: '/', end: true, icon: <BsGrid1X2Fill />, name: 'Головна' },
    { to: '/transactions', icon: <BsBarChartFill />, name: 'Транзакції' },
    { to: '/cards', icon: <BsCreditCard2FrontFill />, name: 'Картки' },
    { to: '/loans', icon: <BsBank />, name: 'Кредити' },
    { to: '/cashback', icon: <BsCashStack />, name: 'Кешбек' },
    { to: '/payroll', icon: <BsPeople />, name: 'Зарплата' },
    { to: '/bank-services', icon: <BsGearFill />, name: 'Ще' },
];

const Sidebar = ({ isOpen, onClose }) => {
    const getLinkClass = ({ isActive }) => {
        return `flex items-center space-x-4 px-5 py-3 rounded-lg transition-all duration-200 ${
            isActive
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/20'
                : 'text-gray-400 hover:bg-gray-700 hover:text-white'
        }`;
    };

    return (
        <>
            <div
                className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity md:hidden ${
                    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={onClose}
            />

            <aside className={`
                fixed inset-y-0 left-0 z-50 w-64 h-full bg-gray-800 border-r border-gray-700 flex flex-col
                transform transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                md:translate-x-0 md:static
            `}>

                <div className="flex items-center justify-between px-6 py-6 md:hidden">
                    <div className="text-white text-2xl font-bold tracking-wider">monobank</div>
                    <button onClick={onClose} className="text-gray-400 hover:text-white p-1">
                        <BsX size={28} />
                    </button>
                </div>

                <div className="hidden md:block h-6"></div>

                <nav className="flex-1 overflow-y-auto px-4 space-y-2 py-4">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.to}
                            end={link.end}
                            className={getLinkClass}
                            onClick={onClose}
                        >
                            <span className="text-xl">{link.icon}</span>
                            <span className="font-medium text-sm">{link.name}</span>
                        </NavLink>
                    ))}
                </nav>

                <div className="p-4 border-t border-gray-700 mx-4 mb-4">
                    <button className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors w-full px-2 py-2">
                        <BsBoxArrowLeft size={20} />
                        <span>Вийти</span>
                    </button>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
