import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../Navbar";

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
                Sign in as student
              </button>
              <button className="bg-white p-2 w-fit  ml-5 rounded-lg text-lg">
                Sign in as Teacher
              </button>
            </div>
            <span className="text-white text-base mt-5">
              New to Classroom? Register
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Landing;
