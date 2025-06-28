const RestaurantCard = (prop) => {
  const { restaurantInfo } = prop;
  const { name, avgRating, cuisines, costForTwo, cloudinaryImageId, sla, areaName } =
    restaurantInfo;
  return (
    <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full flex flex-col">
      {/* Image Container */}
      <div className="relative w-full h-56 overflow-hidden flex-shrink-0">
        <img
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt={name}
          loading="lazy"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Delivery Time Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg py-1 px-2 text-blue-600 text-xs font-semibold flex items-center shadow-sm">
          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          {sla?.deliveryTime} min
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Restaurant Name */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-orange-600 transition-colors duration-200">
          {name}
        </h3>

        {/* Cuisines */}
        <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed flex-1">
          {cuisines.join(", ")}
        </p>

        {/* Location */}
        {areaName && (
          <p className="text-gray-500 text-xs mb-4 flex items-center flex-shrink-0">
            <svg className="w-3 h-3 mr-1 text-red-700" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {areaName}
          </p>
        )}

        {/* Info Row */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-gray-100 flex-shrink-0">
          {/* Rating */}
          <div
            className={`flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
              avgRating >= 4.5
                ? "bg-green-100 text-green-700 border border-green-200"
                : avgRating >= 4
                ? "bg-blue-100 text-blue-700 border border-blue-200"
                : "bg-yellow-100 text-yellow-700 border border-yellow-200"
            }`}
          >
            <span className="mr-1.5 text-yellow-500">★</span>
            <span>{avgRating}</span>
          </div>

          {/* Cost for Two */}
          <div className="text-gray-600 text-sm font-medium">
            <span className="text-gray-400">•</span>
            <span className="ml-1">{costForTwo}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const withLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative h-full">
        {props?.restaurantInfo?.aggregatedDiscountInfoV3?.header !== "ITEMS" ? (
          <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg px-4 py-2 text-xs font-bold rounded-full flex items-center justify-center transform -rotate-2">
            <span className="flex items-center">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
              </svg>
              {props?.restaurantInfo?.aggregatedDiscountInfoV3?.header}
            </span>
          </div>
        ) : null}
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
