import "../../styles/Admin.css";

import React, { useEffect } from "react";
import Topbar from "../../components/Topbar";
import { useDispatch, useSelector } from "react-redux";

function User() {
  // const dispatch = useDispatch;
  // const { user } = useSelector((state) => state.userReducer);

  return (
    <div>
      <div className="container">
        <Topbar />

        <div className=" d-flex justify-content-between">
          <div className="card shadow-sm rounded border-0 col-9">
            <div className="card-body">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
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
