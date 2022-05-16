import { GET_DETAILORDER, FIND_DETAILORDER, UPDATE_DETAILORDER, REMOVE_DETAILORDER, CREATE_DETAILORDER } from "../constants";

const initialState = {
  detailorder: {},
};

const detailOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAILORDER:
      return {
        ...state,
        detailorder: action.payload, ///payload the f ure talkin about?
      };
    case FIND_DETAILORDER:
      const findDetailOrderById = state.detailorder.find((val) => String(val.id) === String(action.payload));
      return {
        ...state,
        detailorder: findDetailOrderById,
      };
    case UPDATE_DETAILORDER:
      return {
        ...state,
        detailorder: action.payload,
      };
    case CREATE_DETAILORDER:
      return {
        ...state,
        detailorder: action.payload,
      };
    case REMOVE_DETAILORDER:
      const findDetailOrderById2 = state.detailorder.find((val) => String(val.id) === String(action.payload));
      const removeDetailOrder = findDetailOrderById2.pop();
      return {
        detailorder: removeDetailOrder,
      };

    default:
      return state;
  }
};

export default detailOrderReducer;
