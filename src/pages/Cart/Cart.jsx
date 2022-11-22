import React, { useState } from "react";
import { Shopping } from "../../assets/icon";
import { Button } from "../../component/atoms";
import { CartItems } from "../../component/molecules";
import Sum from "./Sum";
import { useCart } from "./useCart";
function Cart() {
  const {dataStorageChart} = useCart()
  const product = localStorage.getItem('local')
  
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
      {JSON.parse(product)?.map((item, i)=> {
        return(
          <CartItems data={item} idbarang={item.id}/>
        )
      })}
      {dataStorageChart && <Sum data={dataStorageChart} />}
      <div className="flex justify-end">
        <Button name={"Checkout"} />
      </div>
    </div>
  );
}

export default Cart;