import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import useForm from "../hooks/useForm";
import { UserContext } from "../context/userContext";

import data1 from '../assets/41464-student-with-books.json';
import data2 from '../assets/73170-teacher-all-language.json';
import RightBanner from '../components/RightBanner';
import { AiOutlineArrowRight } from 'react-icons/ai';


const Signin = () => {
  const { login } = useContext(UserContext);
  const [state, setState] = useState(false);
  const [error, setError] = useState("");
  const { who } = useParams();
  const isStudent = who === "student" ? true : false;
  const value = isStudent ? "student" : "faculty";

  const { formData, handleInputChange } = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const StudentBody = {
    email,
    password,
  };

  const FacultyBody = {
    fEmail: email,
    fPassword: password,
  };

  const signinStudent = async () => {
    setState(true);
    await fetch(
      "http://localhost/college-backend/api/student/loginStudent.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(StudentBody),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setState(false);
        const { message } = data;
        if (message) {
          setError(message);
        } else {
          login(data, value);
        }
      })
      .catch((err) => {
        setState(false);
      });
  };

  const signinFaculty = async () => {
    setState(true);
    await fetch(
      "http://localhost/college-backend/api/faculty/loginFaculty.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(FacultyBody),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setState(false);
        const { message } = data;

        if (message) {
          setError(message);
        } else {
          login(data, value);
        }
      })
      .catch((err) => {
        setState(false);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    isStudent ? signinStudent() : signinFaculty();
  };

  return (
    <>
      <div className="flex flex-col flex-wrap justify-center items-center md:flex-row">
        <RightBanner data={isStudent ? data1 : data2} text={`You are one step away from signing up as a ${isStudent ? "Student" : "Faculty"}`} />
        <div className="flex flex-col w-full md:w-1/2 justify-center items-center">
          <div className="w-1/2">
            <div>
              <div class="m-1 font-black text-4xl sm:text-5xl lg:text-7xl md:text-6xl lg:m-3">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-300">
                  Signin
                  as a {isStudent ? "student" : "faculty"}
                </span>
              </div>
              <input type="hidden" name="remember" defaultValue="true" />
              {error && (
                <div
                  class=" flex justify-center p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800"
                  role="alert"
                >
                  {error}
                </div>
              )}
              <div className="m-6">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  autoComplete="email"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div className="m-6">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Enter password"
                />
              </div>
              <button
                type="submit"
                onSubmit={handleSubmit}
                className="flex justify-center items-center m-5 rounded-2xl p-2 bg-gradient-to-r from-blue-600 to-sky-300 hover:from-blue-600 hover:to-sky-200"
              >
                <span className="w-full flex items-center justify-center text-white">
                  Signin <AiOutlineArrowRight className="ml-2" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
