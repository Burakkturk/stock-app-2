import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import Purchases from "../pages/Purchases";
import Firms from "../pages/Firms";
import Brands from "../pages/Brands";
import Products from "../pages/Products";
import Sales from "../pages/Sales";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="stock" element={<PrivateRouter />}>
          <Route path="" element={<Dashboard />} > 
          <Route index element={<Home />} /> 
          <Route path="purchases" element={<Purchases />} /> 
          <Route path="sales" element={<Sales />} /> 
          <Route path="products" element={<Products />} /> 
          <Route path="firms" element={<Firms />} /> 
          <Route path="brands" element={<Brands />} /> 
         
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
