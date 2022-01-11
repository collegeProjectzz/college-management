import React from 'react';

export default function Profile() {
    const data = sessionStorage.getItem("student");
    const studentData = JSON.parse(data);

    return (
        <div className="flex flex-col p-2 w-full m-2 items-center justify-center md:flex-row">
            <div className="flex items-center justify-center flex-col h-full w-full md:w-1/2">
                <img
                    className="m-8 inline-block h-60 w-60 rounded-full ring-2 ring-white cursor-pointer drop-shadow-xl hover:drop-shadow-2xl"
                    src="https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGdvYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                />
                <span class="bg-clip-text text-2xl font-semibold text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">
                    {studentData.name}
                </span>
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">
                    {studentData.rollNo}
                </span>

            </div>
            <div className="flex items-center justify-center flex-col h-full w-full md:w-1/2">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">
                    Edit profile
                </span>
                <div className="flex flex-col w-full py-0 p-16">
                    <div className="m-6 flex flex-col ">
                        <label htmlFor="name" className="mr-2">
                            name:
                        </label>
                        <input
                            type="name"
                            name="name"
                            value={studentData.name}
                            required
                            className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="name"
                        />
                    </div>
                    <div className="m-6 flex flex-col ">
                        <label htmlFor="rollNo" className="mr-2">
                            roll number:
                        </label>
                        <input
                            type="number"
                            name="rollNo"
                            value={studentData.rollNo}
                            required
                            disabled
                            className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="roll number"
                        />
                    </div>
                    <div className="m-6 flex flex-col ">
                        <label htmlFor="email" className="mr-2">
                            email:
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={studentData.email}
                            required
                            className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="email"
                        />
                    </div>
                    <div className="m-6 flex flex-col ">
                        <label htmlFor="password" className="mr-2">
                            password:
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={studentData.password}
                            required
                            className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="password"
                        />
                    </div>
                    <div className="m-6 flex flex-col ">
                        <label htmlFor="phone" className="mr-2">
                            phone:
                        </label>
                        <input
                            type="phone"
                            name="phone"
                            value={studentData.phone}
                            required
                            className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Enter password"
                        />
                    </div>
                    <div className="m-6 flex flex-col ">
                        <label htmlFor="password" className="mr-2">
                            semester:
                        </label>
                        <input
                            type="text"
                            disabled
                            name="sem"
                            value={studentData.sem}
                            required
                            className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Enter password"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}
