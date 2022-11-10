import React from "react";
import Button from "../../atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import { useCard } from "./useCard";

const Card = ({ data }) => {
  const navigation = useNavigate();
  const { id, title, image, description } = data;
  const { descriprions, titles } = useCard(description, title);
  return (
    <div className="bg-white shadow-2xl rounded-xl nol:w-[100%] mobile:w-[70%] miniTablet:w-[45%] sm:w-[40%] md:w-[30%] lg:w-[19%] pb-4">
      <div className="flex justify-center">
        <img
          src={image}
          alt="product"
          className=" h-56 object-cover object-center rounded-t-xl"
        />
      </div>
      <div className="text-center font-semibold text-xl py-5">{titles}</div>
      <div className="px-5">
        <div> {descriprions}</div>
        <div className="justify-end flex mr-5 max-h-maxh-full ">
          <Button name={"Detail"} onClick={() => navigation(`/detail/${id}`)} />
        </div>
      </div>
    </div>
  );
};

export default Card;
