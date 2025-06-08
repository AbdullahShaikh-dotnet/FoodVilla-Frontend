import RestaurantCard from "./RestaurantCard";
import { ResData } from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
    
const [restaurant, setrestaurant] = useState(ResData);

    
    return (
  <div className="body">
    <div className="search">
      <input type="text" placeholder="Search" />
      <button
        className="btn"
        onClick={() => {
          const FilteredList = ResData.filter((x) => x.rating > 4.5);
          setrestaurant(FilteredList);
        }}
      >
        top Rated Restaurant
      </button>
    </div>
    {restaurant.map((res) =>
      res.menu.map((item, index) => (
        <RestaurantCard
          key={res.id + index}
          restaurantName={res.name}
          rating={res.rating}
          cuisines={res.cuisine}
          dishName={item.name}
          price={item.price}
          imageUrl={item.image_url}
        />
      ))
    )}
  </div>
)};

export default Body;
