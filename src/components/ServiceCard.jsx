// src/components/ServiceCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const ServiceCard = ({ icon, title, description, to, onClick }) => {

    const cardContent = (
        <>
            <div>
                <span className="text-3xl text-purple-600">{icon}</span>
                <h5 className="text-lg font-semibold text-gray-900 mt-3 mb-1">{title}</h5>
                <p className="text-sm text-gray-500">{description}</p>
            </div>
            <div className="flex justify-end items-center text-purple-600 font-medium mt-4">
                {onClick ? 'Відкрити' : 'Перейти'} <BsArrowRight className="ml-2" />
            </div>
        </>
    );

    if (onClick) {
        return (
            <button
                onClick={onClick}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between text-left w-full h-full"
            >
                {cardContent}
            </button>
        );
    } else {
        return (
            <Link
                to={to || '#'}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between block h-full"
            >
                {cardContent}
            </Link>
        );
    }
};

export default ServiceCard;
