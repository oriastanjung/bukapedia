import { Route, Routes } from "react-router-dom";
import { Navbar } from "./component/molecules";
import { Home, Cart } from "./pages";

function App() {
  return (
    <div>
      <Navbar />
      <div className="pt-16 px-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
