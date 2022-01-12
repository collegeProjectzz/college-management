import React, { useState, useEffect, Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import EditMarks from '../EditMarks';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Course() {
    const { cId } = useParams();
    const [openModal, setOpenModal] = useState(false);
    const [students, setStudents] = useState([]);
    const [query, setQuery] = useState("");
    const fetchStudentsInCoursesByCId = (cId) => {
        fetch(`http://localhost/college-backend/api/exam/getStudentsInCourse.php?cId=${cId}`)
            .then(res => res.json())
            .then(data => setStudents(data.data))
            .catch(err => console.log(err));
    };

    useEffect(() => {
        fetchStudentsInCoursesByCId(cId);
    }, [cId]);
    return (
        <div className="flex flex-col w-full p-2 m-2 overflow-hidden">
            {/* <div className="flex flex-col p-2 m-2 w-full md:flex-row">
                <div className="flex flex-col w-4/12">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                        Search
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="text-gray-500 sm:text-sm"></span>
                        </div>
                        <input
                            type="text"
                            name="query"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            id="query"
                            placeholder="search student"
                            className="p-2 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center">
                            <label htmlFor="sort" className="sr-only">
                                sort
                            </label>
                            <select
                                id="sort"
                                name="sort"
                                className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                            >
                                <option>low to high</option>
                                <option>high to low</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="flex flex-col w-full p-2 overflow-scroll">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200 overflow-scroll">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            roll No
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            email
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            it 1
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            it 2
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            it 3
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            total
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            average
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            edit
                                        </th>

                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {students.map((s) => (
                                        <tr key={s.email}>
                                            {openModal && < EditMarks data={s} openModal={openModal} setOpenModal={setOpenModal} />}
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    {/* <div className="flex-shrink-0 h-10 w-10">
                                                    <img className="h-10 w-10 rounded-full" src={s.image} alt="" />
                                                </div> */}
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{s.name}</div>
                                                        <div className="text-sm text-gray-500">{s.phone}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{s.rollNo}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{s.email}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{s.it1}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{s.it2}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{s.it3}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{s.total}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{s.avg}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <button onClick={() => setOpenModal(true)}
                                                    className="flex-col pr-2 pl-2 p-1 bg-blue-500 rounded-2xl text-sm text-white"
                                                >
                                                    edit
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
