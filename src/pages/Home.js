import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import "../styles/Home.css";
import "../styles/Fonts.css";
import Footer from "../components/Footer";

export default function Home() {
  const history = useHistory();
  return (
    <div class="container">
      <div class="background"></div>
      <div class="topbar">
        <ul>
          <li>
            <a href="#">latest</a>
          </li>
          <li>
            <a href="#">all</a>
          </li>
        </ul>
      </div>
      <div class="megatron">
        <p>
          Choose <strong>as you want</strong>
        </p>
        <p>
          Pay <strong>as you can</strong>
        </p>
      </div>
      <div class="megatron2">
        <div class="shopNow">
          <p>Shop Now</p>
        </div>{" "}
        <button class="shop-now" onClick={() => history.push("/Catalogue")}>
          Shop Now
        </button>
        <div class="subTitle">
          <p>
            <strong>New Concept </strong>of Online Shopping
          </p>
        </div>
      </div>
      <div class="line"></div>
      <div class="subTitle2">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima omnis atque beatae eaque officiis rem! Hic, pariatur! Magni numquam voluptatem qui voluptas sed nostrum harum? Corporis magnam quia cumque dolore.</p>
      </div>
      <div class="gallery">
        <a href="shop.html" class="img1 hover">
          <div class="caption">
            <h3>GALLERY</h3>
            <p>SUBTITLE</p>
          </div>
        </a>
        <a href="#" class="img2 hover">
          <div class="caption">
            <h3>ACTIVITIES</h3>
            <p>SUBTITLE</p>
          </div>
        </a>
        <a href="#" class="img3 hover">
          <div class="caption">
            <h3>KEYNOTES</h3>
            <p>SUBTITLE</p>
          </div>
        </a>
      </div>
      <div class="footer">
        <img src="images/Group.png" alt="" />
      </div>
      <Footer />
    </div>
  );
}
