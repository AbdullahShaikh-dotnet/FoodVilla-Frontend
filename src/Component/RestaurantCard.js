const RestaurantCard = ({restaurantName, rating, cuisines, dishName, price, imageUrl}) => (
    <div className="restaurant-card">
        <img className="restaurant-image" src={imageUrl} alt={dishName} />
        <h5>Restaurant Name : {restaurantName}</h5>
        <h5>Rating : {rating}</h5>
        <h5>Cuisines : {cuisines}</h5>
        <h5>Dish Name : {dishName}</h5>
        <h5>Price : {price}</h5>
    </div>
)

export default RestaurantCard;