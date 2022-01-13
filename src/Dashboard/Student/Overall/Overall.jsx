import React, { useState, useEffect } from 'react';
import FourCards from '../../common/FourCards';
import BarGraph from '../Overall/BarGraph';
import LineChart from '../Overall/LineChart';
import PieChart from '../Overall/PieChart';
import Radar from '../Overall/Radar';
import { useParams } from 'react-router-dom';

export default function Overall() {
    const [state, setState] = useState([]);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const { sem } = useParams();

    const data = sessionStorage.getItem("student");
    const userData = JSON.parse(data);

    useEffect(() => {
        const fetchStudentData = () => {
            setLoading(true);
            fetch(
                "http://localhost/college-backend/api/exam/getStudentMarks.php?rollNo=" +
                userData.rollNo + "&sem=" + sem
            )
                .then((res) => res.json())
                .then((data) => {
                    if (data.status === 404) {
                        setMessage(data.message);
                        setLoading(false);
                    } else if (data.data) {
                        console.log("not 404");
                        setState(data.data);
                        console.log(state);
                        setLoading(false);
                    }
                })
                .catch((e) => setLoading(false));
        };
        fetchStudentData();
    }, [sem]);

    const labels = !loading && state?.map(m => m.cName);
    const marks = !loading && state?.map(m => m.total);

    return (
        <FourCards
            one={<PieChart labels={labels} marks={marks} />}
            two={<LineChart labels={labels} marks={marks} />}
            three={<BarGraph labels={labels} marks={marks} />}
            four={<Radar labels={labels} marks={marks} />}
        />
    );
}
