import { GET_PAYMENT, FIND_PAYMENT, UPDATE_PAYMENT, REMOVE_PAYMENT, CREATE_PAYMENT } from "../constants";

const initialState = {
  payment: {},
};

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PAYMENT:
      return {
        ...state,
        payment: action.payload, ///payload the f ure talkin about?
      };
    case FIND_PAYMENT:
      const findPaymentById = state.payment.find((val) => String(val.id) === String(action.payload));
      return {
        ...state,
        payment: findPaymentById,
      };
    case UPDATE_PAYMENT:
      return {
        ...state,
        payment: action.payload,
      };
    case CREATE_PAYMENT:
      return {
        ...state,
        payment: action.payload,
      };
    case REMOVE_PAYMENT:
      const findPaymentById2 = state.payment.find((val) => String(val.id) === String(action.payload));
      const removePayment = findPaymentById2.pop();
      return {
        payment: removePayment,
      };

    default:
      return state;
  }
};

export default paymentReducer;
