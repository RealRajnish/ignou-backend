const OrderReducer = (state, action) => {
  if (action.type === "SETTING_ORDERS") {
    return {
      ...state,
      orders: action.payload,
    };
  }
  return state;
};
export default OrderReducer;
