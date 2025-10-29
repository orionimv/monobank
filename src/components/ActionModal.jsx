// src/components/ActionModal.jsx
import React, { useState, useEffect } from 'react';
import { BsX } from 'react-icons/bs';

const ActionModal = ({ show, onHide, title, children }) => {
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => setIsAnimating(true), 10);
            return () => clearTimeout(timer); // Очистка таймера
        } else {
            setIsAnimating(false);
        }
    }, [show]);

    const handleClose = () => {
        setIsAnimating(false);
        setTimeout(onHide, 300);
    };

    if (!show && !isAnimating) {
        return null;
    }

    const opacityClasses = isAnimating ? 'opacity-100' : 'opacity-0';
    const overlayBg = 'rgba(107, 114, 128, 0.75)';

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm 
                  transition-opacity duration-300 ease-in-out ${opacityClasses}`}
            style={{ backgroundColor: overlayBg }}
            onClick={handleClose}
        >
            {/* Само модальное окно */}
            <div
                className={`bg-white p-6 rounded-lg shadow-xl w-full max-w-md mx-4 text-gray-900 
                    transition-all duration-300 ease-in-out transform 
                    ${isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Шапка окна */}
                <div className="flex justify-between items-center mb-4 border-b pb-3">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <button
                        onClick={handleClose}
                        className="text-gray-400 hover:text-gray-600"
                    >
                        <BsX size={24} />
                    </button>
                </div>

                {/* Содержимое окна */}
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ActionModal;
