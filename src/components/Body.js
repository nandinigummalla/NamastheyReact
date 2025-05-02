import { useState } from "react";
import resArray from "../utils/mockData";
import ResCard from "./ResCard";
// passing props to component is passing arguments to function
const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState(resArray);
  const [searchTerm, setSearchTerm] = useState("");
  const getTopRatedRestaurants = () => {
    setFilteredRestaurants(
      filteredRestaurants.filter((res) => res?.info.avgRating > 4)
    );
  };
  const searchRest = () => {
    setFilteredRestaurants(
      filteredRestaurants.filter((rest) =>
        rest?.info?.name?.toLowerCase()?.includes(searchTerm.toLowerCase())
      )
    );
  };
  const resetFilter = () => {
    setFilteredRestaurants(resArray);
  };
  return (
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
  );
};
export default Body;
