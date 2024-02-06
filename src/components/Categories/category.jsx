import { useState, useEffect } from "react";
import { Audio } from "react-loader-spinner"; // Make sure you have imported the correct component
import categoriesContext from "../../context/categoriesContext";

const Category = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await categoriesContext.list();
        setData(res.data.data);
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
const [itemLoaded, setItemsLoaded] = useState(3);

  const handleLoadMore = () => {
     
    setLoading(true); // Set loading to true to show the spinner
    
    setTimeout(() => {
     
      const newData = [];  
setData([...newData, ...data]);    
   setItemsLoaded(itemLoaded + 3);  

      setLoading(false); 
    }, 1000);  
  };
   return (
    <div className="container-fluid pt-5">
      <div className="row px-xl-5 pb-3">
        {data
          ?.slice(data?.length - itemLoaded)
          .map((item, index) => (
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
                    width={300} height={100}
                  />
                </a>
                <h5 className="font-weight-semi-bold m-0">{item.name}</h5>
              </div>
            </div>
          ))}
      </div>
      <div className="text-center">
        {loading ? (
          <Audio
            height={80}
            width={80}
            radius={9}
            color="green"
            ariaLabel="loading"
          />
        ) : (
          <button onClick={handleLoadMore}>Load More</button>
        )}
      </div>
    </div>
  );
};

export default Category;
