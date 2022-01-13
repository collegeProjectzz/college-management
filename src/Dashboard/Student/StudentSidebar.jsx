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
                className="flex flex-row items-center p-2 m-2 ml-5 hover:bg-blue-800 rounded-md cursor-pointer text-lg font-medium text-slate-300">
                <CgProfile className="mr-2" />
                Profile
            </NavLink>
            <div className="text-lg font-medium text-slate-300 flex items-center  p-2 m-2 ml-5 hover:bg-blue-800 rounded-md cursor-pointer">
                <Collapsible trigger={
                    <div className="flex flex-row">
                        <ImStatsBars className="mr-2 " />
                        Sem wise performance
                    </div>
                } >
                    {Array.from({ length: sem }, (value, key, i) => (
                        <div className="text-lg font-medium text-slate-300 flex items-center  p-2 m-2 ml-5 hover:bg-blue-900 rounded-md cursor-pointer">
                            <Collapsible trigger={`sem ${key + 1}`} className="flex flex-row">
                                <div className="flex flex-col p-2 ml-4">
                                    <Link className="p-2" to={`sem/${key + 1}/overall`}>Overall</Link>
                                    <Link className="p-2" to={`sem/${key + 1}/courses`}>Courses</Link>
                                </div>
                            </Collapsible>
                        </div>
                    ))}
                </Collapsible>
            </div>
        </div>
    );
}
