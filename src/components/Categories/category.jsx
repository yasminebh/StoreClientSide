import React, { useState, useEffect } from "react";
import { Audio, ThreeDots } from "react-loader-spinner";
import categoriesContext from "../../context/categoriesContext";
const Category = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [itemLoaded, setItemsLoaded] = useState(3);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await categoriesContext.list();
        // Inverser l'ordre des catégories récupérées
        setData(res.data.data.reverse());
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const productQuantities = (category) => {
    let sum = 0;
    category.forEach((i) => {
      sum += i.product.length;
    });
    return sum;
  };
  const handleLoadMore = () => {
    setLoading(true); // Set loading to true to show the spinner
    setTimeout(() => {
      setItemsLoaded(itemLoaded + 3);
      setLoading(false);
    }, 1000);
  };
  const allCategoriesLoaded = itemLoaded >= data.length;
  return (
    <div className="container-fluid pt-5">
      <div className="row px-xl-5 pb-3">
        {data.slice(0, itemLoaded).map((item, index) => (
          <div className="col-lg-4 col-md-6 pb-1" key={index}>
            <div
              className="cat-item d-flex flex-column border mb-4"
              style={{ padding: 30 }}
            >
              <p className="text-right">
                {productQuantities(item.subcategories)}
              </p>
              <a
                href="/"
                className="cat-img position-relative overflow-hidden mb-3"
              >
                <img
                  src={`http://localhost:5000/${item.image}`}
                  className="img-fluid"
                  alt={item.name}
                  style={{
                    width: "200px !important",
                    height: "200px !important",
                    objectFit: "cover",
                  }}
                />
              </a>
              <h5 className="font-weight-semi-bold m-0">{item.name}</h5>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center d-flex justify-content-center">
        {loading ? (
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#C98C86"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        ) : (
          !allCategoriesLoaded && (
            <button onClick={handleLoadMore}>Read More</button>
          )
        )}
      </div>
    </div>
  );
};
export default Category;
