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
    <div className="restDetail">
      <h1>{orderDetail?.name} </h1>
      <div className="restDesc">
        <h3>
          {orderDetail?.avgRatingString} Rating -{" "}
          {orderDetail?.costForTwoMessage}
        </h3>
        <h3>{orderDetail?.locality}</h3>
        <h3>{orderDetail?.sla?.slaString}</h3>
      </div>
      <div className="order">
        {cardDetail?.cards?.map((itemArr, id) => {
          return (
            <div key={id}>
              <h3>{itemArr?.card?.card?.title}</h3>

              {itemArr?.card?.card?.itemCards?.map((itm, i) => (
                <div key={i} className="orderdesc">
                  <h5>{itm?.card?.info?.name}</h5>
                  <span>Rs.{itm?.card?.info?.price / 100}</span>
                  <i className="desc">{itm?.card?.info?.description}</i>
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
