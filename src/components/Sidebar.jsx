import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    BsGrid1X2Fill, BsBarChartFill, BsCreditCard2FrontFill,
    BsBank, BsCashStack, BsGearFill, BsPeople, BsX, BsBoxArrowLeft
} from 'react-icons/bs';

const Logo = () => (
    <div className="flex items-center space-x-2 text-white px-6 mb-8">
        <div className="text-2xl font-bold tracking-wider">monobank</div>
        <div className="text-xs bg-gray-700 px-2 py-0.5 rounded text-gray-300">WEB</div>
    </div>
);

const navLinks = [
    { to: '/', end: true, icon: <BsGrid1X2Fill />, name: 'Головна' },
    { to: '/transactions', icon: <BsBarChartFill />, name: 'Транзакції' },
    { to: '/cards', icon: <BsCreditCard2FrontFill />, name: 'Картки' },
    { to: '/loans', icon: <BsBank />, name: 'Кредити' },
    { to: '/cashback', icon: <BsCashStack />, name: 'Кешбек' },
    { to: '/bank-services', icon: <BsGearFill />, name: 'Ще' },
];

const Sidebar = ({ isOpen, onClose }) => {
    const getLinkClass = ({ isActive }) => {
        return `flex items-center space-x-4 px-6 py-3.5 transition-all duration-200 border-l-4 ${
            isActive
                ? 'border-red-500 bg-gray-800 text-white'
                : 'border-transparent text-gray-400 hover:bg-gray-800 hover:text-white'
        }`;
    };

    return (
        <>
            <div
                className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity md:hidden ${
                    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={onClose}
            />

            <aside className={`
                fixed inset-y-0 left-0 z-50 w-72 bg-[#1c1c1e] flex flex-col h-full shadow-2xl
                transform transition-transform duration-300 ease-in-out border-r border-gray-800
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                md:translate-x-0 md:static md:shadow-none
            `}>

                <div className="flex items-center justify-between pt-6 pb-2">
                    <Logo />
                    <button onClick={onClose} className="md:hidden mr-4 text-gray-400 p-2">
                        <BsX size={30} />
                    </button>
                </div>

                <nav className="flex-1 overflow-y-auto py-4 space-y-1">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.to}
                            end={link.end}
                            className={getLinkClass}
                            onClick={onClose}
                        >
                            <span className="text-xl">{link.icon}</span>
                            <span className="font-medium text-sm tracking-wide">{link.name}</span>
                        </NavLink>
                    ))}
                </nav>

                <div className="p-6 border-t border-gray-800">
                    <button className="flex items-center space-x-3 text-gray-500 hover:text-white transition-colors w-full">
                        <BsBoxArrowLeft size={20} />
                        <span>Вийти</span>
                    </button>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
