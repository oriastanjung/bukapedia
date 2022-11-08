import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../config/store/reducer/userSlice/userSlice";

const useNavbar = () => {
  const dispatch = useDispatch()
  const [isfalse, setIsfalse] = useState(false);
  const isLogin = localStorage.getItem('token') ? true : false;

  const handleNavbar = () => {
    if (window.scrollY >= 10) {
      setIsfalse(true);
    } else {
      setIsfalse(false);
    }
  };
  window.addEventListener("scroll", handleNavbar);

  const handleLogout = () => {
    dispatch(logout())
    // window.location.reload()
  }
  


  return { isfalse, isLogin , handleLogout};
};

export { useNavbar };
