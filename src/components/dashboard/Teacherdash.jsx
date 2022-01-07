import React, { useState, useEffect } from "react";
import Dropdown from "../Dropdown";
import Modalpop from "../Modalpop";

const Teacherdash = () => {
  const [state, setState] = useState();
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // console.log(isOpen);

  const fetchdata = async () => {
    setLoading(true);
    await fetch(
      "http://localhost/college-backend/api/exam/getAllStudentMarks.php"
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setState(data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
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
        {!loading && (
          <div className="flex  w-4/5 justify-center flex-wrap bg-white">
            <table className="border-2 w-full">
              <tr className="border-2">
                <th className="border-2 p-2">Name</th>
                <th className="border-2 p-2">Roll_number</th>
                <th className="border-2 p-2">Email</th>
                <th className="border-2 p-2">IT1</th>
                <th className="border-2 p-2">IT2</th>
              </tr>
              {state?.data?.map((m) => (
                <tr
                  className="hover:cursor-pointer"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  {isOpen && <Modalpop setmode={setIsOpen} data={m} />}
                  <td className="border-2 p-2">{m.name}</td>
                  <td className="border-2 p-2">{m.rollNo}</td>
                  <td className="border-2 p-2">{m.email}</td>
                  <th className="border-2 p-2">{m.it1}</th>
                  <th className="border-2 p-2">{m.it2}</th>
                </tr>
              ))}
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default Teacherdash;
