import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Collapsible from 'react-collapsible';
import { CgProfile } from 'react-icons/cg';
import { ImStatsDots, ImStatsBars } from 'react-icons/im';

export default function StudentSidebar() {
    const data = sessionStorage.getItem("student");
    const studentData = data && JSON.parse(data);
    const sem = studentData?.sem;
    return (
        <div className="flex flex-col h-full">
            <NavLink to=""
                className="flex flex-row items-center hover:bg-blue-800 rounded-md cursor-pointer text-base font-medium text-slate-300 lg:text-lg sm:p-3 sm:m-1 sm:ml-1">
                <CgProfile className="mr-1 sm:mr-2" />
                Profile
            </NavLink>
            <div className="text-base font-medium text-slate-300 flex items-center hover:bg-blue-800 rounded-md cursor-pointer  lg:text-lg  sm:p-3 sm:m-1 sm:ml-1 ">
                <Collapsible trigger={
                    <div className="flex flex-row">
                        <ImStatsBars className="mr-1 sm:mr-2" />
                        Sem wise performance
                    </div>
                } >
                    {Array.from({ length: sem }, (value, key, i) => (
                        <div className="text-sm font-medium text-slate-300 flex items-center  p-0 m-0 hover:bg-blue-900 rounded-md cursor-pointer sm:p-1 sm:m-1 sm:text-base sm:ml-6 md:p-2">
                            <Collapsible trigger={`sem ${key + 1}`} className="w-full">
                                <div className="flex flex-col sm:ml-2 sm:p-1 ">
                                    <Link className="sm:p-0 md:p-1" to={`sem/${key + 1}/overall`}>Overall</Link>
                                    <Link className="sm:p-0 md:p-1" to={`sem/${key + 1}/courses`}>Courses</Link>
                                </div>
                            </Collapsible>
                        </div>
                    ))}
                </Collapsible>
            </div>
        </div>
    );
}
