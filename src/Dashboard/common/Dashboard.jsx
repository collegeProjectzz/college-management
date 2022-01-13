import React, { Fragment, useContext } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Link, useLocation } from "react-router-dom";
import StudentSidebar from '../Student/StudentSidebar';
import FacultySidebar from '../Faculty/FacultySidebar';
import { FiLogIn } from 'react-icons/fi';
import { UserContext } from '../../context/userContext';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Dashboard({ children, data }) {
    const { logout } = useContext(UserContext);
    let { pathname } = useLocation();
    let isStudent = pathname.startsWith("/dashboard/student");
    return (
        <div className="h-full flex flex-col w-full  md:flex-row">
            <div className="flex h-full fixed top-0 left-0 flex-col w-2/12 bg-blue-700 ">
                <div className="flex h-20 flex-col p-2 text-center">
                    <div class="m-1 font-black text-1xl sm:text-2xl lg:text-3xl md:text-4xl lg:m-3">
                        <Link to="/">
                            <span class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">
                                Classroom
                            </span>
                        </Link>
                    </div>
                </div>
                {isStudent ? <StudentSidebar data={data} /> : <FacultySidebar data={data} />}
                <div className="flex flex-row text-white font-400  h-16  p-2 text-center bottom-0 items-center justify-center cursor-pointer">
                    logout <FiLogIn className="ml-2" />
                </div>
            </div>
            <div className="flex h-full fixed right-0 top-0 drop-shadow-xl flex-col w-10/12 bg-blue-50 overflow-scroll">
                <div className="p-4 flex flex-row w-full mb-3 items-center justify-between md:justify-end">
                    <div className="flex p-2 md:hidden">
                        <div class="m-1 font-black text-1xl sm:text-2xl lg:text-3xl md:text-4xl lg:m-3">
                            <Link to="/">
                                <span class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">
                                    Classroom
                                </span>
                            </Link>
                        </div>
                    </div>
                    <Menu as="div" className="relative inline-block text-left mr-3">
                        <Menu.Button >
                            <img
                                className="inline-block h-10 w-10 rounded-full ring-2 ring-white cursor-pointer drop-shadow-xl hover:drop-shadow-2xl"
                                src="https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGdvYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                alt=""
                            />
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
                            <Menu.Items className="z-10 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Profile
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Overall performance
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                sem wise performance
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <form method="POST" action="#">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    onClick={() => logout()}
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block w-full text-left px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    log out
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </form>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
                <div className="flex flex-row w-full">
                    {children}
                </div>
            </div>
        </div>
    );
}
