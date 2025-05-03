import { useEffect, useState } from "react";
import ResCard from "./ResCard";
import ShimmerUI from "./ShimmerUI";
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
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let json = await resp.json();
    let restResp =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setFilteredRestaurants(restResp);
    setResData(restResp);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
          <ResCard key={rest?.info?.id} resData={rest} />
        ))}
      </div>
    </div>
  ) : (
    <ShimmerUI />
  );
};
export default Body;
