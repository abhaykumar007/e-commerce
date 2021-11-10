import React from "react";
import logo from "./images/myntra.png";
export default function Navbar() {
  return (
    <div className="nav">
      <img src={logo} alt="logo" />

      <div className="left">
        <strong>
          <a href="">MEN</a>
        </strong>
        <strong>
          <a href="">WOMEN</a>
        </strong>
        <strong>
          <a href="">KIDS</a>
        </strong>
        <strong>
          <a href="">HOME & LIVING</a>
        </strong>
        <strong>
          <a href="">BEAUTY</a>
        </strong>
      </div>
      <div className="input">
        <i className="fas fa-search"></i>
        <input />
      </div>

      <div className="right">
        <div className="unit">
          <i className="far fa-user"></i>
          <h6>Profile</h6>
        </div>
        <div className="unit">
          <i className="far fa-heart"></i>
          <h6>Wishlist</h6>
        </div>
        <div className="unit">
          <i className="fas fa-shopping-bag"></i>
          <h6>Bag</h6>
        </div>
      </div>
    </div>
  );
}
