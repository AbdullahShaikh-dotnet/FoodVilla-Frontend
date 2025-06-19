import { useEffect, useState } from "react";
import { RESTAURANT_LIST_API_ENDPOINT } from "../utils/constant";

const useRestaurant = () => {
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    try {
      const response = await fetch(RESTAURANT_LIST_API_ENDPOINT);
      const json = await response.json();

      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setRestaurant(restaurants);

    } catch (error) {
      console.log("Error fetching restaurant data:", error);
    }
  };

  return restaurant;
};

export default useRestaurant;
