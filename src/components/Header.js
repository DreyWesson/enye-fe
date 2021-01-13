import React from "react";
import "./styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { FilterListOutlined } from "@material-ui/icons";

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
      <div className="header__search">
        <FilterListOutlined fontSize="large" className="header__searchFilter" />
        <input
          type="text"
          className="header__searchInput"
          placeholder="Search customer..."
        />
        <SearchIcon className="header__searchIcon" />
      </div>
    </nav>
  );
}
