import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Topbar from "../../components/Topbar";
import { getProduct } from "../../store/actions/product";

function Products() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productReducer);
  useEffect(() => {
    dispatch(getProduct());
  }, []);
  return (
    <div className="container">
      <Topbar />
      <div className=" d-flex justify-content-between">
        <div className="card shadow-sm rounded border-0 col-9">
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">gambar</th>
                  <th scope="col">Nama produk</th>
                  <th scope="col">Deskripsi</th>
                  <th scope="col">Harga</th>
                  <th scope="col">stock</th>
                  <th scope="col">ukuran</th>
                  <th scope="col">categoryId</th>
                  <th scope="col">actions</th>
                </tr>
              </thead>
              <tbody>
                {products &&
                  products.map((val, key) => {
                    return (
                      <tr key={key}>
                        <td>{val.image}</td>
                        <td>{val.name}</td>
                        <td>{val.description}</td>
                        <td>{val.price}</td>
                        <td>{val.stock}</td>
                        <td>{val.size}</td>
                        <td>{val.categoryId}</td>
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
                  <label>Nama Produk</label>
                  <input className="form-control" placeholder="masukkan nama produk" />
                </div>
                <div className="form-group">
                  <label>deskripsi</label>
                  <input className="form-control" placeholder="deskripsi produk" />
                </div>
                <div className="form-group">
                  <label>harga</label>
                  <input className="form-control" placeholder="harga" />
                </div>
                <div className="form-group">
                  <label>stock</label>
                  <input className="form-control" placeholder="stock" />
                </div>
                <div className="form-group">
                  <label>stock</label>
                  <input className="form-control" placeholder="stock" />
                </div>
                <div className="form-group">
                  <label>ukuran</label>
                  <input className="form-control" placeholder="ukuran" />
                </div>
                <div className="form-group">
                  <label>gambar produk</label>
                  <input className="form-control" placeholder="gambar produk" />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
