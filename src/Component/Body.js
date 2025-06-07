import RestaurantCard from "./RestaurantCard";
import { ResData } from "../utils/mockdata";

const Body = () => (
    <div className="body">
        <div className="search">
            <input type="text" placeholder="Search" />
        </div>
            {ResData.restaurants.map((restaurant) => (
                restaurant.menu.map((item, index) => (
                    <RestaurantCard key={restaurant.id + index} 
                    restaurantName={restaurant.name} 
                    rating={restaurant.rating} 
                    cuisines={restaurant.cuisine} 
                    dishName={item.name}
                    price={item.price}
                    imageUrl={item.image_url} />
                ))
            ))} 
    </div>
)


export default Body;