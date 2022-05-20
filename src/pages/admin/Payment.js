import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Topbar from "../../components/Topbar";
import { getPayment } from "../../store/actions/payment";
import { createPayment } from "../../store/actions/payment";

function Payment() {
  const dispatch = useDispatch();
  const { payment } = useSelector((state) => state.paymentReducer);

  useEffect(() => {
    dispatch(createPayment());
  }, []);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentData((prevState) => ({
      ...prevState,
      [bankName]: bankName === "accountNumber" || bankName === "accountname" ? Number(value) : value,
    }));
  };

  const [paymentData, setPaymentData] = useState({
    bankName: "",
    accountNumber: "",
    accountName: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createPayment(payment));
  };

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
                    <th scope="col">nama bank</th>
                    <th scope="col">no rekening</th>
                    <th scope="col">nama akun</th>
                    <th scope="col">actions</th>
                  </tr>
                </thead>
                <tbody>
                  {payment &&
                    payment.map((val, key) => {
                      return (
                        <tr key={key}>
                          <td>{val.accountNumber}</td>
                          <td>{val.accountName}</td>
                          <td>{val.bankName}</td>
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
          </div>
          <div className="container">
            <div className="card shadow-sm rounded border-0  produk-input position-fixed top-8 end-10 ">
              <div className="card-body ">
                <form onSubmit={onSubmit}>
                  <h3>Tambah payment</h3>
                  <br />
                  <div className="form-group">
                    <label>Nama akun</label>
                    <input className="form-control" placeholder="masukkan nama" name="accountName" onChange={onInputChange} />
                  </div>
                  <div className="form-group">
                    <label>No rekening</label>
                    <input className="form-control" placeholder="masukkan rekening" name="accountNumber" onChange={onInputChange} />
                  </div>
                  <div className="form-group">
                    <label>Nama bank</label>
                    <input className="form-control" placeholder="masukkan bank" name="bankName" onChange={onInputChange} />
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

export default Payment;
