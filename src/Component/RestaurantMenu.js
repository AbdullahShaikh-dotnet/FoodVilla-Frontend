import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Accordian from "./Accordian";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurantDetails = useRestaurantMenu(id);

  if (!restaurantDetails) return <Shimmer />;

  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    areaName,
  } = restaurantDetails?.cards[2]?.card?.card?.info;

  const menuItems =
    restaurantDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card?.itemCards;

  const filteredCategories =
    restaurantDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(filteredCategories);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="relative h-64 bg-black">
        <img
          className="absolute h-full w-full object-cover opacity-50"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1200/${cloudinaryImageId}`}
          alt={name}
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-5xl font-extrabold tracking-tight">{name}</h1>
          <p className="text-lg mt-2">{cuisines?.join(", ")}</p>
          <p className="text-md mt-1">{areaName}</p>
        </div>
      </div>

      <div className="bg-white sticky shadow-md -mt-8 mx-auto max-w-4xl rounded-lg p-4 flex items-center justify-around">
        <div className="text-center">
          <p className="font-bold text-lg flex items-center">
            <span className="text-yellow-500 mr-1">⭐</span> {avgRating}
          </p>
          <p className="text-sm text-gray-500">{totalRatingsString}</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-lg">{costForTwoMessage}</p>
          <p className="text-sm text-gray-500">Cost for two</p>
        </div>
      </div>


      {filteredCategories.map((x, index) => {
        return <Accordian key={x.card.card.title} data={x.card?.card} index={index} />;
      })}


      <div className="max-w-4xl mx-auto mt-8 px-4 pb-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Menu
        </h2>
        <div className="space-y-4">
          {menuItems?.map((item) => {
            const {
              id,
              name,
              price,
              defaultPrice,
              description,
              imageId,
              isVeg,
            } = item?.card?.info;
            return (
              <div
                key={id}
                className="w-full bg-white rounded-lg shadow-md p-4 flex justify-between items-start transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex-1 pr-4">
                  <img
                    width={18}
                    height={18}
                    className="float-left mr-2 mt-1"
                    src={`https://packagingguruji.com/wp-content/uploads/2022/09/${
                      isVeg ? "Veg-Logo-2.png" : "Old-Non-Veg-Logo.png"
                    }`}
                    alt={isVeg ? "Vegetarian" : "Non-Vegetarian"}
                  />
                  <h3 className="text-lg font-bold text-gray-800">{name}</h3>
                  <p className="text-sm font-semibold text-gray-700 mt-1">
                    ₹ {price / 100 || defaultPrice / 100}
                  </p>
                  <p className="text-xs text-gray-500 mt-2">{description}</p>
                </div>

                <div className="w-36 text-center flex-shrink-0">
                  {imageId && (
                    <img
                      className="w-full h-24 object-cover rounded-md"
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/${imageId}`}
                      alt={name}
                    />
                  )}
                  <button className="mt-2 w-full px-4 py-1.5 text-sm font-bold text-green-600 border border-green-600 rounded-md hover:bg-green-600 hover:text-white transition-colors duration-300">
                    ADD
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
