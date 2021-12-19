import React, { useState } from "react";
import Dropdown from "../Dropdown";
import Footer from "../footer/Footer";
import Modalpop from "../Modalpop";
import Navbar from "../Navbar";

const Teacherdash = () => {
  const [isOpen, setIsOpen] = useState(false);
  // console.log(isOpen);
  return (
    <>
      <Navbar />
      <div
        className="h-screen flex flex-col justify-center  items-center"
        style={{
          backgroundImage: `url("/exam.png")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mb-20">
          <h1 className="text-gray-800 text-center text-3xl font-semibold">
            Welcome Teacher
          </h1>
        </div>
        <div className="w-full flex justify-center items-center">
          <div>
            <input
              type="text"
              className="mb-5 p-2  rounded-lg w-68 drop-shadow-xl mr-2 focus:outline-none"
              placeholder="Search for Students"
            />
            <Dropdown />
          </div>
        </div>
        <div className="flex  w-4/5 justify-center flex-wrap bg-white">
          <table className="border-2 w-full">
            <tr className="border-2">
              <th className="border-2 p-2">Name</th>
              <th className="border-2 p-2">Roll_number</th>
              <th className="border-2 p-2">Email</th>
              <th className="border-2 p-2">IT1</th>
              <th className="border-2 p-2">IT2</th>
            </tr>
            <tr
              className="hover:cursor-pointer"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {isOpen && <Modalpop setmode={setIsOpen} />}
              <td className="border-2 p-2">Alroy fernandes</td>
              <td className="border-2 p-2">191106005</td>
              <td className="border-2 p-2">Alroy@yahoo.in</td>
              <th className="border-2 p-2">19</th>
              <th className="border-2 p-2">10</th>
            </tr>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Teacherdash;
