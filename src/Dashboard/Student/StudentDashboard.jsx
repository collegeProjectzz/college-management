import React from 'react';
import Dashboard from '../common/Dashboard';
import { Route, Routes } from 'react-router-dom';

import Profile from './Profile/Profile';
import Overall from '../Student/Overall/Overall';
import Courses from './Courses/Courses';

export default function StudentDashboard() {
    return (
        <Dashboard >
            <Routes>
                <Route path="/" element={<Profile />} />
                <Route path="sem/:sem/overall" element={<Overall />} />
                <Route path="sem/:sem/courses" element={<Courses />} />
            </Routes>
        </Dashboard>
    );
}
