import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Topbar from "../../components/Topbar";
import { getPayment } from "../../store/actions/payment";
import { createPayment } from "../../store/actions/payment";

function Payment() {
  const dispatch = useDispatch();
  const { payment } = useSelector((state) => state.paymentReducer);

  useEffect(() => {
    dispatch(getPayment());
    dispatch(createPayment());
  }, []);

  const [paymentData, setPaymentData] = useState({
    bankName: "",
    accountNumber: "",
    accountName: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const payment = JSON.parse(localStorage.getItem("payment"));

    // cocokan user data di localStorage
    // dengan data username password di state loginData
    const findPayment = payment.find((payment) => {
      return payment.accountNumber === paymentData.accountNumber && payment.accountName === paymentData.accountName;
      alert("Payment sudah ada");
    });

    // kalau tidak cocok
    // tampilkan alert error
    if (!findPayment) {
      localStorage.setItem("bankName", JSON.stringify(paymentData.bankName));
      localStorage.setItem("accountNumber", JSON.stringify(paymentData.accountNumber));
      localStorage.setItem("accountName", JSON.stringify(paymentData.accountName));

      alert("Payment ditambahkan");
    }
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
                    <input className="form-control" placeholder="masukkan nama" name="accountName" />
                  </div>
                  <div className="form-group">
                    <label>No rekening</label>
                    <input className="form-control" placeholder="masukkan rekening" name="accountNumber" />
                  </div>
                  <div className="form-group">
                    <label>Nama bank</label>
                    <input className="form-control" placeholder="masukkan bank" name="bankName" />
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
