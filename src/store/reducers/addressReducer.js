import { GET_ADDRESS, FIND_ADDRESS, UPDATE_ADDRESS, REMOVE_ADDRESS, CREATE_ADDRESS } from "../constants";

const initialState = {
  address: {},
};

const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ADDRESS:
      return {
        ...state,
        address: action.payload, ///payload the f ure talkin about?
      };
    case FIND_ADDRESS:
      const findAddressById = state.address.find((val) => String(val.id) === String(action.payload));
      return {
        ...state,
        address: findAddressById,
      };
    case UPDATE_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    case CREATE_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    case REMOVE_ADDRESS:
      const findAddressById2 = state.address.find((val) => String(val.id) === String(action.payload));
      const removeAddress = findAddressById2.pop();
      return {
        address: removeAddress,
      };

    default:
      return state;
  }
};

export default addressReducer;
