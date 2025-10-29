// src/components/TransactionItem.jsx
import React from 'react';
import { FaApple, FaBuilding, FaUtensils, FaMoneyBillWave, FaTaxi } from 'react-icons/fa';

const getIcon = (category) => {
    if (category === 'Їжа') return <FaUtensils />;
    if (category === 'Техніка') return <FaApple />;
    if (category === 'Дохід') return <FaMoneyBillWave className="text-green-400" />;
    if (category === 'Перекази') return <FaTaxi />;
    return <FaBuilding />;
};

const TransactionItem = ({ txData }) => {
    const isIncome = txData.amount.startsWith('+');
    const amountColor = isIncome ? 'text-green-400' : 'text-white';

    return (
        <li className="flex items-center justify-between py-3 border-b border-gray-800 last:border-b-0">
            <div className="flex items-center">
        <span className="bg-gray-800 p-3 rounded-full mr-4 text-lg">
          {getIcon(txData.category)}
        </span>
                <div>
                    <div className="font-medium">{txData.name}</div>
                    <div className="text-sm text-gray-500">{txData.category}</div>
                </div>
            </div>
            <span className={`font-bold ${amountColor}`}>
        {txData.amount} {txData.currency}
      </span>
        </li>
    );
};

export default TransactionItem;
