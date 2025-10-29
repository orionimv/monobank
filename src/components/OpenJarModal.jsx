// src/components/OpenJarModal.jsx
import React, { useState } from 'react';
import ActionModal from './ActionModal';
import { toast } from 'react-toastify';

const OpenJarModal = ({ show, onHide, onAddJar }) => {
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');

    const handleSubmit = () => {
        if (!name || !goal || parseFloat(goal) <= 0) return;

        onAddJar(name, goal);

        showSuccessToast(`'Банка' "${name}" Відкрита!`);
        setName('');
        setGoal('');
    };

    const showSuccessToast = (message) => {
        toast.success(message);
        onHide();
    };

    const isDisabled = !name || !goal || parseFloat(goal) <= 0;

    return (
        <ActionModal show={show} onHide={onHide} title="Відкрити 'Банку'">
            <div>
                <p className="mb-4">Придумайте назву та ціль для вашої нової 'Банки'.</p>
                <label htmlFor="jarNameOpenModal" className="block text-sm font-medium mb-1">Назва:</label>
                <input
                    type="text" id="jarNameOpenModal"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border rounded bg-gray-50 mb-4" placeholder="На мечту..."/>
                <label htmlFor="jarGoalOpenModal" className="block text-sm font-medium mb-1">Ціль (сума, ₴):</label>
                <input
                    type="number" id="jarGoalOpenModal"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full p-2 border rounded bg-gray-50 mb-4" placeholder="100000"/>
                <button
                    onClick={handleSubmit}
                    disabled={isDisabled}
                    className={`w-full text-white py-2 rounded transition-colors ${isDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-800 hover:bg-black'}`}>
                    Відкрити
                </button>
            </div>
        </ActionModal>
    );
};

export default OpenJarModal;
