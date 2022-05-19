import { FIND_PRODUCT, GET_PRODUCT, REMOVE_PRODUCT, CREATE_PRODUCT, UPDATE_PRODUCT } from "../constants";
import { getRequest, postRequest, putRequest, deleteRequest } from "../../utils/api";

export const getProduct = (search = "") => {
  return (dispatch) => {
    getRequest(`/product?search=${search}`)
      .then((res) => {
        dispatch({
          type: GET_PRODUCT,
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

export const getProductID = (id) => {
  return (dispatch) => {
    getRequest(`/product/${id}`)
      .then((res) => {
        dispatch({
          type: FIND_PRODUCT,
          payload: res,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteProduct = (id) => {
  return (dispatch) => {
    deleteRequest(`/product/${id}`)
      .then((res) => {
        dispatch({
          type: REMOVE_PRODUCT,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updateProduct = (id) => {
  return (dispatch) => {
    putRequest(`/product/${id}`)
      .then((res) => {
        dispatch({
          type: UPDATE_PRODUCT,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const createProduct = (data) => {
  return (dispatch) => {
    postRequest("/product/", data)
      .then((res) => {
        dispatch({
          type: CREATE_PRODUCT,
          payload: res,
        });
        if (res) {
          alert("Produk berhasil ditambahkan");
        } else {
          alert("Produk GAGAL ditambahkan");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
