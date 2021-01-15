import React from "react";
import "./styles/Header.css";

export function Header() {
  return (
    <nav className="header">
      {/* Logo on the left */}
      <img
        className="header__logo"
        src="https://images.vexels.com/media/users/3/140748/isolated/preview/5b078a59390bb4666df98b49f1cdedd0-male-profile-avatar-by-vexels.png"
        alt="cart logo"
      />
      <h2>PROFILES</h2>
      {/* Search box */}
    </nav>
  );
}
