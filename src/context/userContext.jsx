import { createContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  userData: null,
};
const UserContext = createContext();
// const UserContext = createContext({
//   userData: null,
//   login: (userdata, user) => {},
//   logout: () => {},
//   user: null,
//   setUser: (user) => {},
// });

function userReducers(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        userData: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        userData: null,
      };
    default:
      return state;
  }
}

function AuthProvider(props) {
  const [userData, dispatch] = useReducer(userReducers, initialState);
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  function login(userdata, user) {
    sessionStorage.setItem(user, JSON.stringify(userdata));
    sessionStorage.setItem("user", user);
    setUser(user);
    dispatch({
      type: "LOGIN",
      payload: userdata,
    });
    navigate("/dashboard/" + user);
  }

  function logout() {
    console.log("logout init");
    console.log("user", user);
    setUser(null);
    sessionStorage.removeItem(user);
    sessionStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    console.log("logout exit");
    navigate("/");
  }

  return (
    <UserContext.Provider
      value={{
        userData,
        login,
        logout,
        user,
        setUser,
        dispatch,
      }}
      {...props}
    />
  );
}

export { AuthProvider, UserContext };
