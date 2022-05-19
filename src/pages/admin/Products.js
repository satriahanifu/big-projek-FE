import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Topbar from "../../components/Topbar";
import { getCategory } from "../../store/actions/category";
import { getProduct, createProduct } from "../../store/actions/product";

function Products() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productReducer);
  const { category } = useSelector((state) => state.categoryReducer);

  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    stock: 0,
    size: "",
    image: "",
    categoryId: "",
  });

  // ketika input onchange, set datanya ke productData
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: name === "price" || name === "stock" ? Number(value) : value,
    }));
  };

  // memproses form
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct(productData));
  };

  useEffect(() => {
    dispatch(getCategory());
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
                        <td>
                          <img src={val.image ? val.image : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"} width={80} height={80} />
                        </td>
                        <td>{val.name}</td>
                        <td>{val.description}</td>
                        <td>{val.price}</td>
                        <td>{val.stock}</td>
                        <td>{val.size}</td>
                        <td>{val.category?.name ?? "-"}</td>
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
                <h3>Tambah produk</h3>
                <br></br>
                <div className="form-group mb-2">
                  <label>Nama Produk</label>
                  <input onChange={onInputChange} className="form-control" name="name" placeholder="masukkan nama produk" />
                </div>
                <div className="form-group mb-2">
                  <label>deskripsi</label>
                  <input onChange={onInputChange} className="form-control" name="description" placeholder="deskripsi produk" />
                </div>
                <div className="form-group mb-2">
                  <label>harga</label>
                  <input type="number" className="form-control" onChange={onInputChange} name="price" placeholder="harga" />
                </div>
                <div className="form-group mb-2">
                  <label>stock</label>
                  <input type="number" className="form-control" name="stock" onChange={onInputChange} placeholder="stock" />
                </div>
                <div className="form-group mb-2">
                  <label>ukuran</label>
                  <input className="form-control" name="size" placeholder="ukuran" onChange={onInputChange} />
                </div>
                <div className="form-group mb-2">
                  <label>gambar produk</label>
                  <input className="form-control" name="image" placeholder="gambar produk" onChange={onInputChange} />
                </div>
                <div className="form-group mb-2">
                  <label>Nama Produk</label>
                  <select class="form-select" name="categoryId" onChange={onInputChange}>
                    {category &&
                      category.map((val, key) => {
                        return (
                          <option key={key} value={val.id}>
                            {val.name}
                          </option>
                        );
                      })}
                  </select>
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
