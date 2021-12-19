import React, { useState } from "react";
import Footer from "../footer/Footer";
import Navbar from "../Navbar";

function Signup() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    roll_no: "",
    phone_number: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
  };
  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundImage: `url("/stud.png")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "1000px 700px",
        }}
        className="min-h-full  h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign up to Classroom
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Name
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="text"
                  autoComplete="email"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                  onChange={(e) => {
                    userData.name = e.target.value;
                    setUserData(userData);
                  }}
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  email
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="text"
                  autoComplete="email"
                  required
                  className="appearance-none rounded relative block w-full mt-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mt-2 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onChange={(e) => {
                    userData.email = e.target.value;
                    setUserData(userData);
                  }}
                />
              </div>
              {/* <div>
                <label htmlFor="email-address" className="sr-only">
                  Roll no.
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="text"
                  autoComplete="text"
                  required
                  onChange={(e) => {
                    userData.roll_no = e.target.value;
                    setUserData(userData);
                  }}
                  className="appearance-none rounded relative block w-full px-3 py-2 border mt-2 border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Roll Number"
                />
              </div> */}
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Phone number
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="text"
                  autoComplete="email"
                  required
                  onChange={(e) => {
                    userData.phone_number = e.target.value;
                    setUserData(userData);
                  }}
                  className="appearance-none rounded relative block w-full px-3 py-2 border mt-2 border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Phone number"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={(e) => {
                    userData.password = e.target.value;
                    setUserData(userData);
                  }}
                  className="appearance-none rounded relative block w-full px-3  mt-2 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            {/* <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div> */}

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  {/* <IoLockClosed
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  /> */}
                </span>
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
