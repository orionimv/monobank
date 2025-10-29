// src/pages/Cards.jsx
import React, { useState } from 'react';
import { cardsData } from '../data.js';
import Card from '../components/Card';
import CardActions from '../components/CardActions';

const Cards = () => {
    const [selectedCardId, setSelectedCardId] = useState(cardsData[0]?.id || null);

    const initialLimits = cardsData.reduce((acc, card) => {
        acc[card.id] = 0;
        return acc;
    }, {});
    const [cardLimits, setCardLimits] = useState(initialLimits);

    const handleUpdateLimit = (cardId, newLimit) => {
        setCardLimits(prevLimits => ({
            ...prevLimits,
            [cardId]: newLimit
        }));
    };

    const handleSelectCard = (id) => {
        setSelectedCardId(prevId => (prevId === id ? null : id));
    };

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-gray-900">
                Картки
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                {cardsData.map(card => (
                    <div key={card.id}>
                        <Card
                            cardData={card}
                            isSelected={card.id === selectedCardId}
                            onClick={() => handleSelectCard(card.id)}
                        />
                    </div>
                ))}
            </div>

            {selectedCardId && (
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        Дії по картці
                    </h2>
                    <CardActions
                        selectedCardId={selectedCardId}
                        currentLimit={cardLimits[selectedCardId]}
                        onUpdateLimit={handleUpdateLimit}
                    />
                </div>
            )}
        </div>
    );
};

export default Cards;
