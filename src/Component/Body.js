import RestaurantCard, { withLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import Offline from "./Offline";
import useRestaurant from "../utils/useRestaurant";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const restaurants = useRestaurant();
  const RestaurantCardWithLabels = withLabel(RestaurantCard);

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
    if (!searchWord.trim()) {
      setFilteredRestaurants(restaurants);
      return;
    }
    
    setIsSearching(true);
    const searchFilteredRestaurants = restaurants?.filter((res) =>
      res?.info.name.toLowerCase().includes(searchWord.toLowerCase()) ||
      res?.info.cuisines.some(cuisine => 
        cuisine.toLowerCase().includes(searchWord.toLowerCase())
      )
    );
    setFilteredRestaurants(searchFilteredRestaurants);
    setIsSearching(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    searchRestaurants(searchText);
  };

  const clearFilters = () => {
    setSearchText("");
    setFilteredRestaurants(restaurants);
  };

  if (restaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Discover Amazing Restaurants
            </h1>
            <p className="text-xl text-orange-100 mb-8">
              Order from the best restaurants in your area
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filters Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <form onSubmit={handleSearchSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Input */}
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search for restaurants or cuisines..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Search Button */}
              <button
                type="submit"
                disabled={isSearching}
                className="bg-orange-500 text-white px-8 py-3 rounded-xl hover:bg-orange-600 transition-colors duration-200 font-semibold flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSearching ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Searching...
                  </>
                ) : (
                  'Search'
                )}
              </button>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => filterTopRatedRestaurants()}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium flex items-center"
              >
                <span className="mr-2">⭐</span>
                Top Rated
              </button>
              
              <button
                type="button"
                onClick={clearFilters}
                className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors duration-200 font-medium"
              >
                Clear Filters
              </button>

              {/* Results Count */}
              <div className="ml-auto text-gray-600 text-sm flex items-center">
                <span className="font-medium">{filteredRestaurants?.length}</span>
                <span className="ml-1">restaurants found</span>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Restaurants Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredRestaurants?.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <svg className="mx-auto h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No restaurants found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or browse all restaurants</p>
            <button
              onClick={clearFilters}
              className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-200"
            >
              View All Restaurants
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredRestaurants?.map((restaurant) => (
              <Link
                to={`restaurant/${restaurant?.info?.id}`}
                key={restaurant?.info?.id}
                className="block transition-transform duration-300 ease-in-out hover:-translate-y-2 h-full"
              >
                {restaurant?.info.isOpen ? (
                  <RestaurantCardWithLabels
                    key={restaurant?.info?.id}
                    restaurantInfo={restaurant?.info}
                  />
                ) : (
                  <RestaurantCard
                    key={restaurant?.info?.id}
                    restaurantInfo={restaurant?.info}
                  />
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
