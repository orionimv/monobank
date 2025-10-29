// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

import Login from './pages/Login';
import MainLayout from './pages/MainLayout';
import Home from './pages/Home';
import Cards from './pages/Cards';
import Transactions from './pages/History';
import Payroll from './pages/Payroll';
import Loans from './pages/Loans';
import Cashback from './pages/Cashback';
import BankServices from './pages/BankServices';
import ChargePhone from './pages/ChargePhone';
import ReplenishCard from './pages/ReplenishCard';
import MoneyTransfer from './pages/MoneyTransfer';

function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />

            <Route
                path="/"
                element={<ProtectedRoute> <MainLayout /> </ProtectedRoute>}
            >
                <Route index element={<Home />} />
                <Route path="transactions" element={<Transactions />} />
                <Route path="cards" element={<Cards />} />
                <Route path="loans" element={<Loans />} />
                <Route path="cashback" element={<Cashback />} />
                <Route path="bank-services" element={<BankServices />} />
                <Route path="payroll" element={<Payroll />} />

                <Route path="charge-phone" element={<ChargePhone />} />
                <Route path="replenish-card" element={<ReplenishCard />} />

                <Route path="money-transfer" element={<MoneyTransfer />} />

            </Route>
        </Routes>
    );
}

export default App;
