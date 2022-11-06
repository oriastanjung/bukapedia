import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countTotalPrice } from "../../config/store/reducer/cartSlice/cartSlice";
function useCart() {
  const dispatch = useDispatch();
  const { cart: dummyData, total } = useSelector((state) => state.cart);

  return { dummyData, total };
}

export { useCart };
