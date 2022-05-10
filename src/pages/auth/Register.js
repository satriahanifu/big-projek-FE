import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../store/actions/auth";

function Register() {
  const history = useHistory();
  const [registerData, setRegisterData] = useState({
    username: "",
    password: "",
    fullname: "",
    email: "",
  });

  const dispatch = useDispatch();

  const onChangeField = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(registerData))
      .then(result => {
        if (result) {
          alert("Register user berhasil");
          history.push("/login");
        } else {
          alert("Gagal melakukan register user");
        }
      })

    // const users = JSON.parse(localStorage.getItem("users"));

    // // jika data users'nya belum ada
    // if (!users || users.length === 0) {
    //   alert("Belum login");
    // } else {
    //   // cocokan user data di localStorage
    //   // dengan data username password di state loginData
    //   const findUser = users.find((user) => {
    //     return user.username === loginData.username && user.password === loginData.password;
    //   });

    //   // kalau tidak cocok
    //   // tampilkan alert error
    //   if (!findUser) {
    //     alert("Username atau password salah!");
    //   } else {
    //     // kalau cocok redirect ke halaman home
    //     // dan simpan flag isLogin pada localStorage
    //     localStorage.setItem("isLogin", JSON.stringify(true));
    //     history.push("/");
    //   }
    // }
  };
  return (
    <form className="From" onSubmit={onSubmit}>
      <div className="username">
        <label>Name</label>
        <input type="text" name="username" value={registerData.username} onChange={onChangeField} />
      </div>
      <div className="password">
        <label>Password</label>
        <input type="password" name="password" value={registerData.password} onChange={onChangeField} />
      </div>
      <div className="fullname">
        <label>fullname</label>
        <input type="fullname" name="fullname" value={registerData.fullname} onChange={onChangeField} />
      </div>
      <div className="email">
        <label>email</label>
        <input type="email" name="email" value={registerData.email} onChange={onChangeField} />
      </div>
      <button className="" type="submit">
        Register
      </button>
    </form>
  );
}

export default Register;
