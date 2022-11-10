import React from "react";
import {Route,  Routes } from "react-router-dom";
import { Navbar } from "./component/molecules";
import { Home,  Login,  Cart } from "./pages";
import {ProtectRoute} from './utils/PrivateRoute/PrivateRoute'
function App() {

  const {PrivateRouterFalseLogin, PrivateRouterTrueLogin} = ProtectRoute()
  return (
    <div>
      <Navbar />
      <div className="pt-16 ">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route element={<PrivateRouterTrueLogin />}>
            <Route path="/login" element={<Login/>}/>
          </Route>

          <Route element={<PrivateRouterFalseLogin />}>
            <Route path="/cart" element={<Cart />} />
          </Route>

        </Routes>
      </div>
    </div>
  );
}

export default App;
