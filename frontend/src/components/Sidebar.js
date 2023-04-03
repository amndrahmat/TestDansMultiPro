import React from "react";
import { Logout } from "../constants/Method";
import { NavLink } from "react-router-dom";
import { IoPerson, IoPricetag, IoHome, IoLogOut } from "react-icons/io5";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(event) {
    event.preventDefault();
    Logout();
  }

  render() {
    const name = localStorage
      .getItem("name")
      .substring(1, localStorage.getItem("name").length - 1);
    const email = localStorage
      .getItem("email")
      .substring(1, localStorage.getItem("email").length - 1);
    const role = localStorage
      .getItem("role")
      .substring(1, localStorage.getItem("role").length - 1);

    return (
      <div>
        <aside className="menu pl-2 has-shadow mt-4">
          <p
            className="has-text-weight-bold is-size-5"
            style={{ color: "#1F3C88" }}
          >
            {name}
          </p>
          <p className="is-size-6	">{email}</p>
          <p className="is-size-7">{role}</p>
          <p className="menu-label">General</p>
          <ul className="menu-list">
            <li>
              <NavLink to={"/dashboard"}>
                <IoHome /> Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to={"/products"}>
                <IoPricetag /> Products
              </NavLink>
            </li>
          </ul>
          <p className="menu-label">Admin</p>
          <ul className="menu-list">
            <li>
              <NavLink to={"/users"}>
                <IoPerson /> Users
              </NavLink>
            </li>
          </ul>
          <p className="menu-label">Settings</p>
          <ul className="menu-list">
            <li>
              <button className="button is-white" onClick={this.handleSubmit}>
                <IoLogOut /> Logout
              </button>
            </li>
          </ul>
        </aside>
      </div>
    );
  }
}

export default Sidebar;
