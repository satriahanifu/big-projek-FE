import React, { useEffect } from "react";
import "../styles/Shop.css";
import "../styles/Fonts.css";
import "../styles/Reset.css";
import Footer from "../components/Footer";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeCart } from "../store/actions/cart";
import { useParams } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { getProductID } from "../store/actions/product";

export default function Shop() {
  const params = useParams();
  const history = useHistory();
  const dispacth = useDispatch();
  const { product } = useSelector((state) => state.productReducer);

  const addCart = () => {
    dispacth(addToCart(params.id));
  };

  useEffect(() => {
    dispacth(getProductID(params.id));
  }, [params.id]);

  const foward = () => {
    if (params.id < 9) {
      history.replace(`/shop/${Number(params.id) + 1}`);
    }
  };

  const rewind = () => {
    if (params.id >= 1) {
      history.replace(`/shop/${Number(params.id) - 1}`);
    } else {
      history.replace(`/shop/1`);
    }
  };

  const ingfo = () => {
    alert("item dimasukkan dalam keranjang");
  };

  const onCartClick = () => {
    addCart();
    ingfo();
  };

  return (
    // ID ={params.ID}
    <div className="container">
      <div className="cartGroup">
        <Link to="/cart">
          {/* <img src="images/cart.png" alt="" /> */}
          <FaShoppingCart size={24} />
        </Link>
      </div>
      <a className="goBack" href="#" onClick={() => history.goBack()}>
        <p>GO BACK</p>
      </a>
      <img src={product?.imageUrl} alt="" width="" className="tumbnail" />
      <div className="info">
        <div className="title">
          <h3>Color</h3>
        </div>
        <div className="subTitle">
          <h3>{product?.productName}</h3>
        </div>
        <div className="label">
          <p>{product?.price}</p>
        </div>
        <div className="info2">
          <p>{product?.tagline}</p>
          <br />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui architecto inventore cumque hic autem nesciunt minima, rerum, velit facilis tempore quae libero veritatis dicta iure animi eveniet voluptatem odit aliquam ex quaerat
            ipsum necessitatibus labore! Recusandae, distinctio fuga quia mollitia nam nulla eius commodi facilis voluptatum minus eligendi veritatis blanditiis.
          </p>
        </div>
      </div>
      <div className="sizing">
        <label htmlFor="size">Size:</label>
        <select name="size" id="size">
          <option value="Medium">Medium</option>
          <option value="Small">Small</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <p className="material">Mens 100% Cotton</p>
      <button className="addToCart" onClick={onCartClick}>
        <p>ADD TO CART</p>
      </button>
      <button className="left" onClick={rewind}>
        <p>&larr;</p>
      </button>
      <button className="right" onClick={foward}>
        <p>&rarr;</p>
      </button>
      <Footer />
    </div>
  );
}
