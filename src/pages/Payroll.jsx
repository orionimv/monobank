// src/pages/Payroll.jsx
import React, { useState, useEffect } from 'react';
import { cardsData } from '../data';
import { BsCreditCard, BsPerson, BsTag } from 'react-icons/bs';

const Payroll = () => {
    const [recipientName, setRecipientName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [selectedCardId, setSelectedCardId] = useState(cardsData[0].id);
    const [paymentType, setPaymentType] = useState('salary');
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
            `ВІДПРАВКА:\nЗ картки (ID): ${selectedCardId}\nТип виплати: ${paymentType}\nОтримувач: ${recipientName}\nНа картку: ${cardNumber}\nСума: ${amount} ${currencySymbol}`
        );
        setRecipientName('');
        setCardNumber('');
        setAmount('');
        setPaymentType('salary');
    };

    return (
        <div className="max-w-3xl mx-auto">
            <form
                onSubmit={handleSubmit}
                className="bg-gray-800 p-8 rounded-lg shadow-xl grid grid-cols-1 md:grid-cols-2 gap-6"
            >

                <h3 className="text-2xl font-bold text-white col-span-1 md:col-span-2">
                    Форма переказу
                </h3>

                <div>
                    <label htmlFor="recipientName" className="block text-sm font-medium text-gray-300 mb-1">
                        Імʼя отримувача
                    </label>
                    <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <BsPerson className="text-gray-400" />
            </span>
                        <input
                            type="text" id="recipientName"
                            className="pl-10 block w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                            placeholder="Прізвище Імʼя"
                            value={recipientName}
                            onChange={(e) => setRecipientName(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-300 mb-1">
                        Номер картки отримувача
                    </label>
                    <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <BsCreditCard className="text-gray-400" />
            </span>
                        <input
                            type="text" id="cardNumber"
                            className="pl-10 block w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                            placeholder="5375 0000 0000 0000"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-300 mb-1">
                        Сума ({currencySymbol})
                    </label>
                    <div className="relative flex items-center border border-gray-600 rounded-md bg-gray-700 focus-within:ring-1 focus-within:ring-purple-500 focus-within:border-purple-500">
                        <span className="text-gray-400 text-lg pl-3 pr-2">{currencySymbol}</span>
                        <input
                            type="number" id="amount"
                            className="block w-full px-3 py-2 bg-transparent text-white focus:outline-none"
                            placeholder="10000"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="paymentType" className="block text-sm font-medium text-gray-300 mb-1">
                        Тип виплати
                    </label>
                    <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <BsTag className="text-gray-400" />
            </span>
                        <select
                            id="paymentType"
                            className="pl-10 block w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                            value={paymentType}
                            onChange={(e) => setPaymentType(e.target.value)}
                        >
                            <option value="salary">Зарплата</option>
                            <option value="bonus">Премія</option>
                            <option value="sick_leave">Лікарняний</option>
                            <option value="vacation">Відпускні</option>
                        </select>
                    </div>
                </div>

                <div className="col-span-1 md:col-span-2">
                    <label htmlFor="sourceCard" className="block text-sm font-medium text-gray-300 mb-1">
                        Списати з картки
                    </label>
                    <select
                        id="sourceCard"
                        className="block w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500"
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

                <div className="col-span-1 md:col-span-2 text-right">
                    <button
                        type="submit"
                        className="w-full md:w-auto bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700"
                    >
                        Відправити
                    </button>
                </div>

            </form>
        </div>
    );
};

export default Payroll;
