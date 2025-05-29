import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router";
import useRestMenu from "../utils/useRestMenu";
import OrdersList from "./OrdersList";
import { useState } from "react";

const RestaurantDetail = () => {
  const { id } = useParams();
  const orderData = useRestMenu({ id });
  const [expandIndex, setExpandIndex] = useState(null);

  if (orderData === null) {
    return <ShimmerUI />;
  }

  const orderDetail = orderData?.data?.cards[2]?.card?.card?.info;
  const cardDishDetail =
    orderData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const OrderCards = cardDishDetail.filter(
    (dish) =>
      dish?.card?.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  return (
    <div className="w-6/12 m-auto">
      <h1 className="m-5 p-2 font-bold text-3xl">{orderDetail?.name} </h1>
      <div className="m-5 p-5 border rounded-lg shadow-xl">
        <h3 className="font-bold">
          {orderDetail?.avgRatingString} ( {orderDetail?.totalRatingsString} ) •{" "}
          {orderDetail?.costForTwoMessage}
        </h3>
        <h3>{orderDetail?.cuisines}</h3>

        <h3>{orderDetail?.locality}</h3>
        <h3>{orderDetail?.sla?.slaString}</h3>
      </div>
      <div>
        {OrderCards?.map((order, index) => (
          // controlled component

          <OrdersList
            key={order?.card?.card?.categoryId}
            data={order?.card?.card}
            expand={index === expandIndex && true}
            setExpandIndex={() =>
              setExpandIndex(index === expandIndex ? -1 : index)
            }
          />
        ))}
      </div>
    </div>
  );
};
export default RestaurantDetail;
