const Offline = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <div className="rounded-full p-6 mb-6">
        <svg
          width="100"
          height="100"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="red">
            <path d="M8 1.992c-2.617 0-5.238.934-7.195 2.809l-.496.48a1 1 0 0 0-.032 1.41 1 1 0 0 0 1.414.028l.5-.477c3.086-2.953 8.532-2.953 11.618 0l.5.477a1 1 0 0 0 1.414-.028 1 1 0 0 0-.032-1.41l-.496-.48C13.238 2.926 10.617 1.992 8 1.992M7.969 6c-1.57.012-3.13.629-4.207 1.813l-.5.55a.997.997 0 1 0 1.476 1.344l.5-.543c1.242-1.363 3.992-1.492 5.399-.129Q10.817 9 11 9c.531 0 1.04.21 1.414.586l.223.223q.016-.016.039-.032a1 1 0 0 0 .062-1.414l-.5-.55C11.113 6.582 9.535 5.988 7.968 6M8 10a2 2 0 1 0 1.871 2.7l-.285-.286a2.01 2.01 0 0 1-.469-2.07A2 2 0 0 0 8 10m0 0" />
            <path
              d="M11 10a1 1 0 0 0-.707 1.707L11.586 13l-1.293 1.293a1 1 0 1 0 1.414 1.414L13 14.414l1.293 1.293a1 1 0 1 0 1.414-1.414L14.414 13l1.293-1.293a1 1 0 1 0-1.414-1.414L13 11.586l-1.293-1.293A1 1 0 0 0 11 10m0 0"
              fillOpacity=".949"
              fill="#2d3436"
            />
          </g>
        </svg>
      </div>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">You are offline</h1>
      <p className="text-gray-600 text-lg mb-1 text-center">
        It looks like you have lost your internet connection.
      </p>
      <p className="text-gray-500 text-center">
        Please check your network and try again.
      </p>
    </div>
  );
};

export default Offline;
