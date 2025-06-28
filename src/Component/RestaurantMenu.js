import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Accordian from "./Accordian";
import { useState, useEffect } from "react";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurantDetails = useRestaurantMenu(id);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!restaurantDetails) return <Shimmer />;

  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    areaName,
    sla,
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

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96 lg:h-[500px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1200/${cloudinaryImageId}`}
            alt={name}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-tight">
              {name}
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-yellow-400 text-lg">★</span>
                <span className="font-semibold">{avgRating}</span>
                <span className="text-gray-300">({totalRatingsString})</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">{areaName}</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">{sla?.deliveryTime} min</span>
              </div>
            </div>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              {cuisines?.join(" • ")}
            </p>
          </div>
        </div>

        {/* Floating Action Button */}
        <div className="absolute bottom-6 right-6">
          <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Sticky Info Bar */}
      <div className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-semibold text-gray-900">Open Now</span>
              </div>
              <div className="hidden md:flex items-center space-x-2 text-gray-600">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>{sla?.deliveryTime} min delivery</span>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="text-center">
                <p className="font-bold text-lg text-gray-900 flex items-center justify-center">
                  <span className="text-yellow-500 mr-1">★</span> {avgRating}
                </p>
                <p className="text-xs text-gray-500">{totalRatingsString}</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-lg text-gray-900">{costForTwoMessage}</p>
                <p className="text-xs text-gray-500">Cost for two</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Menu Section */}
      {menuItems && menuItems.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Items
            </h2>
            <p className="text-lg text-gray-600">
              Our most loved dishes that customers can't get enough of
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems?.slice(0, 6).map((item) => {
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
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200"
                >
                  {/* Image */}
                  {imageId && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/${imageId}`}
                        alt={name}
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <img
                          width={35}
                          height={20}
                          src={`https://packagingguruji.com/wp-content/uploads/2022/09/${isVeg ? "Veg-Logo-2.png" : "Old-Non-Veg-Logo.png"
                            }`}
                          alt={isVeg ? "Vegetarian" : "Non-Vegetarian"}
                          className="rounded-full bg-white/20 backdrop-blur-sm shadow-xl"
                        />
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-bold text-gray-900 line-clamp-1 group-hover:text-orange-600 transition-colors duration-200">
                        {name}
                      </h3>
                      <span className="text-lg font-bold text-gray-900 ml-4">
                        ₹{price / 100 || defaultPrice / 100}
                      </span>
                    </div>

                    {description && (
                      <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                        {description}
                      </p>
                    )}

                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md">
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}


      {/* Menu Categories */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Our Menu
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of dishes, from traditional favorites to modern culinary creations
          </p>
        </div>

        <div className="space-y-6">
          {filteredCategories.map(x => (
            <Accordian key={x.card.card.title} data={x.card?.card} />
          ))}
        </div>
      </div>
      

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Order?
          </h3>
          <p className="text-xl mb-8 text-orange-100">
            Experience the best of {name} delivered to your doorstep
          </p>
          <button className="bg-white text-orange-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
