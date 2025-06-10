import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurants, setRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559`
      );
      const json = await response.json();

      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setRestaurant(restaurants);
      setFilteredRestaurant(restaurants);

    } catch (error) {
      console.log("Error fetching restaurant data:", error);
    }
  };

  const filterTopRatedRestaurants = (minRating = 4.6) => {
    const filteredList = filteredRestaurants.filter(
      (restaurant) => restaurant.info.avgRating >= minRating
    );
    setFilteredRestaurant(filteredList);
  };

  const searchRestaurants = (searchWord) => {
    const searchFilteredRestaurants = restaurants.filter((res) =>
      res?.info.name.toLowerCase().includes(searchWord.toLowerCase())
    );
    setFilteredRestaurant(searchFilteredRestaurants);
  };

  return filteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="btn"
          onClick={() => searchRestaurants(searchText)}
        >
          Search
        </button>
        <button className="btn" onClick={() => filterTopRatedRestaurants()}>
          Top Rated ⭐
        </button>
      </div>
      <div className="body">
        {filteredRestaurants.map((restaurant) =>
            renderRestaurantCard(restaurant)
        )}
      </div>
    </div>
  );
};

const renderRestaurantCard = (restaurant) => {
  return (
    <RestaurantCard
      key={restaurant?.info?.id}
      restaurantInfo={restaurant?.info}
    />
  );
};

export default Body;
