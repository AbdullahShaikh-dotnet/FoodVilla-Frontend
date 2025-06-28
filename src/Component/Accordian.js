import { useState } from 'react';

const Accordian = (Maindata) => {
  let data = Maindata.data;
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 mb-4">
      {/* Header */}
      <button
        onClick={toggleAccordion}
        className="w-full flex justify-between items-center p-6 py-2 text-left hover:bg-gray-50 transition-all duration-200 group cursor-pointer"
      >
        <div className="flex items-center space-x-6">
          {/* Category Icon */}
          <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center shadow-sm">

            {data?.image ? <img className='rounded-xl' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data?.image}`}></img> :
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 7.1C16 5.6 14.6 5 13.8 5h-2.2c.4-1 .7-2.2.5-3.1C11.6.1 10.1 0 9.6 0h-.1c-.4 0-.6.2-.8.5l-1 2.8L5 6H0v9h5v-1c.2 0 .7.3 1.2.6 1.2.6 2.9 1.5 4.5 1.5 2.4 0 3.2-.3 3.8-1.3.3-.6.3-1.1.3-1.4.2-.2.5-.5.6-1s.1-.8 0-1.1c.2-.3.4-.7.5-1.3 0-.5-.1-.9-.2-1.2.1-.4.3-.9.3-1.7M2.5 13.5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1m12.2-4.4s.2.2.2.7c0 .6-.4.9-.4.9l-.3.3.2.3s.2.3 0 .7c-.1.4-.5.7-.5.7l-.3.3.2.4s.2.4-.1.9c-.2.4-.4.7-2.9.7-1.4 0-3-.8-4.1-1.4-.8-.4-1.3-.6-1.7-.6V7h.1c.2 0 .4-.1.6-.2L8.5 4c.1-.1.1-.2.2-.3l1-2.7c.5 0 1.2.2 1.4 1.1.1.6-.1 1.6-.6 2.8-.1.3-.1.5.1.8.1.2.4.3.7.3h2.5c.1 0 1.2.2 1.2 1.1 0 .8-.3 1.2-.3 1.2l-.3.4z" /></svg>
            }
          </div>

          {/* Title and Item Count */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-200">
              {data?.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              {data?.itemCards?.length || 0} items available
            </p>
          </div>
        </div>

        {/* Toggle Icon */}
        <div className={`flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 group-hover:bg-orange-100 transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg
            className="w-4 h-4 text-gray-600 group-hover:text-orange-600 transition-colors duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-6 pb-6">
          {/* Divider */}
          <div className="border-t border-gray-100 mb-4"></div>

          {/* Items Grid */}
          <div className="space-y-4">
            {data?.itemCards?.map((item, idx) => (
              <div
                key={idx}
                className="group/item bg-gray-50 rounded-xl p-4 hover:bg-white hover:shadow-sm transition-all duration-200 border border-transparent hover:border-gray-200"
              >
                <div className="flex space-x-4">
                  {/* Item Image */}
                  {item?.card?.info?.imageId && (
                    <div className="flex-shrink-0">
                      <img
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item?.card?.info?.imageId}`}
                        alt={item?.card?.info?.name}
                        className="w-20 h-20 rounded-lg object-cover shadow-sm group-hover/item:shadow-md transition-shadow duration-200"
                        loading="lazy"
                      />
                    </div>
                  )}

                  {/* Item Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900 group-hover/item:text-orange-600 transition-colors duration-200 line-clamp-1">
                        {item?.card?.info?.name}
                      </h4>
                      <div className="flex items-center space-x-2 ml-4">
                        {/* Price */}
                        <span className="text-sm font-semibold text-gray-900">
                          ₹{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
                        </span>

                        {/* Add Button */}
                        <button className="w-8 h-8 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-md">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Description */}
                    {item?.card?.info?.description && (
                      <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                        {item?.card?.info?.description}
                      </p>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item?.card?.info?.isVeg && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                          Veg
                        </span>
                      )}
                      {item?.card?.info?.isBestseller && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          Bestseller
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )) || (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No items available</h3>
                  <p className="text-gray-500">This category is currently empty.</p>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
