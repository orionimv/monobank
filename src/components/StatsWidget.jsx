// src/components/StatsWidget.jsx
import React from 'react';
import { transactionsData } from '../data';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';

let totalIncome = 0;
let totalExpense = 0;

transactionsData.forEach(tx => {
    const amount = parseFloat(tx.amount);
    if (amount > 0) {
        totalIncome += amount;
    } else {
        totalExpense += amount;
    }
});

const StatsWidget = () => {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl h-full">
            <h4 className="text-xl font-bold text-white mb-4">Статистика (за весь час)</h4>
            <div className="space-y-4">
                <div className="flex items-center space-x-3">
          <span className="p-2 bg-green-500/20 rounded-full">
            <BsArrowUp className="text-green-400" />
          </span>
                    <div>
                        <div className="text-sm text-gray-400">Прибутки</div>
                        <div className="text-lg font-bold text-green-400">
                            + {totalIncome.toFixed(2)} ₴
                        </div>
                    </div>
                </div>
                <div className="flex items-center space-x-3">
          <span className="p-2 bg-red-500/20 rounded-full">
            <BsArrowDown className="text-red-400" />
          </span>
                    <div>
                        <div className="text-sm text-gray-400">Витрати</div>
                        <div className="text-lg font-bold text-red-400">
                            {totalExpense.toFixed(2)} ₴
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsWidget;
