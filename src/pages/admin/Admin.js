import React, { useEffect } from "react";
import Topbar from "../../components/Topbar";
import { useHistory } from "react-router-dom";
import { getProduct } from "../../store/actions/product";
import { getCategory } from "../../store/actions/category";
import { getOrder } from "../../store/actions/order";
import { getPayment } from "../../store/actions/payment";
import { useDispatch, useSelector } from "react-redux";

function Admin() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productReducer);
  const { category } = useSelector((state) => state.categoryReducer);
  const { order } = useSelector((state) => state.orderReducer);
  const { payment } = useSelector((state) => state.paymentReducer);

  useEffect(() => {
    dispatch(getProduct());
    dispatch(getCategory());
    dispatch(getOrder());
    dispatch(getPayment());
  }, []);

  const history = useHistory();
  const productClick = () => {
    history.push("./admin/products");
  };
  const categoryClick = () => {
    history.push("#");
  };
  const paymentClick = () => {
    history.push("./admin/payment");
  };
  return (
    <div className="container">
      <Topbar />
      <div className="card-container">
        <div class="row">
          <div class="col-sm-6">
            <div class="card m-2">
              <button class="btn btn-outline-primary" onClick={productClick}>
                <h5 class="card-title">total produk</h5>
                <p class="card-text">{products.length}</p>
              </button>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card m-2">
              <button class="btn btn-secondary btn-lg">
                <h5 class="card-title">total pemesanan</h5>
                <p class="card-text">{order.length}</p>
              </button>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card m-2">
              <button class="btn btn-outline-primary" onClick={categoryClick}>
                <h5 class="card-title">ketegori produk</h5>
                <p class="card-text">{category.length}</p>
              </button>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card m-2">
              <button class="btn btn-outline-primary" onClick={paymentClick}>
                <h5 class="card-title">metode pembayaran (judul)</h5>
                <p class="card-text">{payment.length}</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
