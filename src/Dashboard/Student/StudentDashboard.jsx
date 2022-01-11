import React from 'react';
import Dashboard from '../Dashboard';
import { Route, Routes } from 'react-router-dom';
import Profile from '../Profile';
import Sem from './Sem/Sem';
import Overall from '../Student/Overall/Overall';

export default function StudentDashboard() {
    return (
        <Dashboard >
            <Routes>
                <Route path="/" element={<Profile />} />
                <Route path="overall" element={<Overall />} />
                <Route path="Sem/:semNo" element={<Sem />} />
            </Routes>
        </Dashboard>
    );
}
