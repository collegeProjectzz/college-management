import React from "react";
import { Routes, Route, useParams, useLocation } from "react-router-dom";
import { AuthProvider } from "./context/userContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Studentdash from "./pages/Studentdash";
import Teacherdash from "./pages/Teacherdash";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import SignupTr from "./pages/SignupTr";
import Landing from "./pages/Landing";

function App() {
  let { pathname } = useLocation();
  return (
    <>
      <AuthProvider>
        {pathname !== "/" && <Navbar />}
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
