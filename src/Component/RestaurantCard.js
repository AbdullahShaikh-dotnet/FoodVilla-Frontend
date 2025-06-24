const RestaurantCard = (prop) => {
  const { restaurantInfo } = prop;
  const { name, avgRating, cuisines, costForTwo, cloudinaryImageId, sla } =
    restaurantInfo;
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-1">
      <img
        className="w-full h-48 object-cover"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt={name}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 truncate">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 h-10 overflow-hidden">
          {cuisines.join(", ")}
        </p>
        <div className="flex justify-between items-center text-sm font-medium text-gray-800">
          <div
            className={`flex items-center px-2 py-1 rounded ${
              avgRating >= 4
                ? "bg-green-100 text-green-800"
                : "bg-yellow-100 text-yellow-800"
            }`}
          >
            <span className="mr-1">⭐</span>
            <span>{avgRating}</span>
          </div>
          <p className="uppercase">{costForTwo}</p>
          <p>{sla?.deliveryTime} MINS</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
