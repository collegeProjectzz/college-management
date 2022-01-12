import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Collapsible from 'react-collapsible';
import { CgProfile } from 'react-icons/cg';
import { ImStatsDots, ImStatsBars } from 'react-icons/im';
import { useEffect, useState } from 'react';

export default function FacultySidebar() {
    const data = sessionStorage.getItem("faculty");
    const [courses, setCourses] = useState([]);
    const facultyData = data && JSON.parse(data);
    const fId = facultyData?.fId;

    const fetchCoursesTaughtByFaculties = () => {
        fetch(`http://localhost/college-backend/api/course/getCoursesByFaculty.php?fId=${fId}`)
            .then(res => res.json())
            .then(data => setCourses(data.data))
            .catch(res => console.log(res));
    };
    useEffect(() => {
        fetchCoursesTaughtByFaculties();
    }, []);


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
                        Courses
                    </div>
                } >
                    {
                        courses.map(c => (
                            <NavLink to={`course/${c.cId}`}
                                className="flex items-center  p-2 m-2 ml-8 hover:bg-blue-900 rounded-md cursor-pointer"
                            >
                                {c.cName}
                            </NavLink>
                        ))
                    }
                </Collapsible>
            </div>
        </div>
    );
}
