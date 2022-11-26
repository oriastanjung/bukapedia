import React from "react";
import { Card } from "../../component/molecules";
import { UseTechPage } from "./useTechPage";

const TechPage = () => {
  const { product } = UseTechPage();
  return (
    <div className="mx-6">
      <h1 className="font-extrabold text-4xl my-5 ">Product</h1>
      <div className="flex gap-5 flex-wrap justify-center">
        {product?.map((item, i) => {
          return <Card key={i} data={item} />;
        })}
      </div>
    </div>
  );
};

export default TechPage;
