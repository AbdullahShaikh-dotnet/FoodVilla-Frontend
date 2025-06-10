const RestaurantCard = (prop) => {
  let { restaurantName, rating, cuisines, dishName, price, imageUrl } = prop;
  return (
    <div className="restaurant-card">
      <img className="restaurant-image" src={imageUrl} alt={dishName} />
      <div className="restaurant-info">
        <h3>{restaurantName}</h3>
        <div className="rating">⭐ {rating}</div>
        <p>{cuisines}</p>
        <p><strong>{dishName}</strong></p>
        <p>₹{price}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
