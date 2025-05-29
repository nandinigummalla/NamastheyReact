import { useState } from "react";
import OrderDetails from "./OrderDetails";

// controlled component
const OrdersList = ({ data, expand, setExpandIndex }) => {
  const handleClick = () => {
    setExpandIndex();
    // accordianBool ? setAccordianBool(false) : setAccordianBool(true);
  };
  return (
    <div>
      <div className="m-5 p-5 shadow-xl rounded-xl ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold">
            {data?.title} ( {data?.itemCards.length} )
          </span>
          <span className="font-bold">🢛</span>
        </div>
        {expand && (
          <div>
            {data?.itemCards?.map((order) => (
              <OrderDetails
                key={order?.card?.info?.id}
                orderData={order?.card?.info}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default OrdersList;
