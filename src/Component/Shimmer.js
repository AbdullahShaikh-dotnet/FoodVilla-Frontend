const Shimmer = () => {
  return (
    <div className="shimmer">
      {[...Array(8)].map((_, index) => (
        <div key={index} className="shimmer-container">
          <div className="shimmer-image"></div>
          <div className="shimmer-content"></div>
          <div className="shimmer-content"></div>
          <div className="shimmer-content"></div>
          <div className="shimmer-content"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
