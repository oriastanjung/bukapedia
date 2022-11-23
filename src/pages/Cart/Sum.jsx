import React, { useEffect, useState } from "react";

const Sum = ({ data }) => {
  let ttl = data.map((item) => {
    return Number(item.price * item.amount);
  });
  console.log("sum data props >>> ", ttl);
  let sum = 0;
  ttl.map((item) => (sum += item));
  const [total, setTotal] = useState(sum);

  useEffect(() => {
    setTotal(sum);
  }, [data]);
  return (
    <div className="flex justify-between font-bold text-xl px-32 py-16 ">
      <div>Jumlah</div>
      {total ? total : <h1>0</h1>} $
    </div>
  );
};

export default Sum;
