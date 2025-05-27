import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router";
import useRestMenu from "../utils/useRestMenu";

const RestaurantDetail = () => {
  const { id } = useParams();
  const orderData = useRestMenu({ id });

  if (orderData === null) {
    return <ShimmerUI />;
  }

  const orderDetail = orderData?.data?.cards[2]?.card?.card?.info;
  const cardDetail =
    orderData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
  return (
    <div className="m-10 p-5 border-1 shadow-xl w-fit text-center">
      <h1>{orderDetail?.name} </h1>
      <div className="border-2 m-5">
        <h3>
          {orderDetail?.avgRatingString} Rating -{" "}
          {orderDetail?.costForTwoMessage}
        </h3>
        <h3>{orderDetail?.locality}</h3>
        <h3>{orderDetail?.sla?.slaString}</h3>
      </div>
      <div>
        {cardDetail?.cards?.map((itemArr, id) => {
          return (
            <div key={id}>
              <h3 className="bg-blue-100 size-fit m-5 rounded-s shadow-xl">
                {itemArr?.card?.card?.title}
              </h3>

              {itemArr?.card?.card?.itemCards?.map((itm, i) => (
                <div key={i} className="border-1 m-5 p-3 shadow-lg ">
                  <h5>{itm?.card?.info?.name}</h5>
                  <span>Rs.{itm?.card?.info?.price / 100}</span>
                  <i className="flex justify-center">
                    {itm?.card?.info?.description}
                  </i>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default RestaurantDetail;
