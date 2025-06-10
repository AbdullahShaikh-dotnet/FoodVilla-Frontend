const RestaurantCard = (prop) => {
  const { restaurantInfo } = prop;
  const { name, avgRating, cuisines, costForTwo, cloudinaryImageId, sla } =
    restaurantInfo;
  console.log(restaurantInfo);
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-image"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt={name}
      />
      <div className="restaurant-info">
        <div className="restaurant-name-rating">
          <h3 className="restaurant-name">{name}</h3>
          <div className="rating">⭐ {avgRating}</div>
        </div>
        <p className="restaurant-cuisines">{cuisines.join(", ")}</p>
        <div className="restaurant-costfortwo-deliverytime">
          <p className="restaurant-costfortwo">
            <b>{costForTwo}</b>
          </p>
          <p className="restaurant-deliverytime">
            {sla?.deliveryTime} minutes
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
