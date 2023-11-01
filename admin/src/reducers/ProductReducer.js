const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_APPOINTMENTS_DATA":
      return {
        ...state,
        appointments: action.payload,
      };
    case "SET_REQ_REGISTER_STRAY_DATA":
      return {
        ...state,
        reqRegisterStray: action.payload,
      };
    case "SET_ALL_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "SET_SINGLE_PRODUCTS":
      return {
        ...state,
        singleProduct: action.payload,
      };
    case "SET_ADOPT_REQ":
      return {
        ...state,
        adoptionReq: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default ProductReducer;
