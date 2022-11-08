import { Route, Router, Routes } from "react-router-dom";
import { Navbar } from "./component/molecules";
import { Home, Cart, Login } from "./pages";
import { PrivateRoute, UnprivateRoute } from "./utils/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <div className="pt-16 ">
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<UnprivateRoute/>}>
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
