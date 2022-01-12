import React from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import useForm from '../../../hooks/useForm';

export default function Profile() {
    const data = sessionStorage.getItem("faculty");
    const facultyData = data && JSON.parse(data);

    const {
        fId,
        fName,
        fEmail,
        fPassword,
        dNo
    } = facultyData;

    const { formData, handleInputChange } = useForm({
        facId: fId,
        facName: fName,
        facEmail: fEmail,
        facPassword: fPassword,
        facDno: dNo
    });

    const {
        facId,
        facName,
        facEmail,
        facPassword,
        facDno
    } = formData;

    const handleSubmit = () => {
        fetch('http://localhost/college-backend/api/faculty/editFaculty.php', {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fId: facId,
                fName: facName,
                fEmail: facEmail,
                fPassword: facPassword,
                dNo: facDno
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
                    {facName}
                </span>
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">
                    {facId}
                </span>

            </div>
            <div className="flex items-center justify-center flex-col h-full w-full md:w-1/2">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">
                    Edit profile
                </span>
                <div className="flex flex-col w-full py-0 p-16">
                    <div className="m-6 flex flex-col ">
                        <label htmlFor="facName" className="mr-2">
                            name:
                        </label>
                        <input
                            type="name"
                            name="facName"
                            value={facName}
                            onChange={handleInputChange}
                            required
                            className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="name"
                        />
                    </div>
                    <div className="m-6 flex flex-col ">
                        <label htmlFor="fId" className="mr-2">
                            faculty Id:
                        </label>
                        <input
                            type="number"
                            name="facId"
                            value={facId}
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
                            name="facEmail"
                            value={facEmail}
                            onChange={handleInputChange}

                            required
                            className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="email"
                        />
                    </div>
                    <div className="m-6 flex flex-col ">
                        <label htmlFor="facPassword" className="mr-2">
                            password:
                        </label>
                        <input
                            type="password"
                            name="facPassword"
                            value={facPassword}
                            onChange={handleInputChange}
                            required
                            className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="password"
                        />
                    </div>
                    <div className="m-6 flex flex-col ">
                        <label htmlFor="facDno" className="mr-2">
                            department no:
                        </label>
                        <input
                            type="text"
                            disabled
                            name="facDno"
                            value={facDno}
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


// {!state ? (
//     <span className="flex items-center justify-center text-white">
//         Update <FaSignInAlt className="ml-2" />
//     </span>
// ) : (
//     <svg
//         class="w-6 h-6 mx-auto animate-spin"
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//     >
//         <path
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             stroke-width="2"
//             d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
//         />
//     </svg>
// )}