export const GET_PRODUCT = "[GET] Product";
export const FIND_PRODUCT = "[FIND] Product";
export const ADD_TO_CART = "[POST] Add To Cart";
export const REMOVE_CART = "[REMOVE] Remove Cart";

export const LOGIN_USER = "[USER] Login";
export const LOGOUT_USER = "[USER] Loguout";
export const CREATE_USER = "[USER] create";
export const GET_USER = "[USER] findall";
export const GET_USERID = "[USER] findbyid";

export const API_URL = "http://localhost:4000";

export const userData = JSON.parse(localStorage.getItem("userData")) || {};