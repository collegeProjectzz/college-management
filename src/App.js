import React from "react";
import { Routes, Route, useParams, useLocation } from "react-router-dom";
import { AuthProvider } from "./context/userContext";

import Footer from "./components/Footer";
import Nav from "./components/Nav";

import Teacherdash from "./pages/Teacherdash";
import Signin from "./pages/Signin";
import Landing from "./pages/Landing";
import SignUp from "./pages/Signup";
import StudentDashboard from "./Dashboard/Student/StudentDashboard";

function App() {
  let { pathname } = useLocation();
  let dashboard = pathname.startsWith("/dashboard");

  return (
    <AuthProvider>
      {!dashboard && pathname !== "/" && <Nav />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin/:who" element={<Signin />} />
        <Route path="/signup/:who" element={<SignUp />} />
        <Route path="/dashboard/student/*" element={<StudentDashboard />} />
        <Route path="/dashboard/faculty/*" element={<Teacherdash />} />
      </Routes>
      {!dashboard && <Footer />}
    </AuthProvider>
  );
}

export default App;
