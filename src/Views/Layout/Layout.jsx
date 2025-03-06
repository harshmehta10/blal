import React from "react";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router";
import Header from "./Header/Header";
import Mobile from "./Header/Mobile";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
