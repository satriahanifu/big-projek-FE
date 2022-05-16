import { FIND_ADDRESS, CREATE_ADDRESS, UPDATE_ADDRESS, GET_ADDRESS, REMOVE_ADDRESS } from "../constants";
import { getRequest, postRequest, putRequest, deleteRequest } from "../../utils/api";

//contents:
//getProduct
//getProductID
//delteProduct
//updateProduct
//createProduct

export const getAddress = () => {
  return (dispatch) => {
    getRequest("/address")
      .then((res) => {
        dispatch({
          type: GET_ADDRESS,
          payload: res,
        });
        window.localStorage.setItem("addressData", JSON.stringify(res));
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getAddressID = (id) => {
  return (dispatch) => {
    getRequest(`/address/${id}`)
      .then((res) => {
        dispatch({
          type: FIND_ADDRESS,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteAddress = (id) => {
  return (dispatch) => {
    deleteRequest(`/address/${id}`)
      .then((res) => {
        dispatch({
          type: REMOVE_ADDRESS,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updateAddress = (id) => {
  return (dispatch) => {
    putRequest(`/address/${id}`)
      .then((res) => {
        dispatch({
          type: UPDATE_ADDRESS,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const createAddress = (data) => {
  return (dispatch) => {
    postRequest("/address/", data)
      .then((res) => {
        dispatch({
          type: CREATE_ADDRESS,
          payload: res.data.data,
        });
        window.localStorage.setItem("addressData", JSON.stringify(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
