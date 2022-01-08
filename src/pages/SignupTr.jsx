import useForm from "../hooks/useForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupTr() {
  const navigate = useNavigate();
  const [state, setState] = useState(false);
  const { formData, handleInputChange } = useForm({
    name: "",
    email: "",
    depart_no: "",
    password: "",
    courseId: "",
  });

  const { name, email, depart_no, password, courseId } = formData;

  const registerFaculty = async () => {
    setState(true);
    await fetch(
      "http://localhost/college-backend/api/faculty/registerFaculty.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fName: name,
          fEmail: email,
          dNo: depart_no,
          fPassword: password,
          cId: courseId,
        }),
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    registerFaculty();
  };
  return (
    <>
      <div
        style={{
          backgroundImage: `url("/signin.png")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "1000px 700px",
        }}
        className="min-h-full  h-[100vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
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
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  value={name}
                  name="name"
                  type="text"
                  autoComplete="text"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  email
                </label>
                <input
                  id="email"
                  name="email"
                  value={email}
                  type="text"
                  autoComplete="email"
                  required
                  className="appearance-none rounded relative block w-full mt-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mt-2 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onChange={handleInputChange}
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
                    userData.teacher_id = e.target.value;
                    setUserData(userData);
                  }}
                  className="appearance-none rounded relative block w-full px-3 py-2 border mt-2 border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Teacher Id"
                />
              </div> */}
              <div>
                <label htmlFor="depart_no" className="sr-only">
                  Department number
                </label>
                <input
                  id="depart_no"
                  name="depart_no"
                  value={depart_no}
                  type="number"
                  autoComplete="number"
                  required
                  onChange={handleInputChange}
                  className="appearance-none rounded relative block w-full px-3 py-2 border mt-2 border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Department number"
                />
              </div>
              <div>
                <label htmlFor="depart_no" className="sr-only">
                  Course Id
                </label>
                <input
                  id="courseId"
                  name="courseId"
                  value={courseId}
                  type="number"
                  autoComplete="number"
                  required
                  onChange={handleInputChange}
                  className="appearance-none rounded relative block w-full px-3 py-2 border mt-2 border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="course id"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  value={password}
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={handleInputChange}
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
                  Already registered? Login
                </a>
              </div>
            </div> */}

            <div>
              <button
                type="submit"
                onSubmit={handleSubmit}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {!state ? (
                  "Sign up"
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
    </>
  );
}
