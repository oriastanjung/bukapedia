import React from "react";
import { useNavbar } from "./useNavbar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isfalse, isLogin, handleLogout, isAdmin } = useNavbar();

  return (
    <div
      className={`z-999 flex gap-x-10 p-5 w-full fixed text-black font-medium  bg-navbarcol ${
        isfalse ? "opacity-90 shadow-lg " : "opacity-100"
      }`}
    >
      <h1 className="font-bold">Bukapedia</h1>
      <p className="cursor-pointer">
        <Link to={"/"}>Home</Link>
      </p>
      {isLogin ? (
        <>
          <p className="cursor-pointer">
           {isAdmin ?  <Link to={"/rekap-penjualan"}>Rekap Penjualan</Link> :  <Link to={"/cart"}>Cart</Link>}
          </p>
          <p onClick={handleLogout} className="cursor-pointer">Logout</p>
        </>
      ) : (
        <p>
          <Link to={"/login"}>Login</Link>
        </p>
      )}
    </div>
  );
};

export default Navbar;
