import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { UserContext } from '../context/userContext';

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}



export default function Nav() {
    const { userData, logout } = useContext(UserContext);
    const data = sessionStorage.getItem("user");
    return (
        <div className="flex flex-row items-center w-full justify-center h-16 p-2 ">
            <div className="h-full flex items-center justify-center w-1/6">
                <Link to="/">
                    <div class="m-1 font-black text-1xl lg:text-3xl md:text-2xl lg:m-3">
                        <span class="font-[Lobster] bg-clip-text text-transparent bg-gradient-to-r from-indigo-900 to-indigo-400">
                            Classroom
                        </span>
                    </div>
                </Link>
            </div>
            <div className="h-full flex items-center justify-end w-5/6">
                {data === null &&
                    <>

                        <Menu as="div" className="ml-3 relative">
                            <div>
                                <Menu.Button className="flex text-sm rounded-full ring-offset-2 ring-2 hover:bg-blue-400">
                                    <span
                                        className="text-gray-600 p-1 ml-1 mr-1 hover:text-white"
                                    >
                                        Sign-In
                                    </span>
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link
                                                to="/signin/student"
                                                className={classNames(
                                                    active ? "bg-gray-100" : "",
                                                    "block px-4 py-2 text-sm text-gray-700"
                                                )}
                                            >
                                                As Student
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link
                                                to="/signin/faculty"
                                                className={classNames(
                                                    active ? "bg-gray-100" : "",
                                                    "block px-4 py-2 text-sm text-gray-700"
                                                )}
                                            >
                                                As Faculty
                                            </Link>
                                        )}
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        <Menu as="div" className="ml-3 relative">
                            <div>
                                <Menu.Button className="flex text-sm rounded-full ring-offset-2 ring-2 hover:bg-blue-400">
                                    <span
                                        className="text-gray-600 p-1 ml-1 mr-1 hover:text-white"
                                    >
                                        Sign-Up
                                    </span>
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link
                                                to="/signup/student"
                                                className={classNames(
                                                    active ? "bg-gray-100" : "",
                                                    "block px-4 py-2 text-sm text-gray-700"
                                                )}
                                            >
                                                As Student
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link
                                                to="/signup/faculty"
                                                className={classNames(
                                                    active ? "bg-gray-100" : "",
                                                    "block px-4 py-2 text-sm text-gray-700"
                                                )}
                                            >
                                                As Faculty
                                            </Link>
                                        )}
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </>
                }
                {data && <Menu as="div" className="ml-3 relative">
                    <div
                        onClick={(e) => {
                            logout();
                        }}
                    >
                        <Menu.Button className="bg-blue-500 flex text-sm rounded-full focus:outline-none">
                            <span
                                className="text-gray-300 hover:bg-gray-700 hover:text-white
                          px-3 py-2 rounded-md text-sm font-medium"
                            >
                                log out
                            </span>
                        </Menu.Button>
                    </div>
                </Menu>}
            </div>
        </div>
    );
}
