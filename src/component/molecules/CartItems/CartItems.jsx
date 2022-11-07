import React, { useEffect } from "react";
import { useCartItems } from "./useCartItems";
function CartItems(props) {
  const { value, getQuantity, onChangeHandler } = useCartItems({
    id: props.id,
  });
  useEffect(() => {
    getQuantity(props.quantity);
  }, []);
  return (
    <div
      className="flex justify-between items-center p-2"
      style={{ borderBottom: "1px solid grey" }}
    >
      <div className="flex gap-3 items-center">
        <img
          className="w-20"
          src="https://post.healthline.com/wp-content/uploads/2022/01/hot-tea-steaming-steeping-732-549-feature-thumb.jpg"
          alt=""
        />
        <h3 className="w-100 nol:text-2xl mobile:text-base font-medium">
          {props.title}
        </h3>
      </div>
      <div className="flex justify-end gap-10 items-center mobile:w-50">
        <p>${props.price}</p>
        <div className="outline outline-1">
          <input
            type="number"
            min={0}
            value={value}
            className={"w-10 pl-2"}
            onChange={onChangeHandler}
          />
        </div>
        <p className="">${props.price * value}</p>
      </div>
    </div>
  );
}

export default CartItems;
