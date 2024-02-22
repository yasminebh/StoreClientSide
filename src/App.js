import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home/Home";
import Layout from "./Pages/Home/Layout";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Shop from "./Pages/shop/Shop";
import ProductDetails from "./Pages/ProductDetail/ProductDetails";
import ShopCard from "./components/ShopCard";
import ShoppingCart from "./Pages/Cart/ShoppingCart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Layout />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/details/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
