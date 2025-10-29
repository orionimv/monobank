// src/pages/ChargePhone.jsx
import React, { useState, useEffect } from 'react';
import { cardsData } from '../data';
import { BsPhone, BsCreditCard } from 'react-icons/bs';

const ChargePhone = () => {
    const [phone, setPhone] = useState('');
    const [amount, setAmount] = useState('');
    const [selectedCardId, setSelectedCardId] = useState(cardsData[0].id);
    const [currencySymbol, setCurrencySymbol] = useState('₴'); // 2. Добавили состояние валюты

    useEffect(() => {
        const selected = cardsData.find(card => card.id === selectedCardId);
        if (selected) {
            setCurrencySymbol(selected.currency === 'UAH' ? '₴' : selected.currency === 'USD' ? '$' : '€');
        }
    }, [selectedCardId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(
            `ПОПОВНЕННЯ ТЕЛЕФОНУ:\nЗ картки (ID): ${selectedCardId}\nНа номер: ${phone}\nСума: ${amount} ${currencySymbol}`
        );
        setPhone('');
        setAmount('');
    };

    return (
        <div className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Поповнення телефона</h2>

            <form onSubmit={handleSubmit} className="space-y-6">

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Номер телефона
                    </label>
                    <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <BsPhone className="text-gray-400" />
            </span>
                        <input
                            type="tel" id="phone"
                            className="pl-10 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                            placeholder="+380 (XX) XXX-XX-XX"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                        Сума ({currencySymbol})
                    </label>
                    <div className="relative flex items-center border border-gray-300 rounded-md bg-gray-50 focus-within:ring-1 focus-within:ring-purple-500 focus-within:border-purple-500">
                        <span className="text-gray-400 text-lg pl-3 pr-2">{currencySymbol}</span>
                        <input
                            type="number" id="amount"
                            className="block w-full px-3 py-2 bg-transparent text-gray-900 focus:outline-none"
                            placeholder="100"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="sourceCard" className="block text-sm font-medium text-gray-700 mb-1">
                        Списати з картки
                    </label>
                    <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <BsCreditCard className="text-gray-400" />
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

                <div className="pt-2">
                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition"
                    >
                        Поповнити
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ChargePhone;
