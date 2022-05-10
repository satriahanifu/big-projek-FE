import axios from "axios";
import { postRequest, getRequest, deleteRequest } from "../../utils/api";
import { API_URL, CREATE_USER, GET_USER, LOGIN_USER } from "../constants";

///belum beres
export const loginUser = (data) => {
  return (dispatch) => {
    postRequest("/auth/login", data)
      .then((res) => {
        dispatch({
          type: LOGIN_USER,
          payload: res.data.data,
        });
        window.localStorage.setItem("userData", JSON.stringify(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    window.localStorage.removeItem("userData");
  };
};

export const createUser = (data) => {
  return (dispatch) => {
    //cari cara utk mengupload fitur login dari FE
    postRequest("/auth/register", data).then((res) => {
      if (res.id) {
        return true;
      } else {
        return false;
      }
    });
  };
};

export const getUser = (data) => {
  return (dispatch) => {
    getRequest("/auth/getUser", data)
      .then((res) => {
        dispatch({
          type: GET_USER,
          payload: res.data.data,
        });
        window.localStorage.setItem("userData", JSON.stringify(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getUserID = (id) => {
  return (dispatch) => {
    getRequest(`/auth/getUserID/${id}`)
      .then((res) => {
        dispatch({
          type: GET_USER,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteUser = (data) => {
  return (dispatch) => {
    deleteRequest("/auth/", data)
      .then((res) => {
        dispatch({
          type: GET_USER,
          payload: res.data.data,
        });
        window.localStorage.setItem("userData", JSON.stringify(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
