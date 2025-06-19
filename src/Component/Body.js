import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import Offline from "./Offline";
import useRestaurant from "../utils/useRestaurant";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const restaurants = useRestaurant();
  let filteredRestaurants = restaurants;

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return <Offline />;
  }

  const filterTopRatedRestaurants = (minRating = 4.6) => {
    const filteredList = filteredRestaurants?.filter(
      (restaurant) => restaurant.info.avgRating >= minRating
    );
    filteredRestaurants = filteredList;
  };

  const searchRestaurants = (searchWord) => {
    const searchFilteredRestaurants = restaurants?.filter((res) =>
      res?.info.name.toLowerCase().includes(searchWord.toLowerCase())
    );
    filteredRestaurants = searchFilteredRestaurants;
  };

  return filteredRestaurants?.length === 0 ? (
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
        <button className="btn" onClick={() => searchRestaurants(searchText)}>
          Search
        </button>
        <button className="btn" onClick={() => filterTopRatedRestaurants()}>
          Top Rated ⭐
        </button>
      </div>
      <div className="body">
        {filteredRestaurants?.map((restaurant) =>
          renderRestaurantCard(restaurant)
        )}
      </div>
    </div>
  );
};

const renderRestaurantCard = (restaurant) => {
  return (
    <Link
      className="restaurant-card-link"
      to={`restaurant/${restaurant?.info?.id}`}
      key={restaurant?.info?.id}
    >
      <RestaurantCard restaurantInfo={restaurant?.info} />
    </Link>
  );
};

export default Body;
