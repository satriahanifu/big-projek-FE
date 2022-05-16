import { GET_USER, FIND_USER, UPDATE_USER, REMOVE_USER, CREATE_USER } from "../constants";

const initialState = {
  user: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload, ///payload the f ure talkin about?
      };
    case FIND_USER:
      const findUserById = state.user.find((val) => String(val.id) === String(action.payload));
      return {
        ...state,
        user: findUserById,
      };
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload,
      };
    case CREATE_USER:
      return {
        ...state,
        user: action.payload,
      };
    case REMOVE_USER:
      const findUserById2 = state.user.find((val) => String(val.id) === String(action.payload));
      const removeUser = findUserById2.pop();
      return {
        user: removeUser,
      };

    default:
      return state;
  }
};

export default userReducer;
