import { LOGIN_USER, LOGOUT_USER } from "../constants";

const initialState = {
  userData: {},
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER:
      return {
        ...state,
        userData: payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        userData: {},
      };
    default:
      return state;
  }
};
