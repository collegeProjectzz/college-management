import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../Navbar";
import { useParams, useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";

const Signin = () => {
  const navigate = useNavigate();
  const { who, id } = useParams();
  const isStudent = who === "student" ? true : false;

  console.log(isStudent);

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
      .then((data) => console.log(data))
      .catch((err) => {
        console.log("error mz");
        console.log(err);
      });
  };

  const signinFaculty = async () => {
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
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("error mz");
        console.log(err);
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
                Sign in
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
