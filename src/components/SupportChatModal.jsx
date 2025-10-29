// src/components/SupportChatModal.jsx
import React from 'react';
import ActionModal from './ActionModal';
import { toast } from 'react-toastify';
import { BsChatDotsFill } from 'react-icons/bs';

const SupportChatModal = ({ show, onHide }) => {

    const startChat = () => {
        toast.info("Чат підтримки тимчасово недоступний");
        onHide();
    };

    return (
        <ActionModal show={show} onHide={onHide} title="Чат підтримки">
            <div className='text-center p-4'>
                <BsChatDotsFill className="text-5xl text-purple-500 mx-auto mb-4"/>
                <p className="mb-6 text-gray-600">Наші оператори готові допомогти вам 24/7. Натисніть кнопку нижче, щоб почати чат</p>
                <button
                    onClick={startChat}
                    className="bg-green-500 text-white py-2 px-8 rounded-lg hover:bg-green-600 transition-colors font-medium">
                    Почати чат
                </button>
            </div>
        </ActionModal>
    );
};
export default SupportChatModal;
