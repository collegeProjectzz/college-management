import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useContext } from "react";

import Studentdash from "./components/dashboard/Studentdash";

import Teacherdash from "./components/dashboard/Teacherdash";
import Landing from "./components/landlingPage/Landing";
import Signin from "./components/sign-in/Signin";
import Signup from "./components/sign-up/Signup";
import SignupTr from "./components/sign-up/SignupTr";
import { AuthProvider, UserContext } from "./context/userContext";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  // const navigate = useNavigate();
  // const { login, setUser, userData } = useContext(UserContext);
  // useEffect(() => {
  //   const user = sessionStorage.getItem("user");
  //   const userData = sessionStorage.getItem(user);
  //   login(userData, user);
  //   setUser(user);
  // }, []);

  // useEffect(() => {
  //   !userData && navigate("/");
  // }, []);

  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup/student" element={<Signup />} />
          <Route path="/signup/faculty" element={<SignupTr />} />
          <Route path="/signin/:who" element={<Signin />} />
          <Route path="/dashboard/student" element={<Studentdash />} />
          <Route path="/dashboard/faculty" element={<Teacherdash />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
