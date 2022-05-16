import { FIND_CATEGORY, GET_CATEGORY, REMOVE_CATEGORY, UPDATE_CATEGORY, CREATE_CATEGORY } from "../constants";

const initialState = {
  category: [],
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      return {
        ...state,
        category: action.payload, ///payload the f ure talkin about?
      };
    case FIND_CATEGORY:
      const findCategoryById = state.Category.find((val) => String(val.id) === String(action.payload));
      return {
        ...state,
        category: findCategoryById,
      };
    case UPDATE_CATEGORY:
      return {
        ...state,
      };
    case REMOVE_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case CREATE_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
