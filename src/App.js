import "./App.css";
import { Routes, Route } from "react-router-dom";

import Studentdash from "./components/dashboard/Studentdash";

import Teacherdash from "./components/dashboard/Teacherdash";
import Landing from "./components/landlingPage/Landing";
import Signin from "./components/sign-in/Signin";
import Signup from "./components/sign-up/Signup";
import SignupTr from "./components/sign-up/SignupTr";
// import { IoLockClosed } from "react-icons/io";
function App() {
  return (
    <>
      <Routes>
        <Route path="/welcome" element={<Landing />} />
        <Route path="/signup/student" element={<Signup />} />
        <Route path="/signup/teacher" element={<SignupTr />} />
        <Route path="/signin/:who" element={<Signin />} />
        <Route path="/signin/:who/:id" element={<Signin />} />
        <Route path="/dashboard/student" element={<Studentdash />} />
        <Route path="/dashboard/teacher" element={<Teacherdash />} />
      </Routes>
    </>
  );
}

export default App;
