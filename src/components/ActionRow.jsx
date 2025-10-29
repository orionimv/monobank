// src/components/ActionRow.jsx
import React from 'react';
import { BsChevronRight } from 'react-icons/bs';

const ActionRow = ({ icon, title, subtitle, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="flex items-center justify-between w-full px-4 py-3 text-left hover:bg-gray-700 rounded-lg transition-colors"
        >
            <div className="flex items-center space-x-4">
                <span className="text-xl text-gray-300">{icon}</span>
                <div>
                    <div className="font-medium text-white">{title}</div>
                    {subtitle && <div className="text-sm text-gray-400">{subtitle}</div>}
                </div>
            </div>
            <BsChevronRight className="text-gray-500" />
        </button>
    );
};

export default ActionRow;
