import React from "react";

import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/Sidebar";
import Footer from "../../components/Footer/Footer";

import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <Header />

        <SideBar />

       <Outlet />

        <Footer />

        <a href="#" className="btn btn-primary back-to-top">
          <i className="fa fa-angle-double-up" />
        </a>
      </div>
    </>
  );
};

export default Home;
