import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  resetCart,
  resetCheckout,
  addToCheckout,
} from "../../config/store/reducer/cartSlice/cartSlice";
import Swal from "sweetalert2";
function useCart() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  const handleCheckout = () => {
    Swal.fire({
      title: "Checkout Sekarang ?",
      showDenyButton: true,
      confirmButtonText: "Chekout",
      denyButtonText: `Batalkan`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Terimakasih Telah Membeli!", "", "success");
        // dispatch(resetCheckout());
        dispatch(addToCheckout());
        dispatch(resetCart());
      }
    });
  };

  return { cart, handleCheckout };
}

export { useCart };
