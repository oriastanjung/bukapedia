import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../config/store/reducer/ProductSlice/ProductSlice";
import { handleedit } from "../../component/molecules/Table/useTable";

export const UseTechPage = () => {
  const productAll = useSelector((state) => state.products.products);
  const product = productAll.filter((item) => item.category == "electronics");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch, handleedit]);
  return { product };
};
