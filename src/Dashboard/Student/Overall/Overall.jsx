import React, { useState, useEffect } from 'react';
import FourCards from '../../FourCards';
import BarGraph from '../Overall/BarGraph';
import LineChart from '../Overall/LineChart';
import PieChart from '../Overall/PieChart';
import Radar from '../Overall/Radar';

export default function Overall() {
    const [state, setState] = useState();
    const [loading, setLoading] = useState(false);

    const data = sessionStorage.getItem("student");
    const userData = JSON.parse(data);

    const fetchStudentData = () => {
        setLoading(true);
        fetch(
            "http://localhost/college-backend/api/exam/getStudentMarks.php?rollNo=" +
            userData.rollNo
        )
            .then((res) => res.json())
            .then((data) => {
                setLoading(false);
                setState(data.data);
            })
            .catch((e) => setLoading(false));
    };

    useEffect(() => {
        fetchStudentData();
    }, []);

    const labels = state?.map(m => m.cName);
    const marks = state?.map(m => m.total);
    return (
        <FourCards
            one={<PieChart labels={labels} marks={marks} />}
            two={<LineChart labels={labels} marks={marks} />}
            three={<BarGraph labels={labels} marks={marks} />}
            four={<Radar labels={labels} marks={marks} />}
        />
    );
}
