import React from "react";
import { Route, Outlet, Routes } from "react-router-dom";
import Home from "./pages/user/Home/Home";
import Nav from './layouts/NavUser/Nav'
import NavBar from "./layouts/NavAdmin/NavBar";
import ListProduct from "./pages/admin/Product/ListProduct";
import AddProduct from "./pages/admin/Product/AddProduct";
import EditProduct from "./pages/admin/Product/EditProduct";

function App() {
  const Roote = () => {
    return(
      <div>
        <Nav/>
        <div>
          <Outlet/>
        </div>
      </div>
    )
  }
  const AdminTall = () => {
     return (
       <div>
         <NavBar />
         <div>
           <Outlet />
         </div>
       </div>
     );
  }
  return (
    <Routes>
      <Route path="/admin/*" element={<AdminTall />}>
        <Route index element={<ListProduct />} />
        <Route path="AddProduct" element={<AddProduct />} />
        <Route path="EditProduct/:id" element={<EditProduct />} />
      </Route>
      <Route path="/" element={<Roote />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
