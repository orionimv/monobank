// src/components/ExpensesChart.jsx
import React, { useMemo } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const categoryColors = {
    'Tech': 'rgb(99, 102, 241)',
    'Food': 'rgb(251, 113, 133)',
    'Transport': 'rgb(192, 132, 252)',
    'Shopping': 'rgb(52, 211, 153)',
    'Health': 'rgb(34, 197, 94)',
    'Entertainment': 'rgb(234, 179, 8)',
    'Other': 'rgb(156, 163, 175)',
    'Income': 'rgb(0, 0, 0, 0)',
};
const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
    },
    cutout: '70%',
};

const ExpensesChart = ({ transactions }) => {

    const chartData = useMemo(() => {

        const timeRange = 'Місяць';

        const today = new Date('2025-10-24T23:59:59');
        let daysToFilter = 30;
        if (timeRange === 'Неділя') daysToFilter = 7;
        if (timeRange === 'Рік') daysToFilter = 365;
        if (timeRange === 'Інші') daysToFilter = 9999;

        const dateLimit = new Date(today);
        dateLimit.setDate(today.getDate() - daysToFilter);

        const filteredTransactions = transactions.filter(tx => {
            const txDate = new Date(tx.date);
            return txDate >= dateLimit;
        });

        const expenseMap = new Map();
        filteredTransactions.forEach(tx => {
            if (parseFloat(tx.amount) < 0) {
                const category = tx.category || 'Інші';
                const currentAmount = expenseMap.get(category) || 0;
                expenseMap.set(category, currentAmount + Math.abs(parseFloat(tx.amount)));
            }
        });

        const labels = Array.from(expenseMap.keys());
        const data = Array.from(expenseMap.values());
        const backgroundColor = labels.map(label => categoryColors[label] || categoryColors['Інші']);

        return {
            labels: labels,
            datasets: [ { label: 'Витрати', data: data, backgroundColor: backgroundColor, borderColor: 'rgb(255, 255, 255)', borderWidth: 4, } ],
        };
    }, [transactions]);

    return (
        <div className="bg-white p-6 rounded-2xl shadow-md h-96">

            <div className="flex justify-between items-center mb-4">
                <h4 className="text-xl font-bold text-gray-900">Категорії витрат</h4>
            </div>

            <div className="h-80">
                <Doughnut data={chartData} options={options} />
            </div>
        </div>
    );
};

export default ExpensesChart;
