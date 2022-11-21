import React from "react";
import { useParams } from "react-router-dom";
import { Button, Input } from "../../component/atoms";
import DetailCard from "../../component/molecules/DetailCard/DetailCard";
import useDetail from "./useDetail";
function Detail() {
  const { id } = useParams();
  const { product, quantity, handleDecrement, handleIncrement, Addcart } = useDetail({
    id
  });
  return (
    <div className="flex justify-center items-center mt-[5%] mobile:mx-[4%] md:mx-0">
      <DetailCard>
        {product && (
          <>
            <div className="w-[100%] h-[100%] mr-4">
              <img src={product.image} alt="" />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-5xl mb-4 mobile:text-center md:text-left">
                {product.title}
              </h1>
              <h2 className="font-semibold text-4xl mb-3 mobile:text-center md:text-left">
                ${product.price}
              </h2>
              <div className="flex gap-3 mobile:items-center md:items-start mobile:flex-col md:flex-row ">
                <div className="flex flex-row gap-2">
                  <div
                    className=" cursor-pointer bg-amber-300 px-2 text-lg flex justify-center items-center"
                    onClick={handleDecrement}
                  >
                    -
                  </div>
                  <div className="outline outline-1">
                    <input
                      type="number"
                      className="w-10 h-10 text-center"
                      value={quantity}
                      min={0}
                      disabled
                    />
                  </div>
                  <div
                    className="cursor-pointer bg-amber-300 px-2 text-lg flex justify-center items-center"
                    onClick={handleIncrement}
                  >
                    {" "}
                    +{" "}
                  </div>
                </div>
                <div>
                  <Button name={"Add To Cart"} handleSubmit={Addcart} />
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-5 mobile:text-center md:text-left">
                <h3 className="text-3xl font-medium">Product Details</h3>
                <p className="text-xl font-thin w-[85%] mobile:text-center md:text-left mobile:w-[100%] md:w-[85%]">
                  {product.description}
                </p>
              </div>
            </div>
          </>
        )}
      </DetailCard>
    </div>
  );
}

export default Detail;
