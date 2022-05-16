import { FIND_SHIPMENT, CREATE_SHIPMENT, UPDATE_SHIPMENT, GET_SHIPMENT, REMOVE_SHIPMENT } from "../constants";
import { getRequest, postRequest, putRequest, deleteRequest } from "../../utils/api";

//contents:
//getProduct
//getProductID
//delteProduct
//updateProduct
//createProduct

export const getShipment = () => {
  return (dispatch) => {
    getRequest("/shipment")
      .then((res) => {
        dispatch({
          type: GET_SHIPMENT,
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

export const getShipmentID = (id) => {
  return (dispatch) => {
    getRequest(`/shipment/${id}`)
      .then((res) => {
        dispatch({
          type: FIND_SHIPMENT,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteShipment = (id) => {
  return (dispatch) => {
    deleteRequest(`/shipment/${id}`)
      .then((res) => {
        dispatch({
          type: REMOVE_SHIPMENT,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updateShipment = (id) => {
  return (dispatch) => {
    putRequest(`/shipment/${id}`)
      .then((res) => {
        dispatch({
          type: UPDATE_SHIPMENT,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const createShipment = (data) => {
  return (dispatch) => {
    postRequest("/shipment/", data)
      .then((res) => {
        dispatch({
          type: CREATE_SHIPMENT,
          payload: res.data.data,
        });
        window.localStorage.setItem("addressData", JSON.stringify(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
