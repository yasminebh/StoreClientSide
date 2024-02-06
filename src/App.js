import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home/Home";
import Layout from "./Pages/Home/Layout";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}>

          <Route path="/" element={<Layout/>} />

        </Route>
        <Route path="/register" element={<Register/>} />
    </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
