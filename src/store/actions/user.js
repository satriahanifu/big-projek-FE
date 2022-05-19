import { FIND_USER, GET_USER, REMOVE_USER, CREATE_USER, UPDATE_USER } from "../constants";
import { getRequest, postRequest, putRequest, deleteRequest } from "../../utils/api";

//contents:
//getProduct
//getProductID
//delteProduct
//updateProduct
//createProduct

export const getUser = (search = "") => {
  return (dispatch) => {
    getRequest(`/users?search=${search}`)
      .then((res) => {
        dispatch({
          type: GET_USER,
          payload: res,
        });
        // window.localStorage.setItem("productData", JSON.stringify(res));
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getUserID = (id) => {
  return (dispatch) => {
    getRequest(`/users/${id}`)
      .then((res) => {
        dispatch({
          type: FIND_USER,
          payload: res,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteUser = (id) => {
  return (dispatch) => {
    deleteRequest(`/users/${id}`)
      .then((res) => {
        dispatch({
          type: REMOVE_USER,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updateUser = (id) => {
  return (dispatch) => {
    putRequest(`/users/${id}`)
      .then((res) => {
        dispatch({
          type: UPDATE_USER,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const createUser = (data) => {
  return (dispatch) => {
    postRequest("/users/", data)
      .then((res) => {
        dispatch({
          type: CREATE_USER,
          payload: res.data.data,
        });
        // window.localStorage.setItem("productData", JSON.stringify(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
