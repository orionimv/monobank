// src/components/BalanceChart.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend
);

const commonDatasetOptions = {
    label: '<Баланс>', fill: false,
    backgroundColor: 'rgb(99, 102, 241)',
    borderColor: 'rgba(99, 102, 241, 0.8)',
    tension: 0.4,
};

const allChartData = {
    'c1': {
        week: {
            labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
            datasets: [{ ...commonDatasetOptions, data: [14000, 17000, 50000, 145000, 155000, 151000, 150000] }],
        },
        month: {
            labels: ['Неділя 1', 'Неділя 2', 'Неділя 3', 'Неділя 4'],
            datasets: [{ ...commonDatasetOptions, data: [120000, 135000, 110000, 150000] }],
        },
        year: {
            labels: ['Січ', 'Бер', 'Трав', 'Лип', 'Вер', 'Лист', 'Груд'],
            datasets: [{ ...commonDatasetOptions, data: [50000, 80000, 150000, 120000, 200000, 180000, 150000] }],
        },
        other: {
            labels: ['2023', '2024', '2025'],
            datasets: [{ ...commonDatasetOptions, data: [100000, 300000, 150000] }],
        }
    },
    'c2': {
        week: {
            labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
            datasets: [{ ...commonDatasetOptions, data: [3000, 2500, 2800, 4000, 3500, 2200, 2100] }],
        },
        month: {
            labels: ['Неділя 1', 'Неділя 2', 'Неділя 3', 'Неділя 4'],
            datasets: [{ ...commonDatasetOptions, data: [15000, 12000, 8000, 2100] }],
        },
        year: {
            labels: ['Січ', 'Бер', 'Трав', 'Лип', 'Вер', 'Лист', 'Груд'],
            datasets: [{ ...commonDatasetOptions, data: [5000, 18000, 15000, 10000, 2000, 18000, 2100] }],
        },
        other: {
            labels: ['2023', '2024', '2025'],
            datasets: [{ ...commonDatasetOptions, data: [10000, 30000, 2100] }],
        }
    },
    'c3': {
        week: {
            labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
            datasets: [{ ...commonDatasetOptions, data: [8000, 8100, 8050, 8200, 8150, 8250, 8305] }],
        },
        month: {
            labels: ['Неділя 1', 'Неділя 2', 'Неділя 3', 'Неділя 4'],
            datasets: [{ ...commonDatasetOptions, data: [7000, 7500, 8000, 8305] }],
        },
        year: {
            labels: ['Січ', 'Бер', 'Трав', 'Лип', 'Вер', 'Лист', 'Груд'],
            datasets: [{ ...commonDatasetOptions, data: [1000, 3000, 5000, 4500, 6000, 7000, 8305] }],
        },
        other: {
            labels: ['2023', '2024', '2025'],
            datasets: [{ ...commonDatasetOptions, data: [500, 2000, 8305] }],
        }
    },
};


const TimeRangeButton = ({ label, timeRange, setTimeRange }) => {
    const isActive = timeRange === label;
    const baseClasses = "px-3 py-1 rounded-md text-sm font-medium transition-colors";
    const activeClasses = "bg-gray-800 text-white shadow-sm";
    const inactiveClasses = "text-gray-400 hover:text-gray-900";
    return ( <button className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`} onClick={() => setTimeRange(label)}> {label} </button> );
};

const BalanceChart = ({ selectedCard, timeRange, setTimeRange }) => {

    let chartData;
    if (allChartData[selectedCard.id]) {
        chartData = allChartData[selectedCard.id][timeRange.toLowerCase()];
    } else {
        chartData = allChartData['c1']['week'];
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
        },
        scales: {
            y: {
                ticks: {
                    callback: function(value) {
                        return value.toLocaleString('ua-UA') + ' ' + selectedCard.currency;
                    }
                }
            }
        }
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-md h-96">

            <div className="flex justify-between items-center mb-4">
                <h4 className="text-xl font-bold text-gray-900">Загальна сума</h4>
                <div className="flex items-center space-x-1 p-1 rounded-lg">
                    <TimeRangeButton label="Week" timeRange={timeRange} setTimeRange={setTimeRange} />
                    <TimeRangeButton label="Month" timeRange={timeRange} setTimeRange={setTimeRange} />
                    <TimeRangeButton label="Year" timeRange={timeRange} setTimeRange={setTimeRange} />
                    <TimeRangeButton label="Other" timeRange={timeRange} setTimeRange={setTimeRange} />
                </div>
            </div>

            <div className="h-72">
                <Line data={chartData} options={options} />
            </div>
        </div>
    );
};

export default BalanceChart;
