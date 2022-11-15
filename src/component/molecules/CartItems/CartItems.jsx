import React, { useEffect } from "react";
import { useCartItems } from "./useCartItems";
function CartItems(props) {
  const { value, getQuantity, onChangeHandler, data } = useCartItems({
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
      {data && (
        <>
          <div className="flex gap-3 items-center">
            <img className="w-20" src={data.image} alt="" />
            <h3 className="w-100 nol:text-2xl mobile:text-base font-medium">
              {console.log("data >> ", data)}
              {data.title}
            </h3>
          </div>
          <div className="flex justify-end gap-10 items-center mobile:w-50">
            <p>${data.price}</p>
            <div className="outline outline-1">
              <input
                type="number"
                min={0}
                value={value}
                className={"w-10 pl-2"}
                onChange={onChangeHandler}
              />
            </div>
            <p className="">${data.price * value}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItems;
