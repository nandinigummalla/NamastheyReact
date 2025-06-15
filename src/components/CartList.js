import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { clearCart } from "../utils/cartSlice";

const CartList = () => {
  const addedRests = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const ClearCartFn = () => {
    dispatch(clearCart());
  };
  return (
    <div className="m-auto mt-5 p-5 w-250 shadow-xl rounded-xl">
      <h1 className="font-bold m-5 text-center">Cart</h1>
      {addedRests.length === 0 && (
        <div className="text-center">
          <h2 className="font-bold">Your cart is empty</h2>
          <h3>You can go to home page to view more restaurants</h3>
          <Link to="/">
            <button className="m-5 p-5 rounded-xl bg-blue-400 cursor-pointer">
              See Restaurants Near You
            </button>
          </Link>
        </div>
      )}
      {addedRests?.map((res) => (
        <div className="text-center" key={res?.id}>
          <button
            onClick={ClearCartFn}
            className="m-5 p-2 rounded-xl bg-red-300 cursor-pointer"
          >
            Clear Cart
          </button>
          <h2>
            {res.name} - ₹
            {res?.price
              ? Math.ceil(res?.price / 100)
              : Math.ceil(res?.defaultPrice / 100)}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default CartList;
