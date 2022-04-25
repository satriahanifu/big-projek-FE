import { REMOVE_CART } from "../constants";
export const removeCart = (id) => {
  return {
    type: REMOVE_CART,
    payload: id,
  };
};
