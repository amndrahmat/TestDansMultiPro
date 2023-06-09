import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="columns" style={{ minHeight: "100vh" }}>
        <div className="column is-2">
          <Sidebar />
        </div>
        <div className="column has-background-light">
          <main>{children}</main>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
