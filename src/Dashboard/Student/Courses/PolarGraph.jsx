import React from 'react';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

export default function PolarGraph({ courseName, it1, it2, it3, options }) {

    const data = {
        labels: ["it1", "it2", "it3"],
        datasets: [
            {
                label: "It marks",
                data: [it1, it2, it3],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };



    return <Radar data={data} options={options} />;
}
