import React from "react";
import logo from "./tut.svg";
const Footer = () => {
  return (
    <footer className="bg-gray-800 flex flex-col w-full p-8">
      <div className="flex w-full justify-center">
        <div className="">
          <div className="p-8">
            <img className="w-40 h-40 " src={logo} alt="" />

            <span className="text-gray-300 w-4 font-bold text-lg pt-6">
              Effect place for all students
            </span>
          </div>
        </div>
        <div className="p-3 flex">
          <ul className="text-gray-300 p-4">
            <span className="mx-auto text-center flex justify-center items-center w-4 font-bold text-lg">
              Services
            </span>
            <li className="p-3 text-center hover:text-gray-500 hover:cursor-pointer font-medium text-base">
              Live coaching{" "}
            </li>
            <li className="p-3 text-center hover:text-gray-500 hover:cursor-pointer font-medium text-base">
              Recorded lectures{" "}
            </li>
            <li className="p-3 text-center hover:text-gray-500 hover:cursor-pointer font-medium text-base">
              Practice papers{" "}
            </li>
            <li className="p-3 text-center hover:text-gray-500 hover:cursor-pointer font-medium text-base">
              Scholarship tests{" "}
            </li>
          </ul>
          <ul className="text-gray-300 p-4">
            <span className="mx-auto text-center flex justify-center items-center w-4 font-bold text-lg">
              Services
            </span>
            <li className="p-3 text-center hover:text-gray-500 hover:cursor-pointer font-medium text-base">
              Live coaching{" "}
            </li>
            <li className="p-3 text-center hover:text-gray-500 hover:cursor-pointer font-medium text-base">
              Recorded lectures{" "}
            </li>
            <li className="p-3 text-center hover:text-gray-500 hover:cursor-pointer font-medium text-base">
              Practice papers{" "}
            </li>
            <li className="p-3 text-center hover:text-gray-500 hover:cursor-pointer font-medium text-base">
              Scholarship tests{" "}
            </li>
          </ul>
          <ul className="text-gray-300 p-4">
            <span className="mx-auto text-center flex justify-center items-center w-4 font-bold text-lg">
              Services
            </span>
            <li className="p-3 text-center hover:text-gray-500 hover:cursor-pointer font-medium text-base">
              Live coaching{" "}
            </li>
            <li className="p-3 text-center hover:text-gray-500 hover:cursor-pointer font-medium text-base">
              Recorded lectures{" "}
            </li>
            <li className="p-3 text-center hover:text-gray-500 hover:cursor-pointer font-medium text-base">
              Practice papers{" "}
            </li>
            <li className="p-3 text-center hover:text-gray-500 hover:cursor-pointer font-medium text-base">
              Scholarship tests{" "}
            </li>
          </ul>
        </div>
      </div>
      <hr className="text-gray-400 " />
      <div
        className="w-full flex justify-center
      items-center pt-4"
      >
        <span className="text-gray-400">
          © Classroom 2021 | Coded by Alroy and Sidddesh.{" "}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
