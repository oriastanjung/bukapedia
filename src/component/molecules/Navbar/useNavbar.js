import React, { useState } from "react";

const useNavbar = () => {
  const [isfalse, setIsfalse] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const handleNavbar = () => {
    if (window.scrollY >= 10) {
      setIsfalse(true);
    } else {
      setIsfalse(false);
    }
  };
  window.addEventListener("scroll", handleNavbar);

  return { isfalse, isLogin };
};

export { useNavbar };
