import RestaurantCard from "./RestaurantCard";
import { ResData } from "../utils/mockdata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurants, setRestaurant] = useState(ResData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchRestaurantData();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const fetchRestaurantData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559"
      );
      const json = await response.json();
      console.log(
        json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );
    } catch (error) {
      console.log("Error fetching restaurant data:", error);
    }
  };

  const filterTopRatedRestaurants = (minRating = 4.5) => {
    const filteredList = ResData.filter(
      (restaurant) => restaurant.rating >= minRating
    );
    setRestaurant(filteredList);
  };

  return isLoading ? (
    <Shimmer />
  ) : (
    <div>
      <div className="search">
        <input type="text" placeholder="Search" />
        <button className="btn" onClick={() => filterTopRatedRestaurants()}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="body">
        {restaurants.map((restaurant) =>
          restaurant.menu.map((item, index) =>
            renderRestaurantCard(restaurant, item, index)
          )
        )}
      </div>
    </div>
  );
};

const renderRestaurantCard = (restaurant, item, index) => {
  return (
    <RestaurantCard
      key={restaurant.id + index}
      restaurantName={restaurant.name}
      rating={restaurant.rating}
      cuisines={restaurant.cuisine}
      dishName={item.name}
      price={item.price}
      imageUrl={item.image_url}
    />
  );
};

export default Body;
