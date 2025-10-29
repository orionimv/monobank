// src/pages/Home.jsx
import React, { useState } from 'react';
import { cardsData, transactionsData } from '../data.js'; // Наши данные
import Card from '../components/Card';
import BalanceChart from '../components/BalanceChart';
import ExpensesChart from '../components/ExpensesChart';
import CurrencyWidget from '../components/CurrencyWidget';
import TransactionItem from '../components/TransactionItem';

const Home = () => {
    const [selectedCardId, setSelectedCardId] = useState(cardsData[0]?.id || null);
    const [timeRange, setTimeRange] = useState('Week');

    const handleSelectCard = (id) => {
        setSelectedCardId(id);
    };

    const selectedCard = cardsData.find(c => c.id === selectedCardId) || cardsData[0];
    const cardTransactions = transactionsData.filter(
        tx => tx.cardId === selectedCardId
    );

    const recentTransactions = cardTransactions.slice(0, 4);

    return (
        <div className="space-y-8">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cardsData.map(card => (
                    <Card
                        key={card.id}
                        cardData={card}
                        isSelected={card.id === selectedCardId}
                        onClick={() => handleSelectCard(card.id)}
                    />
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <BalanceChart
                        selectedCard={selectedCard}
                        timeRange={timeRange}
                        setTimeRange={setTimeRange}
                    />
                </div>
                <div className="lg:col-span-1">
                    <ExpensesChart
                        transactions={cardTransactions}
                        timeRange={timeRange}
                        setTimeRange={setTimeRange}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-md">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Останні операції</h4>
                    {recentTransactions.length > 0 ? (
                        <ul className="list-none p-0 space-y-2">
                            {recentTransactions.map(tx => (
                                <TransactionItem key={tx.id} txData={tx} />
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500 italic">Немає операцій по цій картці за выбраним періодом</p>
                    )}
                </div>

                <div className="lg:col-span-1">
                    <CurrencyWidget />
                </div>
            </div>
        </div>
    );
};

export default Home;
