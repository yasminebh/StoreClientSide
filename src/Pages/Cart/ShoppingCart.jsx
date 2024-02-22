import React from "react";
import HeaderBread from "../../components/HeaderBread/HeaderBread";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/Sidebar";
import "./styles.css"
const ShoppingCart = () => {
  return (
    <>
      <Header></Header>
      <div className="">
        <Sidebar
          className="sidebar"
        ></Sidebar>
        <HeaderBread className="headerbread" ></HeaderBread>
      </div>
    </>
  );
};

export default ShoppingCart;
