import "../../styles/Admin.css";
import React, { useEffect, useState } from "react";
import Topbar from "../../components/Topbar";
import { useDispatch, useSelector } from "react-redux";
import { getUser, createUser } from "../../store/actions/user";

function User() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);

  const [userData, setUserData] = useState({
    username: "",
    password: "",
    fullname: "",
    email: "",
  });

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(createUser(userData));
  // };

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <div>
      <div className="container">
        <Topbar />

        <div className=" d-flex justify-content-between">
          <div className="card shadow-sm rounded border-0 col-9">
            <div className="card-body">
              <table class="table">
                <div className="card-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">username</th>
                        <th scope="col">fullname</th>
                        <th scope="col">email</th>
                      </tr>
                    </thead>
                    <tbody>
                      {user &&
                        user.map((val, key) => {
                          return (
                            <tr key={key}>
                              <td>{val.username}</td>
                              <td>{val.fullname}</td>
                              <td>{val.email}</td>
                              <td>
                                <button type="button" class="btn btn-warning btn-sm">
                                  Edit
                                </button>

                                <button type="button" class="btn btn-danger btn-sm">
                                  Delete
                                </button>

                                <button type="button" class="btn btn-info btn-sm">
                                  Update
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </table>
            </div>
          </div>
          <div className="container">
            <div className="card shadow-sm rounded border-0  produk-input position-fixed top-8 end-10 ">
              <div className="card-body ">
                <form>
                  <h3>Tambah users</h3>
                  <br></br>
                  <div className="form-group">
                    <label>user name</label>
                    <input className="form-control" placeholder="username" />
                  </div>
                  <div className="form-group">
                    <label>password</label>
                    <input type="password" className="form-control" placeholder="password" />
                  </div>
                  <div className="form-group">
                    <label>fullname</label>
                    <input className="form-control" placeholder="fullname" />
                  </div>
                  <div className="form-group">
                    <label>email address</label>
                    <input type="email" className="form-control" placeholder="email" />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
