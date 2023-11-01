import axios from "axios";
import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import reducer from "../reducers/OrderReducer";
import { API_9 } from "../api/Api";

const OrderContext = createContext();

const initialState = {
  orders: [],
  singleOrder: [],
};

const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Api call for getting Orders in reverse order
  const getAllOrders = async (url) => {
    try {
      const res = await axios.get(url, { withCredentials: true });
      dispatch({
        type: "SETTING_ORDERS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllOrders(API_9);
  }, []);

  return (
    <OrderContext.Provider value={{ ...state }}>
      {children}
    </OrderContext.Provider>
  );
};

// custom hooks
const useOrderContext = () => {
  return useContext(OrderContext);
};

export { useOrderContext, OrderContext, OrderProvider };
