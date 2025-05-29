import { REST_ORDER_URL } from "../utils/constants";

const OrderDetails = ({ orderData }) => {
  return (
    <div className="grid m-5 p-1">
      <div className="flex justify-between">
        <div className="grid">
          <span>{orderData?.name}</span>
          <span>
            ₹{" "}
            {orderData?.price
              ? Math.ceil(orderData?.price / 100)
              : Math.ceil(orderData?.defaultPrice / 100)}
          </span>
          <span>
            {orderData?.ratings?.aggregatedRating?.rating && "✪"}{" "}
            {orderData?.ratings?.aggregatedRating?.rating}
          </span>
          <span className="mb-2 font-light">{orderData?.description}</span>
        </div>
        <div className="flex justify-between mb-2">
          <img className="size-20" src={REST_ORDER_URL + orderData?.imageId} />
          <button className="absolute rounded-sm bg-black text-white mx-auto my-15 cursor-pointer">
            Add +
          </button>
        </div>
      </div>
      <span className="border-b-1"></span>
    </div>
  );
};
export default OrderDetails;
