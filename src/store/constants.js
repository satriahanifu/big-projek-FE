export const GET_PRODUCT = "[GET] Product";
export const FIND_PRODUCT = "[FIND] Product";
export const UPDATE_PRODUCT = "[PUT] Update Product";
export const REMOVE_PRODUCT = "[REMOVE] Delete Product";
export const CREATE_PRODUCT = "[UPDATE] Update Product";

export const ADD_TO_CART = "[POST] Add To Cart";
export const REMOVE_CART = "[REMOVE] Remove Cart";

export const LOGIN_USER = "[USER] Login";
export const LOGOUT_USER = "[USER] Loguout";
export const CREATE_USER = "[USER] create";
export const GET_USER = "[USER] findall";
export const GET_USERID = "[USER] findbyid";

export const GET_CATEGORY = "[GET] Category";
export const FIND_CATEGORY = "[FIND] Category";
export const UPDATE_CATEGORY = "[PUT] Category";
export const REMOVE_CATEGORY = "[REMOVE] Delete Category";
export const CREATE_CATEGORY = "[UPDATE] Update Category";

// export const API_URL = "http://localhost:4000";

export const userData = JSON.parse(localStorage.getItem("userData")) || {};
// export const productData = JSON.parse(localStorage.getItem("productData")) || {};
