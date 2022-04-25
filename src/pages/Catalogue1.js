import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/Catalogue.css";
import "../styles/Fonts.css";
import "../components/Footer";
import Footer from "../components/Footer";
import "../styles/Reset.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/actions/product";

export default function Catalogue() {
  const dispacth = useDispatch();
  const { products } = useSelector((state) => state.productReducer);

  useEffect(() => {
    dispacth(getProducts());
  }, []);

  return (
    <div className="container">
      <div className="topBar">
        <div className="headerLeft">
          <h3>Your Shop Name</h3>
        </div>
        <div className="headerRight">
          <div className="search">
            <input placeholder="search"></input>
            <button>
              <img src={process.env.PUBLIC_URL + "/png/cart.png"} alt="logo" />
            </button>
          </div>
          <div className="cartButton">
            <Link to="">
              <img src={process.env.PUBLIC_URL + "/png/cart.png"} alt="logo" />
            </Link>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="leftSide">
          <ul>
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
          </ul>
        </div>
        <div className="center">
          {products &&
            products.map((val, key) => {
              return (
                <div className="productCard">
                  <div className="productSection" key={key}>
                    <h4>{val.productName}</h4>
                    <p>price{val.price}</p>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="rightSide">
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
