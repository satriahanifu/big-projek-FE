import { FIND_PAYMENT, GET_PAYMENT, REMOVE_PAYMENT, CREATE_PAYMENT, UPDATE_PAYMENT } from "../constants";
import { getRequest, postRequest, putRequest, deleteRequest } from "../../utils/api";

//contents:
//getProduct
//getProductID
//delteProduct
//updateProduct
//createProduct

export const getPayment = () => {
  return (dispatch) => {
    getRequest("/payment")
      .then((res) => {
        dispatch({
          type: GET_PAYMENT,
          payload: res,
        });
        // window.localStorage.setItem("paymentData", JSON.stringify(res));
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getPaymentID = (id) => {
  return (dispatch) => {
    getRequest(`/payment/${id}`)
      .then((res) => {
        dispatch({
          type: FIND_PAYMENT,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deletePayment = (id) => {
  return (dispatch) => {
    deleteRequest(`/payment/${id}`)
      .then((res) => {
        dispatch({
          type: REMOVE_PAYMENT,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updatePayment = (id) => {
  return (dispatch) => {
    putRequest(`/payment/${id}`)
      .then((res) => {
        dispatch({
          type: UPDATE_PAYMENT,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const createPayment = (data) => {
  return (dispatch) => {
    postRequest("/payment/", data)
      .then((res) => {
        dispatch({
          type: CREATE_PAYMENT,
          payload: res,
        });
        // window.localStorage.setItem("paymentData", JSON.stringify(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
