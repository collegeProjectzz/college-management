import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <Navbar />
      <div
        className="h-[100vh] flex justify-center items-center "
        style={{
          backgroundImage: `url("/bg.png")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div>
          <h1 className="text-4xl font-semibold text-center text-white w-100">
            Welcome to Classroom
          </h1>
          <div className="flex flex-col  justify-center items-center mt-4">
            <div className="flex">
              <button className="bg-gray-800 p-2  text-white  text-lg w-fit rounded-lg">
                <Link to="/signup/student">Sign up as Student</Link>
              </button>
              <button className="bg-white p-2 w-fit  ml-5 rounded-lg text-lg">
                <Link to="/signup/teacher">Sign up as Faculty</Link>
              </button>
            </div>
            <span className="text-white text-base mt-5">
              Already registered?{" "}
            </span>
            <div class="justify-center">
              <span className="text-white text-base mt-2 p-2">
                <Link to="/signin/student">Sign in as Student</Link>
              </span>
              <span className="text-white text-base mt-2 p-2">
                <Link to="/signin/faculty">Sign in as Faculty</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Landing;
