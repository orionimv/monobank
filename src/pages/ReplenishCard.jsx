// src/pages/ReplenishCard.jsx
import React, { useState, useEffect } from 'react';
import { cardsData } from '../data';
import { BsCreditCard, BsCreditCardFill, BsCalendar, BsLock } from 'react-icons/bs';

const ReplenishCard = () => {
    const [amount, setAmount] = useState('');
    const [targetCardId, setTargetCardId] = useState(cardsData[0].id);
    const [extCardNumber, setExtCardNumber] = useState('');
    const [extExpiry, setExtExpiry] = useState('');
    const [extCvv, setExtCvv] = useState('');
    const [currencySymbol, setCurrencySymbol] = useState('₴');

    useEffect(() => {
        const target = cardsData.find(card => card.id === targetCardId);
        if (target) {
            setCurrencySymbol(target.currency === 'UAH' ? '₴' : target.currency === 'USD' ? '$' : '€');
        }
    }, [targetCardId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(
            `ПОПОВНЕННЯ СВОЄЇ КАРТКИ:\nНа картку (ID): ${targetCardId}\nЗ картки: ${extCardNumber}\nСума: ${amount} ${currencySymbol}`
        );
        setAmount('');
        setExtCardNumber('');
        setExtExpiry('');
        setExtCvv('');
    };

    return (
        <div className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Поповнення своєї картки</h2>

            <form onSubmit={handleSubmit} className="space-y-6">

                <div>
                    <label htmlFor="targetCard" className="block text-sm font-medium text-gray-700 mb-1">
                        Поповнити картку
                    </label>
                    <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <BsCreditCardFill className="text-gray-400" />
            </span>
                        <select
                            id="targetCard"
                            className="pl-10 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                            value={targetCardId}
                            onChange={(e) => setTargetCardId(e.target.value)}
                        >
                            {cardsData.map(card => (
                                <option key={card.id} value={card.id}>
                                    {card.name} (Текущий баланс: {card.balance} {card.currency})
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div>
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                        Сума поповнення ({currencySymbol})
                    </label>
                    <div className="relative flex items-center border border-gray-300 rounded-md bg-gray-50 focus-within:ring-1 focus-within:ring-purple-500 focus-within:border-purple-500">
                        <span className="text-gray-400 text-lg pl-3 pr-2">{currencySymbol}</span>
                        <input
                            type="number" id="amount"
                            className="block w-full px-3 py-2 bg-transparent text-gray-900 focus:outline-none"
                            placeholder="1000"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                        />
                    </div>
                </div>


                <fieldset className="border border-gray-300 p-4 rounded-lg">
                    <legend className="text-sm font-medium text-gray-700 px-1">
                        З картки іншого банку
                    </legend>
                    <div className="space-y-4 mt-2">
                        <div>
                            <label htmlFor="extCardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                Номер картки
                            </label>
                            <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <BsCreditCard className="text-gray-400" />
                </span>
                                <input
                                    type="text" id="extCardNumber"
                                    className="pl-10 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                                    placeholder="XXXX XXXX XXXX XXXX"
                                    value={extCardNumber}
                                    onChange={(e) => setExtCardNumber(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="extExpiry" className="block text-sm font-medium text-gray-700 mb-1">
                                    Термін (ММ/РР)
                                </label>
                                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <BsCalendar className="text-gray-400" />
                  </span>
                                    <input
                                        type="text" id="extExpiry"
                                        className="pl-10 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                                        placeholder="MM/YY"
                                        value={extExpiry}
                                        onChange={(e) => setExtExpiry(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="extCvv" className="block text-sm font-medium text-gray-700 mb-1">
                                    CVV
                                </label>
                                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <BsLock className="text-gray-400" />
                  </span>
                                    <input
                                        type="password" id="extCvv"
                                        maxLength="3"
                                        className="pl-10 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                                        placeholder="***"
                                        value={extCvv}
                                        onChange={(e) => setExtCvv(e.target.value.replace(/\D/g, ''))}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </fieldset>

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

export default ReplenishCard;
