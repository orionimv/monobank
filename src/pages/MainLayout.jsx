import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import { BsList } from 'react-icons/bs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-gray-100 overflow-hidden">

            <Sidebar
                isOpen={isSidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />

            <div className="flex-1 flex flex-col min-w-0">

                <header className="md:hidden bg-white shadow-sm px-4 py-3 flex items-center justify-between shrink-0 z-20">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="p-2 -ml-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                    >
                        <BsList size={28} />
                    </button>
                    <span className="font-bold text-lg text-gray-800">Monobank</span>
                    <div className="w-8" />
                </header>

                <div className="hidden md:block shrink-0">
                    <TopBar />
                </div>

                <main className="flex-1 overflow-y-auto p-4 md:p-10 bg-gray-100">
                    <Outlet />
                </main>
            </div>

            <ToastContainer position="top-center" theme="light" />
        </div>
    );
};

export default MainLayout;
