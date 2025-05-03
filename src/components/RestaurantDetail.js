import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router";

const RestaurantDetail = () => {
  const { id } = useParams();
  const [orderData, setOrderData] = useState();
  const fetchData = async () => {
    const resp = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=14.74640&lng=78.54480&restaurantId=${id}`
    );

    const jsonData = await resp?.json();
    setOrderData(jsonData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (orderData === null) {
    return <ShimmerUI />;
  }

  return (
    <div className="restDetail">
      <h1>{orderData?.data?.cards[2]?.card?.card?.info?.name} </h1>
      <div className="restDesc">
        <h3>
          {orderData?.data?.cards[2]?.card?.card?.info?.avgRatingString} Rating
          - {orderData?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}
        </h3>
        <h3>{orderData?.data?.cards[2]?.card?.card?.info?.locality}</h3>
        <h3>{orderData?.data?.cards[2]?.card?.card?.info?.sla?.slaString}</h3>
      </div>
      <div className="order">
        {orderData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
          (itemArr, id) => {
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
          }
        )}
      </div>
    </div>
  );
};
export default RestaurantDetail;
