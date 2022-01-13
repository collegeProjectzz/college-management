import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function BarChartGraph({ courseName, it1, it2, it3, options }) {

    const data = {
        labels: [`Marks in ${courseName}`],
        datasets: [
            {
                label: 'it 1',
                data: [it1],
                backgroundColor: '#0891b2',
            },
            {
                label: 'it 2',
                data: [it2],
                backgroundColor: '#4ade80',
            },
            {
                label: 'it 3',
                data: [it3],
                backgroundColor: '#f472b6',
            },
        ],
    };

    return <Bar options={options} data={data} />;
}

