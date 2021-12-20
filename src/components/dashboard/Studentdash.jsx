import { data } from "autoprefixer";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/userContext";
const Studentdash = () => {
  const { userData } = useContext(UserContext);
  console.log("userData", userData);
  const { rollNo } = userData;
  const [state, setState] = useState();
  const [loading, setLoading] = useState(false);
  const fetchStudentData = async () => {
    setLoading(true);
    fetch(
      "http://localhost/college-backend/api/exam/getStudentMarks.php?rollNo=" +
      // userData.rollNo
      11
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setState(data);
      })
      .catch((e) => setLoading(false));
  };

  useEffect(() => {
    fetchStudentData();
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
            Welcome Student
          </h1>
        </div>

        <div className="flex  w-4/5 justify-center flex-wrap bg-white">
          <table className="border-2 w-full ">
            <tr className="border-2">
              <th className="border-2 p-2">Name</th>
              <th className="border-2 p-2">Roll_number</th>
              <th className="border-2 p-2">Email</th>
              <th className="border-2 p-2">Course Id</th>
              <th className="border-2 p-2">IT1</th>
              <th className="border-2 p-2">IT2</th>
            </tr>
            {!state?.data ?
              <tr>
                <td>-</td>
              </tr>
              :
              state?.data?.map(m => (
                <tr className="hover:cursor-pointer" key={m.rollNo}>
                  <td className="border-2 p-2">{m.name}</td>
                  <td className="border-2 p-2">{m.rollNo}</td>
                  <td className="border-2 p-2">{m.email}</td>
                  <th className="border-2 p-2">{m.cId}</th>
                  <th className="border-2 p-2">{m.it1}</th>
                  <th className="border-2 p-2">{m.it2}</th>
                </tr>
              ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default Studentdash;
