// src/components/Card.jsx
import React, { useState, useEffect } from 'react';
import { FaCcVisa, FaCcMastercard } from 'react-icons/fa6';
import { SiPayoneer } from 'react-icons/si';

const getLogo = (logoName) => {
    if (logoName === 'visa') return <FaCcVisa className="text-5xl text-blue-600" />;
    if (logoName === 'mastercard') return <FaCcMastercard className="text-5xl text-red-600" />;
    if (logoName === 'payoneer') return <SiPayoneer className="text-5xl text-orange-500" />;
    return null;
};

const Card = ({ cardData, onClick, isSelected }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleDoubleClick = () => setIsFlipped(true);

    useEffect(() => {
        if (isFlipped) {
            const timer = setTimeout(() => setIsFlipped(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [isFlipped]);


    let themeClasses = '';
    let secondaryText = '';
    let balanceText = '';

    if (cardData.theme === 'dark') {
        themeClasses = 'bg-gray-900 text-white';
        secondaryText = 'text-gray-400';
        balanceText = 'text-gray-500';
    } else {
        themeClasses = 'bg-white text-gray-900 shadow-md';
        secondaryText = 'text-gray-400';
        balanceText = 'text-gray-500';
    }

    const selectionClasses = isSelected
        ? 'ring-4 ring-offset-2 ring-purple-500'
        : 'ring-0';

    return (
        <div
            className={`card-container ${isFlipped ? 'is-flipped' : ''}`}
            onClick={onClick}
            onDoubleClick={handleDoubleClick}
        >
            <div
                className={`card-front p-6 rounded-2xl flex flex-col justify-between h-52 
                    ${themeClasses} ${selectionClasses} transition-all duration-300`}
            >
                <div>
                    <span className={`text-sm font-light ${secondaryText}`}>Total Balance</span>
                    <div className="text-3xl font-bold">
                        {cardData.balance}
                        <span className={`text-xl ml-2 ${balanceText}`}>
              {cardData.currency}
            </span>
                    </div>
                </div>
                <div className="font-mono text-lg tracking-wider my-3">
                    {cardData.number}
                </div>
                <div className="flex justify-between items-end">
                    <div>
                        <span className={`text-xs ${secondaryText}`}>Expiry</span>
                        <div className="font-medium">{cardData.expiry}</div>
                    </div>
                    <div>{getLogo(cardData.logo)}</div>
                </div>
            </div>

            <div
                className={`card-back absolute top-0 left-0 w-full h-52 p-6 rounded-2xl 
                    ${themeClasses} ${selectionClasses}`}
            >
                <div className="w-full h-8 bg-black mt-6"></div>
                <div className="text-right mt-4">
                    <div className={`text-xs ${secondaryText}`}>CVV</div>
                    <div className="font-mono text-lg p-2 bg-white text-black w-20 ml-auto rounded">
                        {cardData.cvv}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
