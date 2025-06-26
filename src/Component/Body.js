import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import Offline from "./Offline";
import useRestaurant from "../utils/useRestaurant";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const restaurants = useRestaurant();

  useEffect(() => {
    setFilteredRestaurants(restaurants);
  }, [restaurants]);

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return <Offline />;
  }

  const filterTopRatedRestaurants = (minRating = 4.6) => {
    const filteredList = restaurants?.filter(
      (restaurant) => restaurant?.info?.avgRating >= minRating
    );
    setFilteredRestaurants(filteredList);
  };

  const searchRestaurants = (searchWord) => {
    const searchFilteredRestaurants = restaurants?.filter((res) =>
      res?.info.name.toLowerCase().includes(searchWord.toLowerCase())
    );
    setFilteredRestaurants(searchFilteredRestaurants);
  };

  if (restaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="container mx-auto px-40 py-8">
      <div className="mb-8 p-4 bg-white rounded-lg shadow flex items-center justify-between">
        <div className="flex-grow">
          <input
            type="text"
            placeholder="Search for restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
          />
        </div>
        <button
          className="bg-orange-500 text-white ml-4 px-6 py-2 rounded-md hover:bg-orange-600 transition-colors duration-300"
          onClick={() => searchRestaurants(searchText)}
        >
          Search
        </button>
        
        <button
          className="ml-4 bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 transition-colors duration-300"
          onClick={() => filterTopRatedRestaurants()}
        >
          Top Rated ⭐
        </button>
      </div>

      {filteredRestaurants?.length === 0 ? (
        <p className="text-center text-gray-500">No restaurants found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredRestaurants?.map((restaurant) => (
            <Link
              to={`restaurant/${restaurant?.info?.id}`}
              key={restaurant?.info?.id}
              className="transform hover:scale-105 transition-transform duration-300"
            >
              <RestaurantCard key={restaurant?.info?.id} restaurantInfo={restaurant?.info} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
