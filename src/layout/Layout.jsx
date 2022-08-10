import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/";
import Header from "./Header";
import "./layout.css";
const Layout = () => {
  return (
    <div className="layout">
      <Header></Header>
      <div className="content">
        {/* <PickSeat /> */}
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
