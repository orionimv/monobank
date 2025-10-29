// src/components/CardActions.jsx
import React, { useState } from 'react';
import ActionModal from './ActionModal';
import ActionRow from './ActionRow';
import ChangeLimitModal from './ChangeLimitModal';
import ChangePinModal from './ChangePinModal';
import BlockCardModal from './BlockCardModal';
import ReissueCardModal from './ReissueCardModal';
import CardDetailsModal from './CardDetailsModal';
import StatementModal from './StatementModal';
import { cardsData } from '../data';
import {
    BsLockFill, BsCreditCard, BsArrowRepeat,
    BsKeyFill, BsFileEarmarkText, BsDownload
} from 'react-icons/bs';
import { toast } from 'react-toastify';

const ActionGroup = ({ children }) => (
    <div className="bg-gray-800 rounded-xl p-2 space-y-1">
        {children}
    </div>
);

const CardActions = ({ selectedCardId, currentLimit, onUpdateLimit }) => {
    const [showLimitModal, setShowLimitModal] = useState(false);
    const [showPinModal, setShowPinModal] = useState(false);
    const [showBlockModal, setShowBlockModal] = useState(false);
    const [showReissueModal, setShowReissueModal] = useState(false);
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [showStatementModal, setShowStatementModal] = useState(false);

    const card = cardsData.find(c => c.id === selectedCardId);
    if (!card) return null;

    const showSuccessToastAndHide = (message) => {
        toast.success(message);
        setShowLimitModal(false);
        setShowPinModal(false);
        setShowBlockModal(false);
        setShowReissueModal(false);
        setShowStatementModal(false);
    };

    const getCurrencySymbol = (currencyCode) => {
        switch (currencyCode) {
            case 'UAH': return '₴';
            case 'USD': return '$';
            case 'EUR': return '€';
            default: return currencyCode;
        }
    };

    return (
        <div className="space-y-4">
            <ActionGroup>
                <ActionRow icon={<BsLockFill />} title="Заблокувати картку" subtitle="Ви завжди зможете її розблокувати" onClick={() => setShowBlockModal(true)} />
                <ActionRow
                    icon={<BsCreditCard />}
                    title="Змінити кредитний ліміт"
                    subtitle={`Поточний ліміт ${currentLimit} ${getCurrencySymbol(card.currency)}`}
                    onClick={() => setShowLimitModal(true)}
                />
            </ActionGroup>

            <ActionGroup>
                <ActionRow icon={<BsArrowRepeat />} title="Перевипустити картку" onClick={() => setShowReissueModal(true)} />
                <ActionRow icon={<BsKeyFill />} title="Налаштування PIN-коду" onClick={() => setShowPinModal(true)} />
            </ActionGroup>

            <ActionGroup>
                <ActionRow icon={<BsFileEarmarkText />} title="Реквізити картки" subtitle="Для поповнення за IBAN" onClick={() => setShowDetailsModal(true)} />
                <ActionRow icon={<BsDownload />} title="Надіслати виписку за карткою" onClick={() => setShowStatementModal(true)} />
            </ActionGroup>

            <ChangeLimitModal
                show={showLimitModal}
                onHide={() => setShowLimitModal(false)}
                card={card}
                currentLimit={currentLimit}
                onUpdateLimit={onUpdateLimit}
            />
            <ChangePinModal
                show={showPinModal}
                onHide={() => setShowPinModal(false)}
                card={card}
                showSuccessToast={showSuccessToastAndHide}
            />
            <BlockCardModal
                show={showBlockModal}
                onHide={() => setShowBlockModal(false)}
                card={card}
                showSuccessToast={showSuccessToastAndHide}
            />
            <ReissueCardModal
                show={showReissueModal}
                onHide={() => setShowReissueModal(false)}
                card={card}
                showSuccessToast={showSuccessToastAndHide}
            />
            <CardDetailsModal
                show={showDetailsModal}
                onHide={() => setShowDetailsModal(false)}
                card={card}
            />
            <StatementModal
                show={showStatementModal}
                onHide={() => setShowStatementModal(false)}
                card={card}
                showSuccessToast={showSuccessToastAndHide}
            />
        </div>
    );
};

export default CardActions;
