import React, { useState } from "react";
import { Shopping } from "../../assets/icon";
import { Button } from "../../component/atoms";
import { CartItems } from "../../component/molecules";
import Sum from "./Sum";
import { useCart } from "./useCart";
function Cart() {
  const { handleCheckout, cart } = useCart();

  return (
    <div className="mx-6 mt-10">
      <div className="flex items-center">
        <img src={Shopping} alt="cart" className="w-20" />
        <h1 className="ml-2 font-bold  text-2xl">My Cart</h1>
      </div>
      <div className="h-2 bg-black rounded-full drop-shadow-xl "></div>
      <div className="flex w-full mt-3 font-bold capitalize">
        <div className="w-8/12">nama product</div>
        <div className="w-1/12">Price</div>
        <div className="w-2/12">Quantity</div>
        <div className="w-1/12">Total</div>
      </div>
      <div className="h-1 bg-black rounded-full"></div>
      {cart &&
        cart.map((item) => {
          return <CartItems data={item} />;
        })}

      {cart && <Sum data={cart} />}
      <div className="flex justify-end">
        <Button name={"Checkout"} onClick={handleCheckout} />
      </div>
    </div>
  );
}

export default Cart;
