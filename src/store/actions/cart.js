import { ADD_TO_CART, REMOVE_CART } from "../constants";

export const removeCart = (id) => {
  return {
    type: REMOVE_CART,
    payload: id,
  };
};

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    payload: id,
  };
};
