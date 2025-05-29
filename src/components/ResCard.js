import { CDN_URL } from "../utils/constants";
// will get the props from parent folder as props

const ResCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;
  // optional chaining
  const { slaString } = resData?.info?.sla;
  return (
    <div className="border-1 p-2 w-70 h-100 text-center shadow-xl rounded-xl ">
      <img
        className="w-70 h-50 rounded-xl mb-5"
        src={CDN_URL + cloudinaryImageId}
      />
      <h4>{name}</h4>
      <h6>Rating: {avgRating}</h6>
      <h6>{cuisines.join(", ")}</h6>
      <h6>{costForTwo}</h6>
      <h6>Delivery in {slaString}</h6>
    </div>
  );
};

export const WithDiscountResCard = (ResCard) => {
  return (props) => {
    const { header, subHeader } =
      props?.resData?.info?.aggregatedDiscountInfoV3;
    return (
      <div>
        <span className="absolute border-l-amber-50 mt-40 p-5 text-2xl font-bold text-white ml-2">
          {header + " " + subHeader}
        </span>
        <ResCard {...props} />
      </div>
    );
  };
};

export default ResCard;
