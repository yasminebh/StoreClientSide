import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Footer from "../../components/Footer/Footer";
import HeaderBread from "../../components/HeaderBread/HeaderBread";
import ShopSideBar from "../../components/ShopSideBar";
import ShopCard from "../../components/ShopCard";
import productContext from "../../context/productContext";

const Shop = () => {
  const [data, setData] = useState([]);
const [search, setsearch] = useState()

const filteredData = data?.filter((d) =>  {
  if (!search) {
    return d 
  }else {
    return d.name.toLowerCase().includes(search)
  }
})
  const inputSearch = (e) => {
    setsearch(e.target.value.toLowerCase());

  }
  const getAllProduct = () => {
    productContext
      .list()
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <>
      <div>
        {/* Page Header Start */}
        <HeaderBread />
        {/* Shop Start */}
        <div className="container-fluid pt-5">
          <div className="row px-xl-5">
            {/* Shop Sidebar Start */}
            <ShopSideBar />
            {/* Shop Sidebar End */}

            {/* Shop Product Start */}
            <div className="col-lg-9 col-md-12">
              <div className="row pb-3">
                <div className="col-12 pb-1">
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <form>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search by name"
                          onChange={inputSearch}
                        />
                        <div className="input-group-append">
                          <span className="input-group-text bg-transparent text-primary">
                            <i className="fa fa-search" />
                          </span>
                        </div>
                      </div>
                    </form>
                    <div className="dropdown ml-4">
                      <button
                        className="btn border dropdown-toggle"
                        type="button"
                        id="triggerId"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Sort by
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="triggerId"
                      >
                        <Link className="dropdown-item" to="#">
                          Latest
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Popularity
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Best Rating
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {filteredData?.map((item, index) => {
                  return (
                    <ShopCard
                      name={item.name}
                      gallery={item.gallery}
                      Price={item.Price}
                      key={index}
                      id={item._id}
                    />
                  );
                })}
                <div className="col-12 pb-1">
                  <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-center mb-3">
                      <li className="page-item disabled">
                        <Link
                          className="page-link"
                          to="#"
                          aria-label="Previous"
                        >
                          <span aria-hidden="true">«</span>
                          <span className="sr-only">Previous</span>
                        </Link>
                      </li>
                      <li className="page-item active">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#" aria-label="Next">
                          <span aria-hidden="true">»</span>
                          <span className="sr-only">Next</span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            {/* Shop Product End */}
          </div>
        </div>
        {/* Footer Start */}
        <Footer />
        {/* Back to Top */}
        <Link to="#" className="btn btn-primary back-to-top">
          <i className="fa fa-angle-double-up" />
        </Link>
      </div>
    </>
  );
};

export default Shop;
