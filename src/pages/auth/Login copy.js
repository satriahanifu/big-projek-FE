import { useHistory } from "react-router-dom";
import React, { useState } from "react";
// import "./Login.css";
// import "./Fonts.css";

function Login() {
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
    <div className="container">
      <div className="leftSide">
        <h3>pengalaman berbelanja dari ujung jari</h3>
        <h3>mulailah dari sekarang</h3>
      </div>
      <div className="From" onSubmit={onSubmit}>
        <h3>Login</h3>
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
    </div>
  );
}

export default Login;
