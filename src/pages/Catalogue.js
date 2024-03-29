import React, { useEffect, useState } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import "../styles/Catalogue.css";
import "../styles/Fonts.css";
import "../components/Footer";
import Footer from "../components/Footer";
import "../styles/Reset.css";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../store/actions/product";
import { getCategory } from "../store/actions/category";
import { addToCart } from "../store/actions/cart";
import { useParams } from "react-router-dom";

export default function Catalogue() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productReducer);
  const { category } = useSelector((state) => state.categoryReducer);
  const history = useHistory();
  // const [productList, setProductList] = useState([]);
  // const [categoryList, setCategoryList] = useState([]);
  const [search, setSearch] = useState("");

  const onSearch = (e) => {
    setSearch(e.target.value);
  };

  const doSearch = () => {
    // if (search) {
    //   const filteredProduct = productList.filter((item) => item.productName.match(new RegExp(search, "gi")));
    //   setProductList(filteredProduct);
    // } else {
    //   setProductList(products);
    // }
  };

  const onEnterSearch = (e) => {
    if (e.keyCode === 13 || e.key === "Enter") {
      doSearch();
    }
  };

  useEffect(() => {
    dispatch(getProduct());
    dispatch(getCategory());
  }, []);

  const params = useParams();

  const addCart = () => {
    dispatch(addToCart(params.id));
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center topBar">
        <div className="flex-grow-1 headerLeft">
          <h3>Your Shop Name</h3>
        </div>
        <div className="flex-shrink-0 headerRight">
          <div className="input-group">
            <input placeholder="search" className="form-control shadow-none border-0 border-bottom" onChange={(e) => onSearch(e)} onKeyDown={(e) => onEnterSearch(e)} />
            <button type="button" className="btn btn-default" onClick={() => doSearch()}>
              <i className="fas fa-search fa-fw"></i>
            </button>
          </div>
          <button type="button" className="buttonCart">
            <Link to="/cart" className="fas fa-shopping-cart fa-fw"></Link>
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 leftSide">
          {
            <div className="ul">
              {category &&
                category.map((val, key) => {
                  return (
                    <div key={key} className="li" onClick={() => history.push(`/categories/${val.id}`)}>
                      {val.name}
                    </div>
                  );
                })}
            </div>
          }
          {/* <ul>
            <li>FATURED</li>
            <li>
              <NavLink to="">CATEGORY 1</NavLink>
            </li>
            <li>
              <NavLink to="">CATEGORY 2</NavLink>
            </li>
            <li>
              <NavLink to="">CATEGORY 3</NavLink>
            </li>
            <li>
              <NavLink to="">CATEGORY 4</NavLink>
            </li>
            <li>
              <NavLink to="">CATEGORY 5</NavLink>
            </li>
          </ul> */}
        </div>
        <div className="col-md-6">
          <div className="row">
            {products &&
              products.map((val, key) => {
                return (
                  <div key={key} className="col-md-4 mb-3" onClick={() => history.push(`/shop/${val.id}`)}>
                    <div className="productCard">
                      <div className="productSection" key={key}>
                        <h4>{val.name}</h4>
                        <p>price{val.price}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="col-md-2 rightSide">
          <ul>
            <li>ALL</li>
            <li>
              <NavLink to="">FILTER 1</NavLink>
            </li>
            <li>
              <NavLink to="">FILTER 2</NavLink>
            </li>
            <li>
              <NavLink to="">FILTER 3</NavLink>
            </li>
            <li>
              <NavLink to="">FILTER 4</NavLink>
            </li>
            <li>
              <NavLink to="">FILTER 5</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="pagination">
        <ul>
          <li>
            {" "}
            <NavLink to="">1</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="">2</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="">3</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="">4</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="">5</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="">6</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="">7</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="">8</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="">9</NavLink>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}
