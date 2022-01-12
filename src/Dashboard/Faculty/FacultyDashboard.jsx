import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Dashboard from '../common/Dashboard';
import Course from './courses/Course';
import Profile from './Profile/Profile';

export default function FacultyDashboard() {
    return (
        <Dashboard>
            <Routes>
                <Route path="/" element={<Profile />} />
                <Route path="course/:cId/" element={<Course />} />
            </Routes>
        </Dashboard>
    );
}
