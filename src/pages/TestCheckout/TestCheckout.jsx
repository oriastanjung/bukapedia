import React from "react";
// import { dataPenjualan } from "./useTable";
import { useDispatch, useSelector } from "react-redux";

function TestCheckout() {
  const { checkout } = useSelector((state) => state.cart);
  console.log("checkout >>> ", checkout);
  return <div>TestCheckout</div>;
}

export default TestCheckout;
