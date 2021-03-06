import React, { useState, Fragment, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import useForm from '../hooks/useForm';
import { FaSignInAlt } from 'react-icons/fa';

import data1 from '../assets/41464-student-with-books.json';
import RightBanner from '../components/RightBanner';


const semesters = [
    { id: 1, sem: 1 },
    { id: 2, sem: 2 },
    { id: 3, sem: 3 },
    { id: 4, sem: 4 },
    { id: 5, sem: 5 },
    { id: 6, sem: 6 },
    { id: 7, sem: 7 },
    { id: 8, sem: 8 },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function SignUp() {
    const { who } = useParams();
    const isStudent = who === "student" ? true : false;
    const navigate = useNavigate();
    const [state, setState] = useState(false);

    const [depts, setDepts] = useState([]);
    const [selectedDept, setSelectedDept] = useState(depts[3]);
    const [selectSem, setSelectSem] = useState();

    const { formData, handleInputChange } = useForm({
        name: "",
        email: "",
        password: "",
        cId: "",
        phone: ""
    });

    const { name,
        email,
        password,
        phone,
    } = formData;

    const StudentData = {
        name,
        email,
        phone,
        password,
        dNo: selectedDept?.dNo,
        sem: selectSem?.sem
    };

    const FacultyData = {
        fName: name,
        fEmail: email,
        dNo: selectedDept?.dNo,
        fPassword: password,
    };

    const fetchDepartments = async () => {
        try {
            await fetch("http://localhost/college-backend/api/department/getAllDepartments.php")
                .then(res => res.json())
                .then(data => {
                    setDepts(data.data);
                });
        } catch (error) {
            console.log(error);
        }
    };

    const registerStudent = async () => {
        setState(true);
        await fetch(
            "http://localhost/college-backend/api/student/registerStudent.php",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(StudentData),
            }
        )
            .then((res) => {
                if (res.status === 200) {
                    setState(false);
                    navigate("/signin/student");
                }
            })
            .catch((err) => {
                console.log(err);
                setState(false);
            });
    };

    const registerFaculty = async () => {
        setState(true);
        await fetch(
            "http://localhost/college-backend/api/faculty/registerFaculty.php",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(FacultyData),
            }
        )
            .then((res) => {
                console.log(res);
                if (res.status === 200) {
                    console.log("satuse is 200");
                    setState(false);
                    navigate("/signin/teacher");
                }
            })
            .catch((err) => {
                console.log("error mz");
                console.log(err);
                setState(false);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        isStudent ?
            registerStudent()
            : registerFaculty();

    };

    useEffect(() => {
        fetchDepartments();
    }, []);


    return (
        <>
            <div className="flex flex-col flex-wrap justify-center items-center md:flex-row">
                <RightBanner data={data1} text={`You are one step away from signing up as a ${isStudent ? "Student" : "Faculty"}`} />
                <div className="my-8 flex flex-col w-full md:w-1/2 justify-center items-center sm:my-0 relative">
                    <div className="w-5/6 md:w-3/6">
                        <div>
                            <div class="m-1 font-black text-4xl sm:text-5xl lg:text-7xl md:text-6xl lg:m-3">
                                <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-300">
                                    Signup
                                    as a {isStudent ? "student" : "faculty"}
                                </span>
                            </div>
                            <input type="hidden" name="remember" defaultValue="true" />
                            <div className="m-6">
                                <label htmlFor="name" className="sr-only">
                                    name
                                </label>
                                <input
                                    name="name"
                                    value={name}
                                    type="name"
                                    required
                                    onChange={handleInputChange}
                                    className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="m-6">
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={handleInputChange}
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                            {isStudent && (
                                <div className="m-6">
                                    <label htmlFor="phone" className="sr-only">
                                        Phone number
                                    </label>
                                    <input
                                        name="phone"
                                        type="phone"
                                        value={phone}
                                        onChange={handleInputChange}
                                        required
                                        className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Phone number"
                                    />
                                </div>
                            )}
                            <div className="m-6">
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={handleInputChange}
                                    required
                                    className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Enter password"
                                />
                            </div>
                            <Listbox value={selectedDept} onChange={setSelectedDept}>
                                {({ open }) => (
                                    <>
                                        <div className="m-6 relative">
                                            <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                <span className="flex items-center">
                                                    {selectedDept ?
                                                        <span className="ml-3 block truncate">{selectedDept.dNo}-{selectedDept.dName}</span>
                                                        : "choose department"
                                                    }
                                                </span>
                                                <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                    <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                </span>
                                            </Listbox.Button>

                                            <Transition
                                                show={open}
                                                as={Fragment}
                                                leave="transition ease-in duration-100"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                            >
                                                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                                    {depts?.map((d) => (
                                                        <Listbox.Option
                                                            key={d.dNo}
                                                            className={({ active }) =>
                                                                classNames(
                                                                    active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                                                    'cursor-default select-none relative py-2 pl-3 pr-9'
                                                                )
                                                            }
                                                            value={d}
                                                        >
                                                            {({ selected, active }) => (
                                                                <>
                                                                    <div className="flex items-center">
                                                                        <span
                                                                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                                        >
                                                                            {d.dName}
                                                                        </span>
                                                                    </div>

                                                                    {selected ? (
                                                                        <span
                                                                            className={classNames(
                                                                                active ? 'text-white' : 'text-indigo-600',
                                                                                'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                            )}
                                                                        >
                                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                        </span>
                                                                    ) : null}
                                                                </>
                                                            )}
                                                        </Listbox.Option>
                                                    ))}
                                                </Listbox.Options>
                                            </Transition>
                                        </div>
                                    </>
                                )}
                            </Listbox>
                            {isStudent &&
                                <Listbox value={selectSem} onChange={setSelectSem}>
                                    {({ open }) => (
                                        <>
                                            <div className="m-6 relative">
                                                <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                    <span className="flex items-center">
                                                        {selectSem ?
                                                            <span className="ml-3 block truncate">{selectSem.id}-{selectSem.sem}</span>
                                                            : "select semester"
                                                        }
                                                    </span>
                                                    <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                        <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                    </span>
                                                </Listbox.Button>

                                                <Transition
                                                    show={open}
                                                    as={Fragment}
                                                    leave="transition ease-in duration-100"
                                                    leaveFrom="opacity-100"
                                                    leaveTo="opacity-0"
                                                >
                                                    <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                                        {semesters?.map((d) => (
                                                            <Listbox.Option
                                                                key={d.id}
                                                                className={({ active }) =>
                                                                    classNames(
                                                                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                                                        'cursor-default select-none relative py-2 pl-3 pr-9'
                                                                    )
                                                                }
                                                                value={d}
                                                            >
                                                                {({ selected, active }) => (
                                                                    <>
                                                                        <div className="flex items-center">
                                                                            <span
                                                                                className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                                            >
                                                                                {d.sem}
                                                                            </span>
                                                                        </div>

                                                                        {selected ? (
                                                                            <span
                                                                                className={classNames(
                                                                                    active ? 'text-white' : 'text-indigo-600',
                                                                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                                )}
                                                                            >
                                                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                            </span>
                                                                        ) : null}
                                                                    </>
                                                                )}
                                                            </Listbox.Option>
                                                        ))}
                                                    </Listbox.Options>
                                                </Transition>
                                            </div>
                                        </>
                                    )}
                                </Listbox>}
                            <div className="flex justify-center items-center">
                                <button
                                    onClick={handleSubmit}
                                    className="flex justify-center items-center m-5 rounded-full p-3 bg-gradient-to-r from-blue-600 to-sky-300 hover:from-blue-600 hover:to-sky-200"
                                >

                                    {!state ? (
                                        <span className="flex items-center justify-center text-white">
                                            Sign up <FaSignInAlt className="ml-2" />
                                        </span>
                                    ) : (
                                        <svg
                                            class="w-6 h-6 mx-auto animate-spin"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};;