import "./App.css";
import Landing from "./components/landlingPage/Landing";
import Navbar from "./components/Navbar";
import Signin from "./components/sign-in/Signin";
import Signup from "./components/sign-up/Signup";
import SignupTr from "./components/sign-up/SignupTr";
// import { IoLockClosed } from "react-icons/io";
function App() {
  return (
    <>
      <Navbar />
      <Signin />
    </>
  );
}

export default App;
