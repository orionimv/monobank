// src/components/CashbackCategory.jsx
import React from 'react';

const CashbackCategory = ({ icon, name, percentage, isSelected, onClick }) => {
    const baseClasses = "relative p-4 rounded-2xl cursor-pointer transition-all duration-200";
    const selectedClasses = "bg-purple-100 border-2 border-purple-600 shadow-lg";
    const unselectedClasses = "bg-white border-2 border-transparent hover:shadow-md";

    return (
        <div
            className={`${baseClasses} ${isSelected ? selectedClasses : unselectedClasses}`}
            onClick={onClick}
        >
            <div className="flex items-center space-x-3">
                <span className="text-3xl">{icon}</span>
                <div>
                    <div className="font-semibold text-gray-900">{name}</div>
                    <div className="text-sm text-purple-600 font-bold">{percentage}%</div>
                </div>
            </div>
            {isSelected && (
                <span className="absolute top-2 right-2 text-purple-600 text-2xl">✓</span>
            )}
        </div>
    );
};

export default CashbackCategory;
