import React from "react";

function DetailCard(props) {
  return (
    <div className="flex flex-row border-2 border-gray-500/50 p-5 w-[1000px] rounded-xl shadow-xl gap-3 mobile:flex-wrap miniTablet:flex-wrap md:flex-nowrap">
      {props.children}
    </div>
  );
}

export default DetailCard;
