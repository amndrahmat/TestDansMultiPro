import React, { useState } from "react";

const NavbarHome = () => {
  const [isActive, setisActive] = useState(false);
  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="main navigation"
      style={{ background: "#1F3C88" }}
    >
      <div className="navbar-brand">
        <button
          onClick={() => {
            setisActive(!isActive);
          }}
          role="button"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
      <div
        id="navbarBasicExample"
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
      >
        <div className="navbar-start">
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link has-text-white">About Us</a>
            <div className="navbar-dropdown">
              <a href="/login" className="navbar-item">
                About Us
              </a>
            </div>
          </div>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link has-text-white">Job</a>
            <div className="navbar-dropdown">
              <a href="/" className="navbar-item"></a>
              <a href="/joblist" className="navbar-item">
                Job List
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarHome;
