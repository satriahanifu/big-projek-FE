import { useHistory } from "react-router-dom";
import React, { useState } from "react";

function Register() {
  // const { history } = useRouter()
  const history = useHistory();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const onChangeField = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users"));

    // jika data users'nya belum ada
    if (!users || users.length === 0) {
      alert("Belum login");
    } else {
      // cocokan user data di localStorage
      // dengan data username password di state loginData
      const findUser = users.find((user) => {
        return user.username === loginData.username && user.password === loginData.password;
      });

      // kalau tidak cocok
      // tampilkan alert error
      if (!findUser) {
        alert("Username atau password salah!");
      } else {
        // kalau cocok redirect ke halaman home
        // dan simpan flag isLogin pada localStorage
        localStorage.setItem("isLogin", JSON.stringify(true));
        history.push("/");
      }
    }
  };
  return (
    <div className="From" onSubmit={onSubmit}>
      <div className="username">
        <label>Name</label>
        <input type="text" name="username" value={loginData.username} onChange={onChangeField} />
      </div>
      <div className="password">
        <label>Password</label>
        <input type="password" name="password" value={loginData.password} onChange={onChangeField} />
      </div>
      <button className="" type="submit">
        Login
      </button>
    </div>
  );
}

export default Register;
