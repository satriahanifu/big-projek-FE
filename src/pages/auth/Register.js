import { useHistory, Link } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../store/actions/auth";
import "./Login.css";
import "./Fonts.css";

function Register() {
  const history = useHistory();
  const [registerData, setRegisterData] = useState({
    username: "",
    password: "",
    fullname: "",
    email: "",
    address: "",
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
    dispatch(createUser(registerData)).then((result) => {
      if (result) {
        alert("Register user berhasil");
        history.push("/login");
      } else {
        alert("Gagal melakukan register user");
      }
    });

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
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp" alt="Sample photo" className="img-fluid register-img" />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fa-cubes fa-2x me-3 here"></i>
                        <span className="h1 fw-bold mb-0">one stop shopping</span>
                      </div>
                      <h5 className="fw-normal mb-3 pb-3 h5">Register akun baru</h5>
                      <div className="form-outline">
                        <input type="text" className="form-control form-control-lg" name="username" value={registerData.username} onChange={onChangeField} />
                        <label className="form-label">User Name</label>
                      </div>
                      <div className="form-outline ">
                        <input type="password" className="form-control form-control-lg" name="password" />
                        <label className="form-label">Password</label>
                      </div>
                      <div className="form-outline">
                        <input type="text" className="form-control form-control-lg" name="fullname" value={registerData.fullname} onChange={onChangeField} />
                        <label className="form-label">Full Name</label>
                      </div>
                      <div className="form-outline mb-4" onSubmit={onSubmit}>
                        <input type="email" className="form-control form-control-lg" name="username" />
                        <label className="form-label">Email address</label>
                      </div>
                      <div className="pt-1 mb-4">
                        <button className="btn btn-dark btn-lg btn-block" type="button">
                          Register
                        </button>
                      </div>
                      <a className="small text-muted" href="">
                        Forgot password?
                      </a>
                      <br />
                      <Link to="" className="small text-muted">
                        Terms of use
                      </Link>
                      <br />
                      <Link to="" className="small text-muted">
                        Privacy policy
                      </Link>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
