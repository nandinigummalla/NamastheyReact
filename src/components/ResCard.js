import { CDN_URL } from "../utils/constants";
// will get the props from parent folder as props

const ResCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;
  const { slaString } = resData?.info?.sla;
  return (
    <div className="res-card">
      <img className="resimg" src={CDN_URL + cloudinaryImageId} />
      <h4>{name}</h4>
      <h6>Rating: {avgRating}</h6>
      <h6>{cuisines.join()}</h6>
      <h6>{costForTwo}</h6>
      <h6>Delivery in {slaString}</h6>
    </div>
  );
};

export default ResCard;
