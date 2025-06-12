import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);

  const fetchRestaurantDetailsData = async () => {
    const restaurantId = 296051;
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9716&lng=77.5946&restaurantId=${restaurantId}`
    );

    const json = await data.json();
    console.log(json);
    setRestaurantDetails(json.data);
  };

  useEffect(() => {
    fetchRestaurantDetailsData();
  }, []);

  if (!restaurantDetails) return <Shimmer />;

  const { name, cloudinaryImageId } =
    restaurantDetails?.cards[2]?.card?.card?.info;

  console.log(
    restaurantDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      .card.card.itemCards
  );

  return (
    <div className="restaurant-menu-container">
      <div className="restaurant-menu-header">
        <div className="restaurant-menu-info">
          <h1 className="restaurant-menu-name">{name}</h1>
          <img
            className="restaurant-menu-image"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
            alt={name}
          />
        </div>
      </div>

      <div className="restaurant-menu-content">
        <h2 className="menu-section-title">Menu</h2>
        <div className="menu-items-list">
          {restaurantDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card.itemCards.map(
            (item) => {
              let Info = item.card.info;
              return (
                <div className="menu-item" key={Info.id}>
                  <div className="menu-item-content">
                    <div className="menu-item-info">
                      <div className="menu-item-header">
                        <h3 className="menu-item-name">{Info.name}</h3>
                        <p className="menu-item-price">
                          ₹ {Info.price / 100 || Info.defaultPrice / 100}
                        </p>
                      </div>
                      {Info.description && (
                        <div className="menu-item-description-container">
                          <p className="menu-item-description">
                            {Info.description}
                          </p>
                          <img
                            width={24}
                            height={24}
                            src={`https://packagingguruji.com/wp-content/uploads/2022/09/${
                              Info.isVeg
                                ? "Veg-Logo-2.png"
                                : "Old-Non-Veg-Logo.png"
                            }`}
                            alt={Info.isVeg ? "Vegetarian" : "Non-Vegetarian"}
                          />
                        </div>
                      )}
                    </div>
                    {Info.imageId && (
                      <div className="menu-item-image-container">
                        <img
                          className="menu-item-image"
                          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${Info.imageId}`}
                          alt={Info.name}
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
