import { FIND_ORDER, GET_ORDER, REMOVE_ORDER, CREATE_ORDER, UPDATE_ORDER } from "../constants";
import { getRequest, postRequest, putRequest, deleteRequest } from "../../utils/api";

//contents:
//getProduct
//getProductID
//delteProduct
//updateProduct
//createProduct

export const getOrder = () => {
  return (dispatch) => {
    getRequest("/order")
      .then((res) => {
        dispatch({
          type: GET_ORDER,
          payload: res,
        });
        window.localStorage.setItem("orderData", JSON.stringify(res));
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getOrderID = (id) => {
  return (dispatch) => {
    getRequest(`/order/${id}`)
      .then((res) => {
        dispatch({
          type: FIND_ORDER,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteOrder = (id) => {
  return (dispatch) => {
    deleteRequest(`/order/${id}`)
      .then((res) => {
        dispatch({
          type: REMOVE_ORDER,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updateOrder = (id) => {
  return (dispatch) => {
    putRequest(`/order/${id}`)
      .then((res) => {
        dispatch({
          type: UPDATE_ORDER,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const createOrder = (data) => {
  return (dispatch) => {
    postRequest("/order/", data)
      .then((res) => {
        dispatch({
          type: CREATE_ORDER,
          payload: res.data.data,
        });
        window.localStorage.setItem("orderData", JSON.stringify(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
