import axios from "axios";
import { API_URL, CREATE_USER, GET_USER, LOGIN_USER } from "../constants";

export const loginUser = (data) => {
  return (dispatch) => {
    axios
      .post(`$API_URL/auth/login`, data)
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
    axios
      //cari cara utk mengupload fitur login dari FE
      .post(`${API_URL}/user`)
      .then((res) => {
        dispatch({
          type: CREATE_USER,
          payload: {
            username: req.data.username,
            password: req.data.password,
            fullname: req.data.fullname,
            email: req.data.email,
          },
        });
      });
  };
};

export const getUser = (data) => {
  return (dispatch) => {
    axios
      .GET(`${API_URL}/user`, data)
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

export const getUserID = (data) => {
  return (dispatch) => {
    const id = res.data.data;
    axios
      .GET(`${API_URL}/user/` + id, data)
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
