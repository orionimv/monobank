// src/pages/MoneyTransfer.jsx
import React, { useState, useEffect } from 'react';
import { cardsData } from '../data';
import { BsCreditCard, BsPerson, BsChatLeftText, BsCreditCardFill } from 'react-icons/bs';

const MoneyTransfer = () => {
    const [amount, setAmount] = useState('');
    const [selectedCardId, setSelectedCardId] = useState(cardsData[0].id);
    const [recipientCardNumber, setRecipientCardNumber] = useState('');
    const [recipientName, setRecipientName] = useState('');
    const [comment, setComment] = useState('');
    const [currencySymbol, setCurrencySymbol] = useState('₴');

    useEffect(() => {
        const selected = cardsData.find(card => card.id === selectedCardId);
        if (selected) {
            setCurrencySymbol(selected.currency === 'UAH' ? '₴' : selected.currency === 'USD' ? '$' : '€');
        }
    }, [selectedCardId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(
            `ЗВИЧАЙНИЙ ПЕРЕКАЗ:\nЗ картки (ID): ${selectedCardId}\nНа картку: ${recipientCardNumber}\nОтримувач: ${recipientName}\nСума: ${amount} ${currencySymbol}\nКоментарій: ${comment}`
        );
        setAmount('');
        setRecipientCardNumber('');
        setRecipientName('');
        setComment('');
    };

    return (
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Переказ грошей</h2>

            <form onSubmit={handleSubmit} className="space-y-6">

                <div>
                    <label htmlFor="sourceCard" className="block text-sm font-medium text-gray-700 mb-1">
                        Відправити з картки
                    </label>
                    <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <BsCreditCardFill className="text-gray-400" />
            </span>
                        <select
                            id="sourceCard"
                            className="pl-10 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                            value={selectedCardId}
                            onChange={(e) => setSelectedCardId(e.target.value)}
                        >
                            {cardsData.map(card => (
                                <option key={card.id} value={card.id}>
                                    {card.name} (Баланс: {card.balance} {card.currency})
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div>
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                        Сума переказу
                    </label>
                    <div className="relative flex items-center border border-gray-300 rounded-md bg-gray-50 focus-within:ring-1 focus-within:ring-purple-500 focus-within:border-purple-500">
                        <span className="text-gray-400 text-lg pl-3 pr-2">{currencySymbol}</span>
                        <input
                            type="number" id="amount"
                            className="block w-full px-3 py-2 bg-transparent text-gray-900 focus:outline-none" // Убрали pl-10, добавили bg-transparent
                            placeholder="1000"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="recipientCardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                        Номер картки отримувача
                    </label>
                    <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <BsCreditCard className="text-gray-400" />
            </span>
                        <input
                            type="text" id="recipientCardNumber"
                            className="pl-10 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                            placeholder="XXXX XXXX XXXX XXXX"
                            value={recipientCardNumber}
                            onChange={(e) => setRecipientCardNumber(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="recipientName" className="block text-sm font-medium text-gray-700 mb-1">
                        ПІБ отримувача
                    </label>
                    <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <BsPerson className="text-gray-400" />
            </span>
                        <input
                            type="text" id="recipientName"
                            className="pl-10 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                            placeholder="Прізвище Імʼя По батькові"
                            value={recipientName}
                            onChange={(e) => setRecipientName(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                        Назначення платежа (коментарій)
                    </label>
                    <div className="relative">
            <span className="absolute top-3 left-0 flex items-center pl-3">
              <BsChatLeftText className="text-gray-400" />
            </span>
                        <textarea
                            id="comment"
                            rows="3"
                            className="pl-10 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                            placeholder="На подарунок..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        ></textarea>
                    </div>
                </div>

                <div className="pt-2">
                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition"
                    >
                        Переказати
                    </button>
                </div>
            </form>
        </div>
    );
};

export default MoneyTransfer;
