import { CREATE_USER, LOGIN_USER, LOGOUT_USER } from "../constants";

const initialState = {
  user: null,
  isLogin: false,
  token: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    case LOGOUT_USER:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
