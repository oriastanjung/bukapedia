import React, { useState } from "react";
import { CartItems } from "../../component/molecules";
import { useCart } from "./useCart";
function Cart() {
  const { data, total } = useCart();

  return (
    <div className="container mt-4 w-100 mx-auto">
      <div
        className="flex items-center gap-2 py-4"
        style={{ borderBottom: "2px solid gray" }}
      >
        <img
          src="https://img.icons8.com/ios-glyphs/30/null/shopping-cart--v1.png"
          alt=""
          className="w-10"
        />
        <h1 className="text-3xl font-semibold">My Cart</h1>
      </div>
      <div>
        <div className="flex gap-5 justify-end mt-4">
          <p className="text-xl">Price</p>
          <p className="text-xl">Quantity</p>
          <p className="text-xl">Total</p>
        </div>
        <div className="flex flex-col gap-5  ">
          {data &&
            data.map((item, idx) => (
              <CartItems
                key={idx}
                id={item.productId}
                quantity={item.quantity}
              />
            ))}
        </div>
        <div className="flex justify-around align-center my-4">
          <p className="text-3xl font-semibold mobile:text-xl">Total :</p>
          <p className="text-3xl font-semibold mobile:text-xl">{total}</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
