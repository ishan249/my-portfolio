import React from "react";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = ({ darkMode }) => {
  return (
    <>
      <div className="mainDiv">
        <div className="mainBody">
          <Navbar />
          <div className="content-container">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
