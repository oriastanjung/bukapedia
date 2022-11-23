import React, { useState } from "react";
import { Button, Input } from "../../atoms";
import useCartItems from "./useCartItems";

const CartItems = ({ data }) => {
  const { Quantity, handleOnAddAmountCart, handleOnReduceAmountCart } =
    useCartItems(data);
  return (
    <div>
      <div className="flex w-full mt-3 font-bold capitalize items-center bg-slate-100">
        <div className="w-8/12 flex items-center gap-7">
          <div className="h-48 flex justify-center items-center">
            <img src={data.image} alt="imageproduct" className="w-32" />
          </div>
          <div>
            <p>{data.title}</p>
          </div>
        </div>
        <div className="w-1/12">{data.price}</div>
        <div className="w-2/12 pr-10 flex items-center gap-x-2">
          <Button
            name={"-"}
            onClick={handleOnReduceAmountCart}
            className="bg-white "
          />
          <Input className={""} value={data.amount} type="number" />
          <Button name={"+"} onClick={handleOnAddAmountCart} />
        </div>
        <div className="w-1/12">{data.price * data.amount} $</div>
      </div>
    </div>
  );
};

export default CartItems;
