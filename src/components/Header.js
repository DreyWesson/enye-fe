import React from "react";
import "./styles/Header.css";

export function Header() {
  return (
    <nav className="header">
      {/* Logo on the left */}
      <img
        className="header__logo"
        src="https://cdn1.vectorstock.com/i/1000x1000/25/70/shopping-cart-icon-vector-12712570.jpg"
        alt="cart logo"
      />
      {/* Search box */}
    </nav>
  );
}
