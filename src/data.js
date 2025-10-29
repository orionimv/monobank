// src/data.js

export const cardsData = [
    {
        id: 'c1',
        name: 'Чорна картка',
        number: '4441 1132 2347 3478',
        balance: '150 000',
        currency: 'UAH',
        expiry: '07/28',
        logo: 'mastercard',
        theme: 'dark',
        cvv: '123',
    },
    {
        id: 'c2',
        name: 'Доларова картка',
        number: '8346 5248 6232 7813',
        balance: '12 180',
        currency: 'USD',
        expiry: '10/26',
        logo: 'visa',
        theme: 'light',
        cvv: '456', //
    },
    {
        id: 'c3',
        name: 'Картка Payoneer',
        number: '5438 2343 0474 7324',
        balance: '8 305',
        currency: 'EUR',
        expiry: '14/28',
        logo: 'payoneer',
        theme: 'light',
        cvv: '789',
    },
];

export const transactionsData = [
    { id: 't1', cardId: 'c1', name: 'Apple Store', category: 'Tech', amount: '-1200.00', currency: '₴', date: '2025-10-24' },
    { id: 't2', cardId: 'c1', name: 'Ресторан "Базилік"', category: 'Food', amount: '-450.00', currency: '₴', date: '2025-10-23' },
    { id: 't3', cardId: 'c1', name: 'Пополнение счета', category: 'Income', amount: '+5000.00', currency: '₴', date: '2025-10-22' },
    { id: 't4', cardId: 'c1', name: 'Такси "Bolt"', category: 'Transport', amount: '-120.00', currency: '₴', date: '2025-10-20' },
    { id: 't9', cardId: 'c1', name: 'Кино "Planeta Kino"', category: 'Entertainment', amount: '-600.00', currency: '₴', date: '2025-09-30' },
    { id: 't10', cardId: 'c1', name: 'Nike Store', category: 'Shopping', amount: '-3500.00', currency: '₴', date: '2025-09-15' },
    { id: 't11', cardId: 'c1', name: 'Аптека', category: 'Health', amount: '-300.00', currency: '₴', date: '2025-08-01' },

    { id: 't5', cardId: 'c2', name: 'Amazon', category: 'Shopping', amount: '-85.00', currency: '$', date: '2025-10-24' },
    { id: 't6', cardId: 'c2', name: 'Перевод', category: 'Income', amount: '+1500.00', currency: '$', date: '2025-10-22' },
    { id: 't12', cardId: 'c2', name: 'Uber', category: 'Transport', amount: '-15.00', currency: '$', date: '2025-09-25' },

    { id: 't7', cardId: 'c3', name: 'Booking.com', category: 'Other', amount: '-250.00', currency: '€', date: '2025-10-22' },
    { id: 't8', cardId: 'c3', name: 'Payoneer Fee', category: 'Other', amount: '-5.00', currency: '€', date: '2025-10-01' },
];
