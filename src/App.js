import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import Studentdash from "./components/dashboard/Studentdash";

import Teacherdash from "./components/dashboard/Teacherdash";
import Footer from "./components/footer/Footer";
import Landing from "./components/landlingPage/Landing";
import Navbar from "./components/Navbar";
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
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </>
  );
}

export default App;
