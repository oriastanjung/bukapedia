import React, { useState } from "react";
import { dataPenjualan } from "./useTable";
import { useDispatch, useSelector } from "react-redux";

const TabelRekappenjualan = () => {
  let Pendapatan = 0;
  const { checkout } = useSelector((state) => state.cart);
  console.log("checkout >>> ", checkout);
  return (
    <>
      <table className="w-full ">
        <thead className="bo-rounded-2xl text-left bg-black text-white h-14 rounded-xl ">
          <tr>
            <th className="w-8/12 pl-4">Product</th>
            <th className="w-1/12">Harga</th>
            <th className="w-1/12">Terjual</th>
            <th className="w-2/12">Pendapatan</th>
          </tr>
        </thead>
        {checkout?.map((item, i) => {
          Pendapatan = Pendapatan + item.price * item.sold;
          return (
            <>
              <tbody className="align-top h-10  even:bg-green-100" key={item.i}>
                <tr className="text-left ">
                  <th className="w-8/12 pl-4">{item.title}</th>
                  <th className="w-1/12">{item.price}</th>
                  <th className="w-1/12">{item.sold}</th>
                  <th className="w-2/12">{item.price * item.sold}</th>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
      <div className="flex justify-end bg-green-100 text-black font-bold text-xl px-64 py-3 ">
        TOTAL PENDAPATAN {Pendapatan} $
      </div>
    </>
  );
};

export default TabelRekappenjualan;
