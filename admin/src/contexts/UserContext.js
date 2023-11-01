import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/UserReducer";
import { API_10 } from "../api/Api";

const UserContext = createContext();

const initialState = {
  userLoggedIn: false,
  rootUser: { name: "ADMIN" },
  clients: [],
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setLoggedInStatus = () => {
    dispatch({
      type: "SET_LOGGED_STATUS",
      payload: true,
    });
  };

  // Logging in with cookies
  const setLoggedIn = async () => {
    try {
      const resp = await axios.get("/hiii", {
        withCredentials: true,
      });
      if (resp.data.code == 3) {
        setLoggedInStatus();
      }
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };

  // setting logout
  const setLogOut = async () => {
    try {
      const resp = await axios.get("/logout", { withCredentials: true });
      console.log(resp);
      dispatch({ type: "USER_LOGOUT" });
    } catch (error) {
      console.log(error);
    }
  };

  // For setting all Clients information
  const getAllClients = async (url) => {
    try {
      const resp = await axios.get(API_10, { withCredentials: true });
      dispatch({
        type: "SET_CLIENTS",
        payload: resp.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoggedIn();
    getAllClients();
  }, []);

  return (
    <UserContext.Provider
      value={{
        ...state,
        setLoggedIn,
        setLoggedInStatus,
        setLogOut,
        getAllClients,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// use custom hook for appointments
const useUserContext = () => {
  return useContext(UserContext);
};

export { UserContext, UserProvider, useUserContext };
