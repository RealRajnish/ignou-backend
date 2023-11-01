import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducers/ProductReducer";
import { API_1, API_11, API_2, API_5 } from "../api/Api";
import { useUserContext } from "./UserContext";
const ProductContext = createContext();

const initialState = {
  products: [],
  singleProduct: {},
  strayProducts: [],
  singleStray: {},
  appointments: [],
  reqRegisterStray: [],
  adoptionReq: [],
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const Navigate = useNavigate();

  const { userLoggedIn } = useUserContext();

  // API_1 call for getting all appointments
  const getAppointments = async (url) => {
    // dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url, {
        withCredentials: true,
      });
      const appointments = await res.data;
      // console.log(prodocts);
      dispatch({
        type: "SET_APPOINTMENTS_DATA",
        payload: appointments,
      });
    } catch (error) {
      // dispatch({ type: "API_ERROR" });
      console.log("Error occurred in api call");
      console.log(error);
    }
  };

  // API_2 call for getting all appointments
  const getReqRegisterStray = async (url) => {
    // dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const stray = await res.data;
      // console.log(prodocts);
      dispatch({
        type: "SET_REQ_REGISTER_STRAY_DATA",
        payload: stray,
      });
    } catch (error) {
      // dispatch({ type: "API_ERROR" });
      console.log("Error occurred in api call");
      console.log(error);
    }
  };

  // API call 3 for getting all products
  const getProducts = async (url) => {
    try {
      const res = await axios.get(url);
      const prod = await res.data;
      dispatch({
        type: "SET_ALL_PRODUCTS",
        payload: prod,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getSingleProduct = async (url) => {
    try {
      const res = await axios.get(url);
      const prod = await res.data;
      dispatch({
        type: "SET_SINGLE_PRODUCTS",
        payload: prod,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // For getting all Adoption Requests
  const getAdoptReq = async (url) => {
    try {
      const res = await axios.get(url, { withCredentials: true });
      dispatch({
        type: "SET_ADOPT_REQ",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAppointments(API_1);
    getReqRegisterStray(API_2);
    getProducts(API_5);
    getAdoptReq(API_11);
  }, []);

  return (
    <ProductContext.Provider
      value={{
        ...state,
        getReqRegisterStray,
        getSingleProduct,
        getAppointments,
        getProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// use custom hook for appointments
const useProductContext = () => {
  return useContext(ProductContext);
};

export { ProductProvider, ProductContext, useProductContext };
