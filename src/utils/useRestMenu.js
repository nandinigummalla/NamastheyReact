import { useState, useEffect } from "react";
import { REST_MENU_URL } from "./constants";

const useRestMenu = ({ id }) => {
  const [menuData, setMenuData] = useState(null);
  const fetchData = async () => {
    const resp = await fetch(`${REST_MENU_URL}${id}`);

    const jsonData = await resp?.json();
    setMenuData(jsonData);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return menuData;
};

export default useRestMenu;
