const RestaurantCard = (prop) => {
  const { restaurantInfo } = prop;
  const { name, avgRating, cuisines, costForTwo, cloudinaryImageId, sla } =
    restaurantInfo;
  return (
    <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
      <div className="w-full h-48 overflow-hidden">
        <img
          className="w-full h-full object-cover object-center rounded-t-xl"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt={name}
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate">{name}</h3>
        <p className="text-gray-500 text-sm mb-3 h-10 overflow-hidden leading-snug">{cuisines.join(", ")}</p>
        <div className="flex justify-between items-center text-sm font-medium text-gray-800 mt-2">
          <div
            className={`flex items-center px-2 py-0.5 rounded-full border ${
              avgRating >= 4
                ? "bg-green-50 border-green-200 text-green-700"
                : "bg-yellow-50 border-yellow-200 text-yellow-700"
            }`}
          >
            <span className="mr-1">⭐</span>
            <span>{avgRating}</span>
          </div>
          <span className="uppercase tracking-wide text-gray-400">{costForTwo}</span>
          <span className="text-blue-600 font-semibold">{sla?.deliveryTime} min</span>
        </div>
      </div>
    </div>
  );
};

export const withLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        {props?.restaurantInfo?.aggregatedDiscountInfoV3?.header !== "ITEMS" ? (
          <div className="absolute top-4 -left-4 z-10 bg-yellow-100 text-yellow-900 border border-yellow-300 shadow-md px-4 py-1 text-xs font-semibold rounded-md flex items-center min-w-[60px] justify-center">
            <span>{props?.restaurantInfo?.aggregatedDiscountInfoV3?.header}</span>
          </div>
        ) : null}
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
