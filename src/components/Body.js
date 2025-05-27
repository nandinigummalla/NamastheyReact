import { useEffect, useState } from "react";
import ResCard from "./ResCard";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router";
import useRestData from "../utils/useRestData";
import useOnlineStatus from "../utils/useOnineStatus";
// passing props to component is passing arguments to function
const Body = () => {
  const restaurantData = useRestData();
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  const [resData, setResData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    setFilteredRestaurants(restaurantData);
    setResData(restaurantData);
  }, [restaurantData]);

  const getTopRatedRestaurants = () => {
    setFilteredRestaurants(resData?.filter((res) => res?.info?.avgRating > 4));
  };
  const searchRest = () => {
    setFilteredRestaurants(
      resData.filter((rest) =>
        rest?.info?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase())
      )
    );
  };
  const resetFilter = () => {
    setFilteredRestaurants(resData);
  };

  if (!onlineStatus) {
    return (
      <div>
        <h1>OOPS your internet is not working</h1>
      </div>
    );
  }

  // need to add scroll functionality calling the belowapi
  // const getScrollRestData = async () => {
  //   const req = {
  //     lat: 14.7500778,
  //     lng: 78.5460208,
  //     nextOffset: "CJhlELQ4KICIwtbCkPKlYzCnEzgD",
  //     widgetOffset: {
  //       NewListingView_category_bar_chicletranking_TwoRows: "",
  //       NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
  //       Restaurant_Group_WebView_SEO_PB_Theme: "",
  //       collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "9",
  //       inlineFacetFilter: "",
  //       restaurantCountWidget: "",
  //     },
  //     filters: {},
  //     seoParams: {
  //       seoUrl: "https://www.swiggy.com/restaurants",
  //       pageType: "FOOD_HOMEPAGE",
  //       apiName: "FoodHomePage",
  //       businessLine: "FOOD",
  //     },
  //     page_type: "DESKTOP_WEB_LISTING",
  //     _csrf: "k5VFbQTIJivb-h0DcKA21874CqGeYq2h3Sw6ZIm8",
  //   };
  //   const resp = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/update",
  //     req
  //   );
  //   const json = resp.json();
  //   console.log(json);
  // };

  // conditional Rendering - rendering basedon the conditions
  return filteredRestaurants ? (
    <div className="m-5">
      <div className="flex justify-between">
        <div className="flex">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search restaurants"
            className="border-2"
          />
          <button
            className="m-2 p-2 rounded-xl bg-green-300"
            onClick={searchRest}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="p-2 m-2 rounded-2xl bg-sky-300 cursor-pointer"
            onClick={getTopRatedRestaurants}
          >
            Top Rated Restaurants
          </button>
          <button
            className="bg-red-100 rounded-2xl p-2 cursor-pointer"
            onClick={resetFilter}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants?.map((rest) => (
          <Link
            className="m-5 hover:bg-gray-200 hover:border-1 hover:rounded-2xl"
            key={rest?.info?.id}
            to={`/restaurant/${rest?.info?.id}`}
          >
            <ResCard resData={rest} />
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <ShimmerUI />
  );
};
export default Body;
