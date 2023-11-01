const UserReducer = (state, action) => {
  if (action.type === "SET_LOGGED_STATUS") {
    return {
      ...state,
      userLoggedIn: action.payload,
    };
  }
  if (action.type === "USER_LOGOUT") {
    return {
      ...state,
      userLoggedIn: false,
    };
  }
  if (action.type === "SET_CLIENTS") {
    return {
      ...state,
      clients: action.payload,
    };
  }

  return state;
};

export default UserReducer;
