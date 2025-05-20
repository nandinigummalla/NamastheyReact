import { useState, useEffect } from "react";
import { REST_URL } from "./constants";

const useRestData = () => {
  const [resp, setResp] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let resp = await fetch(REST_URL);
    let json = await resp?.json();
    let restResp =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setResp(restResp);
  };

  return resp;
};

export default useRestData;
