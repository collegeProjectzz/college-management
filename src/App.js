import React from "react";
import { Routes, Route, useParams, useLocation } from "react-router-dom";
import { AuthProvider } from "./context/userContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Studentdash from "./pages/Studentdash";
import Teacherdash from "./pages/Teacherdash";
import Signin from "./pages/Signin";
import Landing from "./pages/Landing";
import SignUp from "./pages/Signup";

function App() {
  let { pathname } = useLocation();
  return (
    <>
      <AuthProvider>
        {pathname !== "/" && <Navbar />}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin/:who" element={<Signin />} />
          <Route path="/signup/:who" element={<SignUp />} />
          <Route path="/dashboard/student" element={<Studentdash />} />
          <Route path="/dashboard/faculty" element={<Teacherdash />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
