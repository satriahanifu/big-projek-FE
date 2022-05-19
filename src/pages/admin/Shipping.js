import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Topbar from "../../components/Topbar";
import { getShipment, createShipment } from "../../store/actions/shipment";

function Shipping() {
  const dispatch = useDispatch();
  const { shipment } = useSelector((state) => state.shipmentReducer);

  useEffect(() => {
    dispatch(shipment());
  }, []);

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
                    <th scope="col">nama shipment</th>
                    <th scope="col">actions</th>
                  </tr>
                </thead>
                <tbody>
                  {shipment &&
                    shipment.map((val, key) => {
                      return (
                        <tr key={key}>
                          <td>{val.name}</td>
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
                <form>
                  <h3>Tambah produk</h3>
                  <br></br>
                  <div className="form-group">
                    <label>Nama Shipping</label>
                    <input className="form-control" placeholder="nama shipping" />
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

export default Shipping;
