const ShimmerCard = () => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4">
    <div className="bg-gray-200 h-48 w-full animate-pulse"></div>
    <div className="mt-4">
      <div className="bg-gray-200 h-6 w-3/4 rounded animate-pulse mb-2"></div>
      <div className="bg-gray-200 h-4 w-1/2 rounded animate-pulse"></div>
    </div>
    <div className="flex justify-between items-center mt-4">
      <div className="bg-gray-200 h-8 w-1/4 rounded animate-pulse"></div>
      <div className="bg-gray-200 h-8 w-1/4 rounded animate-pulse"></div>
      <div className="bg-gray-200 h-8 w-1/4 rounded animate-pulse"></div>
    </div>
  </div>
);

const Shimmer = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Array(12)
          .fill(0)
          .map((_, index) => (
            <ShimmerCard key={index} />
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
