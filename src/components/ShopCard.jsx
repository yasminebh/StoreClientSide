import React, { useRef } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const ShopCard = ({ name, gallery, Price, id }) => {
    const shopCardRef = useRef(null);
    
  return (
    <div ref={shopCardRef} className="col-lg-4 col-md-6 col-sm-12 pb-1">
      <div className="card product-item border-0 mb-4">
        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
          <img
            className="img-fluid w-100"
            src={"http://localhost:5000/" + gallery[0].name}
            alt=""
          />
        </div>
        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
          <h6 className="text-truncate mb-3">{name}</h6>
          <div className="d-flex justify-content-center">
            <h6>{Price}</h6>
            <h6 className="text-muted ml-2">
              <del>{Price}</del>
            </h6>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between bg-light border">
          {/* Replace href with to */}
          <Link to={`/shop/details/${id}`} className="btn btn-sm text-dark p-0">
            <i className="fas fa-eye text-primary mr-1" />
            View Detail 
          </Link>
          {/* Replace href with to */}
          <Link to="#" className="btn btn-sm text-dark p-0">
            <i className="fas fa-shopping-cart text-primary mr-1" />
            Add To Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
