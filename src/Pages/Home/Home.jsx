import React from "react";

import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/Sidebar";
import Footer from "../../components/Footer/Footer";

import { Outlet } from "react-router-dom";
import HeroNav from "../../components/Hero/HeroNav";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  return (
    <>
      <div>
        <Header />

        <div className="container-fluid mb-5">
          <div className="row border-top px-xl-5">
            <SideBar />

            <div className="col-lg-9">
              <HeroNav />
              <Hero />
            </div>
          </div>
        </div>

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
