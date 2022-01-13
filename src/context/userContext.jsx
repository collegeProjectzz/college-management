import { createContext, useReducer, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const who = sessionStorage.getItem("user");
const user = who ? sessionStorage.getItem(who) : null;

console.log("user", user);

const initialState = {
  userData: user,
  user: who ? who : null
};

const UserContext = createContext({
  userData: null,
  login: (userdata, user) => { },
  logout: () => { },
  user: null,
});

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
        user: null,
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
    sessionStorage.removeItem("user");
    sessionStorage.removeItem(user);
    dispatch({ type: "LOGOUT" });
    navigate("/");
  }

  return (
    <UserContext.Provider
      value={{
        userData,
        login,
        logout,
        user,
        dispatch,
      }}
      {...props}
    />
  );
}

export { AuthProvider, UserContext };
