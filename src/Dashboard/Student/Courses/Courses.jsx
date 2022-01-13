import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

import PolarGraph from './PolarGraph';
import PieChartGraph from './PieChartGraph';
import LineChartGraph from './LineChartGraph';
import BarChartGraph from './BarChartGraph';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Courses() {
    const [state, setState] = useState([]);
    const [loading, setLoading] = useState(false);
    const [courses, setCourses] = useState([]);
    const [selectCourse, setSelectCourse] = useState();
    const { sem } = useParams();

    const data = sessionStorage.getItem("student");
    const userData = JSON.parse(data);

    useEffect(() => {
        const fetchStudentData = () => {
            fetch(
                "http://localhost/college-backend/api/exam/getStudentMarks.php?rollNo=" +
                userData.rollNo + "&sem=" + sem
            )
                .then((res) => res.json())
                .then((data) => {
                    setState(data.data);
                })
                .catch((e) => setLoading(false));
        };
        fetchStudentData();
    }, [sem]);

    useEffect(() => {
        const fetchCoursesAccordingToSemAndDeptNo = () => {
            fetch(`http://localhost/college-backend/api/course/getSemDeptCourses.php?dNo=${userData.dNo}&sem=${sem}`)
                .then(res => res.json())
                .then(data => setCourses(data.data))
                .catch(err => console.log(err));
        };
        fetchCoursesAccordingToSemAndDeptNo();
    }, [sem, userData.dNo]);


    const selectedCourseAndMarksDetails = state.filter(s => {
        if (s.cId === selectCourse) {
            return s;
        }
    });

    console.log(selectedCourseAndMarksDetails);

    let courseName = selectCourse && selectedCourseAndMarksDetails[0]["cName"];
    let it1 = selectCourse && selectedCourseAndMarksDetails[0]["it1"];
    let it2 = selectCourse && selectedCourseAndMarksDetails[0]["it2"];
    let it3 = selectCourse && selectedCourseAndMarksDetails[0]["it3"];

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: `${courseName && courseName} IT marks`,
            },
        },
    };

    const graphsData = {
        courseName, it1, it2, it3, options
    };



    return (
        <div className="flex h-auto flex-col flex-wrap w-full md:flex-row ">
            <div className="flex w-4/12 flex-col items-center justify-center">
                <div className="flex h-full flex-col my-2 p-6 w-11/12 items-center justify-center bg-white rounded-lg cursor-pointer drop-shadow-xl hover:drop-shadow-2xl">
                    <Menu as="div" className="relative inline-block text-left">
                        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                            Select course
                            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                        </Menu.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    {courses?.map(c => (
                                        <Menu.Item onClick={() => setSelectCourse(c.cId)}>
                                            {({ active }) => (
                                                <a
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    {c.cName}
                                                </a>
                                            )}
                                        </Menu.Item>
                                    ))}
                                </div>
                            </Menu.Items>
                        </Transition>
                        {
                            selectCourse && (
                                <div className="flex flex-col my-6 m-2 text-center">
                                    <p className="p-2 text-black">roll No:{selectedCourseAndMarksDetails && selectedCourseAndMarksDetails[0].rollNo}</p>
                                    <p className="p-2 text-black">name :{selectedCourseAndMarksDetails && selectedCourseAndMarksDetails[0].name}</p>
                                    <p className="p-2 text-black">it1 :{selectedCourseAndMarksDetails && selectedCourseAndMarksDetails[0].it1}</p>
                                    <p className="p-2 text-black">it2 :{selectedCourseAndMarksDetails && selectedCourseAndMarksDetails[0].it2}</p>
                                    <p className="p-2 text-black">it3 :{selectedCourseAndMarksDetails && selectedCourseAndMarksDetails[0].it3}</p>
                                </div>
                            )
                        }
                    </Menu>
                </div>
            </div>
            <div className="flex w-8/12 flex-col items-center justify-center">
                <div className="flex flex-col my-2 p-4 m-3 w-11/12 items-center justify-center bg-white rounded-lg cursor-pointer drop-shadow-xl hover:drop-shadow-2xl">
                    <BarChartGraph {...graphsData} />
                </div>
            </div>

            <div className="flex w-4/12 flex-col items-center justify-center">
                <div className="flex flex-col my-2 w-11/12 items-center justify-center bg-white rounded-lg cursor-pointer drop-shadow-xl hover:drop-shadow-2xl">
                    <LineChartGraph  {...graphsData} />
                </div>
            </div>
            <div className="flex w-4/12 flex-col items-center justify-center">
                <div className="flex flex-col my-2 w-11/12 items-center justify-center bg-white rounded-lg cursor-pointer drop-shadow-xl hover:drop-shadow-2xl">
                    <PieChartGraph {...graphsData} />
                </div>
            </div>
            <div className="flex w-4/12 flex-col items-center justify-center">
                <div className="flex flex-col w-11/12 items-center justify-center bg-white rounded-lg cursor-pointer drop-shadow-xl hover:drop-shadow-2xl">
                    <PolarGraph {...graphsData} />
                </div>
            </div>
        </div>
    );
}
