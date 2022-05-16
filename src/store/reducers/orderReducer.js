import { GET_ORDER, FIND_ORDER, UPDATE_ORDER, REMOVE_ORDER, CREATE_ORDER } from "../constants";

const initialState = {
  order: [],
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER:
      return {
        ...state,
        order: action.payload, ///payload the f ure talkin about?
      };
    case FIND_ORDER:
      const findOrderById = state.order.find((val) => String(val.id) === String(action.payload));
      return {
        ...state,
        order: findOrderById,
      };
    case UPDATE_ORDER:
      return {
        ...state,
        order: action.payload,
      };
    case CREATE_ORDER:
      return {
        ...state,
        payment: action.payload,
      };
    case REMOVE_ORDER:
      const findOrderById2 = state.order.find((val) => String(val.id) === String(action.payload));
      const removeOrder = findOrderById2.pop();
      return {
        payment: removeOrder,
      };

    default:
      return state;
  }
};

export default orderReducer;
