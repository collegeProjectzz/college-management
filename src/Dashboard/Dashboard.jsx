import React from 'react';
import { useLocation } from "react-router-dom";
import StudentSidebar from './Student/StudentSidebar';
import FacultySidebar from './Faculty/FacultySidebar';

export default function Dashboard({ children, data }) {
    let { pathname } = useLocation();
    let isStudent = pathname.startsWith("/dashboard/student");
    return (
        <div className="h-full flex flex-col w-full md:flex-row">
            <div className="flex flex-col w-2/12 bg-blue-700">
                {isStudent ? <StudentSidebar data={data} /> : <FacultySidebar data={data} />}
            </div>
            <div className="flex flex-col w-10/12 bg-blue-50 ">
                <div className="flex flex-row w-full h-16 items-center ">
                    Siddhesh
                </div>
                <div className="flex flex-row w-full">
                    {children}
                </div>
            </div>
        </div>
    );
}
