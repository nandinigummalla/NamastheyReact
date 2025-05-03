import { useEffect, useState } from "react";
import ResCard from "./ResCard";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router";
// passing props to component is passing arguments to function
const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState();
  const [resData, setResData] = useState();
  const [searchTerm, setSearchTerm] = useState("");

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

  const fetchData = async () => {
    let resp = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let json = await resp?.json();
    let restResp =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setFilteredRestaurants(restResp);
    setResData(restResp);
  };

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

  useEffect(() => {
    fetchData();
  }, []);

  // conditional Rendering - rendering basedon the conditions
  return filteredRestaurants ? (
    <div className="body">
      <div className="datafilter">
        <div className="search">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search restaurants"
          />
          <button onClick={searchRest}>Search</button>
        </div>
        <div className="filter">
          <button onClick={getTopRatedRestaurants}>
            Top Rated Restaurants
          </button>
          <button onClick={resetFilter}>Reset</button>
        </div>
      </div>
      <div className="res-container">
        {filteredRestaurants?.map((rest) => (
          <Link
            className="resLin"
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
