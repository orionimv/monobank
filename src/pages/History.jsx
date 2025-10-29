// src/pages/History.jsx
import React from 'react';
import { transactionsData } from '../data.js';
import TransactionItem from '../components/TransactionItem';

const History = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Історія операцій</h2>
            <ul className="list-none p-0 space-y-2 bg-gray-800 p-6 rounded-lg">
                {transactionsData.map(tx => (
                    <TransactionItem key={tx.id} txData={tx} />
                ))}
            </ul>
        </div>
    );
};

export default History;
