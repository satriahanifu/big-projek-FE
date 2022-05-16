import { FIND_USERS, GET_USERS, REMOVE_USERS, CREATE_USERS, UPDATE_USERS } from "../constants";
import { getRequest, postRequest, putRequest, deleteRequest } from "../../utils/api";

//contents:
//getProduct
//getProductID
//delteProduct
//updateProduct
//createProduct

export const getUsers = (search = "") => {
  return (dispatch) => {
    getRequest(`/users?search=${search}`)
      .then((res) => {
        dispatch({
          type: GET_USERS,
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

export const getUsersID = (id) => {
  return (dispatch) => {
    getRequest(`/users/${id}`)
      .then((res) => {
        dispatch({
          type: FIND_USERS,
          payload: res,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteUsers = (id) => {
  return (dispatch) => {
    deleteRequest(`/users/${id}`)
      .then((res) => {
        dispatch({
          type: REMOVE_USERS,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updateUsers = (id) => {
  return (dispatch) => {
    putRequest(`/users/${id}`)
      .then((res) => {
        dispatch({
          type: UPDATE_USERS,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const createUsers = (data) => {
  return (dispatch) => {
    postRequest("/users/", data)
      .then((res) => {
        dispatch({
          type: CREATE_USERS,
          payload: res.data.data,
        });
        // window.localStorage.setItem("productData", JSON.stringify(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
