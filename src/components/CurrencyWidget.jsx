// src/components/CurrencyWidget.jsx
import React from 'react';
import { FaDollarSign, FaEuroSign, FaBitcoin, FaLeaf, FaLiraSign, FaPoundSign } from 'react-icons/fa';

const mockRates = [
    { id: 'usd', name: 'USD', icon: <FaDollarSign />, buy: '39.80', sell: '40.20' },
    { id: 'eur', name: 'EUR', icon: <FaEuroSign />, buy: '41.50', sell: '42.10' },
    { id: 'btc', name: 'BTC', icon: <FaBitcoin />, buy: '248.5k', sell: '250.6k' },
    { id: 'pln', name: 'PLN', icon: <span className="font-bold">zł</span>, buy: '9.80', sell: '10.10' },
    { id: 'try', name: 'TRY', icon: <FaLiraSign />, buy: '1.20', sell: '1.35' },
    { id: 'gbp', name: 'GBP', icon: <FaPoundSign />, buy: '48.50', sell: '49.80' },
];

const CurrencyWidget = () => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-md">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Курс валют</h4>
            <div className="grid grid-cols-[auto_1fr_auto_auto] gap-x-4 gap-y-3 items-center">
                <div className="col-span-2"></div>
                <div className="text-sm font-medium text-gray-500 text-right">Покупка</div>
                <div className="text-sm font-medium text-gray-500 text-right">Продаж</div>

                {mockRates.map(rate => (
                    <React.Fragment key={rate.id}>
                        <span className="text-xl text-purple-600">{rate.icon}</span>
                        <span className="font-medium text-gray-800">{rate.name}</span>
                        <span className="font-medium text-gray-900 text-right">{rate.buy}</span>
                        <span className="font-medium text-gray-900 text-right">{rate.sell}</span>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default CurrencyWidget;
