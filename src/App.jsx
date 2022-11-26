import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./component/molecules";
import {
  Home,
  Login,
  Cart,
  HomeAdmin,
  FaceData,
  RekapPenjualan,
} from "./pages";
import Detail from "./pages/Detail/Detail";
import MenPage from "./pages/MenPage/MenPage";
import JewelryPage from "./pages/JewelryPage/JewelryPage";
import TechPage from "./pages/TechPage/TechPage";
import TestCheckout from "./pages/TestCheckout/TestCheckout";
import { ProtectRoute } from "./utils/PrivateRoute/PrivateRoute";
function App() {
  const { PrivateRouterFalseLogin, PrivateRouterTrueLogin, isAdmin } =
    ProtectRoute();
  return (
    <div>
      <Navbar />
      <div className="pt-16 ">
        <Routes>
          <Route path="/" element={isAdmin ? <HomeAdmin /> : <Home />} />
          <Route path="/men" element={<MenPage />} />
          <Route path="/jewelry" element={<JewelryPage />} />
          <Route path="/electronics" element={<TechPage />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/fake" element={<FaceData />} />
          <Route path="/testCheckout" element={<TestCheckout />} />

          <Route element={<PrivateRouterTrueLogin />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="/homeadmin" element={<HomeAdmin />} />

          <Route element={<PrivateRouterFalseLogin />}>
            {isAdmin ? (
              <Route path="/rekap-penjualan" element={<RekapPenjualan />} />
            ) : (
              <Route path="/cart" element={<Cart />} />
            )}
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
