import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/userContext";

import Navbar from "./components/Navbar";
import Footer from "./components/footer/Footer";

import Studentdash from "./pages/Studentdash";
import Teacherdash from "./pages/Teacherdash";
import Landing from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import SignupTr from "./pages/SignupTr";

function App() {

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
