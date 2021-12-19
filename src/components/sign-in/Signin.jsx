import React, { useState } from "react";
import Footer from "../footer/Footer";
import Navbar from "../Navbar";
import { useParams, useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import useSessionStorage from "../../hooks/useSessionStorage";

const Signin = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(false);
  const [error, setError] = useState("");
  const { who } = useParams();
  const isStudent = who === "student" ? true : false;
  const value = isStudent ? "student" : "faculty";
  const revValue = !isStudent ? "student" : "faculty";
  const [storeLoginData, setStoreLoginData] = useSessionStorage(
    value,
    "",
    revValue
  );

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
          setStoreLoginData(data);
          navigate("/dashboard/student");
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
          setStoreLoginData(data);
          navigate("/dashboard/teacher");
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
      <Navbar />
      <div
        style={{
          backgroundImage: `url("./work.png")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="min-h-full flex w-full h-[80vh] items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              {error && (
                <div
                  class=" flex justify-center p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800"
                  role="alert"
                >
                  {error}
                </div>
              )}
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  value={email}
                  type="email"
                  onChange={handleInputChange}
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
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
                  onChange={handleInputChange}
                  value={password}
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onSubmit={handleSubmit}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {!state ? (
                  "Sign in"
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
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signin;
