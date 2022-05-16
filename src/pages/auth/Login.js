import { useHistory, Link } from "react-router-dom";
import React, { useState } from "react";
import "./Login.css";
import "./Fonts.css";

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
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp" alt="login form" className="img-fluid" />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fa-cubes fa-2x me-3 here"></i>
                        <span className="h1 fw-bold mb-0">one stop shopping</span>
                      </div>

                      <h5 className="fw-normal mb-3 pb-3 h5">masuk akun</h5>

                      <div className="form-outline mb-4" onSubmit={onSubmit}>
                        <input type="email" className="form-control form-control-lg" name="username" value={loginData.username} onChange={onChangeField} />
                        <label className="form-label">Email address</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="password" className="form-control form-control-lg" name="password" value={loginData.password} onChange={onChangeField} />
                        <label className="form-label">Password</label>
                      </div>

                      <div className="pt-1 mb-4">
                        <button className="btn btn-dark btn-lg btn-block" type="button">
                          Login
                        </button>
                      </div>

                      <a className="small text-muted" href="">
                        Forgot password?
                      </a>
                      <p className="mb-5 pb-lg-2 p">
                        Don't have an account?{" "}
                        <Link to="/register" className="register">
                          register here
                        </Link>
                      </p>
                      {/* <a href="" className="small text-muted">
                        Terms of use.
                      </a>
                      <a href="" className="small text-muted">
                        Privacy policy
                      </a> */}
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

export default Login;
