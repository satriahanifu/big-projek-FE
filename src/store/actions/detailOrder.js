import { FIND_DETAILORDER, CREATE_DETAILORDER, UPDATE_DETAILORDER, GET_DETAILORDER, REMOVE_DETAILORDER } from "../constants";
import { getRequest, postRequest, putRequest, deleteRequest } from "../../utils/api";

//contents:
//getProduct
//getProductID
//delteProduct
//updateProduct
//createProduct

export const getDetailOrder = () => {
  return (dispatch) => {
    getRequest("/detailorder")
      .then((res) => {
        dispatch({
          type: GET_DETAILORDER,
          payload: res,
        });
        // window.localStorage.setItem("addressData", JSON.stringify(res));
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getDetailOrderID = (id) => {
  return (dispatch) => {
    getRequest(`/detailorder/${id}`)
      .then((res) => {
        dispatch({
          type: FIND_DETAILORDER,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteDetailOrder = (id) => {
  return (dispatch) => {
    deleteRequest(`/detailorder/${id}`)
      .then((res) => {
        dispatch({
          type: REMOVE_DETAILORDER,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updateDetailOrder = (id) => {
  return (dispatch) => {
    putRequest(`/detailorder/${id}`)
      .then((res) => {
        dispatch({
          type: UPDATE_DETAILORDER,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const createDetailOrder = (data) => {
  return (dispatch) => {
    postRequest("/detailorder/", data)
      .then((res) => {
        dispatch({
          type: CREATE_DETAILORDER,
          payload: res.data.data,
        });
        // window.localStorage.setItem("addressData", JSON.stringify(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
