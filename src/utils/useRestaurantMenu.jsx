import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API_ENDPOINT } from "./constant";

const useRestaurantMenu = (id) => {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    getDate(id);
  }, []);

  const getDate = async () => {
    const data = await fetch(RESTAURANT_MENU_API_ENDPOINT + id);
    const jsonData = await data.json();
    setMenuData(jsonData.data);
  };

  return menuData;
};

export default useRestaurantMenu;