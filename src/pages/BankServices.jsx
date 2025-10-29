// src/pages/BankServices.jsx
import React, { useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import StatementInfoModal from '../components/StatementInfoModal';
import InsuranceInfoModal from '../components/InsuranceInfoModal';
import SupportChatModal from '../components/SupportChatModal';
import LimitsSecurityModal from '../components/LimitsSecurityModal';
import { BsSend, BsFileEarmarkText, BsUmbrella, BsSim, BsChatDots, BsShieldLock } from 'react-icons/bs';

const services = [
    { id: 1, icon: <BsSend />, title: 'Платежі по IBAN', description: 'Відправка грошей фіз. особам та на разунок інших банків', to: '/payroll' },
    { id: 2, icon: <BsFileEarmarkText />, title: 'Виписки та довідки', description: 'Замовити виписку по картці або довідку о стані рахунку', action: 'statement_info' },
    { id: 3, icon: <BsUmbrella />, title: 'Страхування', description: 'ОСЦПВ, страхування здоровʼя.', action: 'insurance_info' },
    { id: 4, icon: <BsSim />, title: 'Мобільний звʼязок', description: 'Управління вашим тарифом (e-sim) та поповнення рахунку', to: '/charge-phone' },
    { id: 5, icon: <BsChatDots />, title: 'Підтримка', description: 'Чат з нашею службою підтримки 24/7.', action: 'support_chat' },
    { id: 6, icon: <BsShieldLock />, title: 'Ліміти та безпека', description: 'Управління лімітами на знаття та зміна PIN-кода.', action: 'limits_security' },
];

const BankServices = () => {
    const [showStatement, setShowStatement] = useState(false);
    const [showInsurance, setShowInsurance] = useState(false);
    const [showSupport, setShowSupport] = useState(false);
    const [showLimits, setShowLimits] = useState(false);

    const openModal = (action) => {
        switch (action) {
            case 'statement_info': setShowStatement(true); break;
            case 'insurance_info': setShowInsurance(true); break;
            case 'support_chat': setShowSupport(true); break;
            case 'limits_security': setShowLimits(true); break;
            default: console.warn("Unknown action:", action);
        }
    };

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-gray-900">Bank Services</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map(service => (
                    <ServiceCard
                        key={service.id}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                        to={service.action ? undefined : service.to}
                        onClick={service.action ? () => openModal(service.action) : undefined}
                    />
                ))}
            </div>

            <StatementInfoModal show={showStatement} onHide={() => setShowStatement(false)} />
            <InsuranceInfoModal show={showInsurance} onHide={() => setShowInsurance(false)} />
            <SupportChatModal show={showSupport} onHide={() => setShowSupport(false)} />
            <LimitsSecurityModal show={showLimits} onHide={() => setShowLimits(false)} />
        </div>
    );
};

export default BankServices;9
