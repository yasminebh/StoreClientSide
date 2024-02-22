import React, { useEffect, useState } from "react";
import categoriesContext from "../../context/categoriesContext";
 import Hero from "../Hero/Hero";
import HeroNav from "../Hero/HeroNav";

const Sidebar = () => {
  const [data, setData] = useState();

  const categData = () => {
    categoriesContext
      .list()
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    categData();
  }, []);

  return (
    <>
      {/* Sidebar */}
          <div className="col-lg-3 d-none d-lg-block">
            <a
              className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
              data-toggle="collapse"
              href="#navbar-vertical"
              style={{ height: 65, marginTop: "-1px", padding: "0 30px" }}
            >
              <h6 className="m-0">Categories</h6>
              <i className="fa fa-angle-down text-dark" />
            </a>
            <nav
              className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0"
              id="navbar-vertical"
            >
              <div
                className="navbar-nav w-100 overflow-hidden"
                style={{ height: 410 }}
              >
                {/* if subcat > 0  */}
                {data?.map((categ, index) => {
                  if (categ.subcategories.length > 0) {
                    return (
                      <div className="nav-item dropdown">
                        <a href="#" className="nav-link" data-toggle="dropdown">
                          {categ.name}
                          <i className="fa fa-angle-down float-right mt-1" />
                        </a>
                        <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                          {categ.subcategories?.map((item, index) => {
                            return (
                              <a href className="dropdown-item" key={index}>
                                {item?.name}
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <a href className="nav-item nav-link" key={index}>
                        {categ?.name}
                      </a>
                    );
                  }
                })}

                {/*  else  */}
              </div>
            </nav>
          </div>

          {/* Hero carrousel + menu + log + register */}

        
      {/* Navbar End */}
    </>
  );
};

export default Sidebar;
