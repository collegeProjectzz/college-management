import React, { useState, useEffect } from 'react';
import Dashboard from '../Dashboard';
import RestContainer from '../RestContainer';
import BarGraph from './overall/BarGraph';
import LineChart from './overall/LineChart';
import PieChart from './overall/PieChart';
import Radar from './overall/Radar';

export default function StudentDashboard() {
    const [state, setState] = useState();
    const [loading, setLoading] = useState(false);

    console.log(state);

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
        <Dashboard data={state}>
            <RestContainer
                one={<PieChart labels={labels} marks={marks} />}
                two={<LineChart labels={labels} marks={marks} />}
                three={<BarGraph labels={labels} marks={marks} />}
                four={<Radar labels={labels} marks={marks} />}
            />
        </Dashboard>
    );
}
