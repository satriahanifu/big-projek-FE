import { FIND_CATEGORY, GET_CATEGORY, REMOVE_CATEGORY, CREATE_CATEGORY, UPDATE_CATEGORY } from "../constants";
import { getRequest, postRequest, putRequest, deleteRequest } from "../../utils/api";

//contents:
//getProduct
//getProductID
//delteProduct
//updateProduct
//createProduct

export const getCategory = () => {
  return (dispatch) => {
    getRequest("/categories")
      .then((res) => {
        dispatch({
          type: GET_CATEGORY,
          payload: res,
        });
        // window.localStorage.setItem("categoryData", JSON.stringify(res));
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getCategoryID = (id) => {
  return (dispatch) => {
    getRequest(`/categories/${id}`)
      .then((res) => {
        dispatch({
          type: FIND_CATEGORY,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteCategory = (id) => {
  return (dispatch) => {
    deleteRequest(`/categories/${id}`)
      .then((res) => {
        dispatch({
          type: REMOVE_CATEGORY,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updateCategory = (id) => {
  return (dispatch) => {
    putRequest(`/categories/${id}`)
      .then((res) => {
        dispatch({
          type: UPDATE_CATEGORY,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const createCategory = (data) => {
  return (dispatch) => {
    postRequest("/category/", data)
      .then((res) => {
        dispatch({
          type: CREATE_CATEGORY,
          payload: res.data.data,
        });
        window.localStorage.setItem("categoryData", JSON.stringify(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
