import React from 'react';
import useForm from '../../../hooks/useForm';
import { FaSignInAlt } from 'react-icons/fa';

export default function Profile() {
    const data = sessionStorage.getItem("student");
    const studentData = data && JSON.parse(data);

    const {
        dNo,
        email,
        name,
        password,
        phone,
        rollNo,
        sem
    } = studentData;

    const { formData, handleInputChange } = useForm({
        Studentemail: email,
        Studentname: name,
        Studentpassword: password,
        Studentphone: phone,
        Studentsem: sem
    });

    const {
        Studentemail,
        Studentname,
        Studentpassword,
        Studentphone,
        Studentsem
    } = formData;


    const handleSubmit = () => {
        fetch('http://localhost/college-backend/api/student/editStudent.php', {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: Studentname,
                email: Studentemail,
                phone: Studentphone,
                password: Studentpassword,
                dNo,
                rollNo
            })
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    };

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
                            type="text"
                            name="Studentname"
                            value={Studentname}
                            onChange={handleInputChange}
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
                            name="Studentemail"
                            onChange={handleInputChange}
                            value={Studentemail}
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
                            name="Studentpassword"
                            value={Studentpassword}
                            onChange={handleInputChange}
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
                            name="Studentphone"
                            value={Studentphone}
                            onChange={handleInputChange}
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
                            name="Studentsem"
                            disabled
                            value={Studentsem}
                            required
                            className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Enter password"
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <button
                            onClick={handleSubmit}
                            className="flex justify-center items-center m-5 rounded-full p-3 bg-gradient-to-r from-blue-600 to-sky-300 hover:from-blue-600 hover:to-sky-200"
                        >
                            <span className="flex items-center justify-center text-white">
                                Update <FaSignInAlt className="ml-2" />
                            </span>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
