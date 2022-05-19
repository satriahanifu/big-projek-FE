import { ADD_TO_CART, FIND_PRODUCT, GET_PRODUCT, CREATE_PRODUCT } from "../constants";

const initialState = {
  products: [],
  product: {},
  carts: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        products: action.payload, ///payload the f ure talkin about?
      };
    case FIND_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    case ADD_TO_CART:
      const carts = [...state.carts];
      const findProduct = state.products.find((val) => String(val.id) === String(action.payload));
      if (findProduct) {
        carts.push({ ...findProduct, qty: 1 });
      }

      return {
        ...state,
        product: findProduct,
        carts: carts,
      };
    case CREATE_PRODUCT:
      const insertedProduct = [action.payload, ...state.products];
      return {
        ...state,
        products: insertedProduct,
      };
    default:
      return state;
  }
};

export default productReducer;
