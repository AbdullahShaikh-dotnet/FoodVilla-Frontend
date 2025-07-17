import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeItem, incrementQuantity, decrementQuantity, updateItemQuantity } from "../utils/cartSlice";

const Cart = () => {


  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const getImageUrl = (imageId) =>
    `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_80/${imageId}`;

  // cartItems now contains unique items with quantity
  const cartData = cartItems.map((item) => ({
    id: item.card.info.id,
    name: item.card.info.name,
    price: item.card.info.price ? item.card.info.price / 100 : 0,
    defaultPrice: item.card.info.defaultPrice
      ? item.card.info.defaultPrice / 100
      : 0,
    Image: getImageUrl(item.card.info.imageId),
    quantity: Number(item?.quantity),
  }));


  const cartTotal = cartData
    .reduce(
      (sum, item) => sum + (item.price || item.defaultPrice) * (item.quantity || 1),
      0
    )
    .toFixed(2);


  const handleItemQty = (e) => {
    const quantityValue = Number(e.target.value);

    if (quantityValue <= 1) {
      alert(); 
      return;
    }

    const itemID = e.target.dataset.itemid;
    const quantity = e.target.value;
    dispatch(updateItemQuantity([itemID, quantity]));
  }

  return (
    <div className="min-h-[80vh] flex flex-col items-center py-10 px-2">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow p-8 mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Your Cart
        </h1>
        {cartData.length === 0 ? (
          <div className="text-center py-16">
            <svg
              className="mx-auto h-16 w-16 text-gray-300 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-500">
              Looks like you haven't added anything yet.
            </p>
          </div>
        ) : (
          <>
            <ul className="divide-y divide-gray-100 mb-6 h-[50vh] pr-10 overflow-y-auto">
              {cartData.map((item) => (
                <li key={item.id} className="flex items-center py-4">
                  {
                    <img
                      src={item.Image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover mr-4"
                    />
                  }
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-gray-500 text-sm">
                      ₹
                      {(item.price ? item.price : item.defaultPrice) *
                        (item.quantity || 1)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => dispatch(decrementQuantity(item.id))}
                      className="border cursor-pointer border-gray-300 hover:bg-gray-50 text-gray-700
                     font-semibold p-2 py-0 rounded-md transition-colors duration-200"
                    >
                      -
                    </button>
                    <span className="text-gray-500 text-sm px-2">
                      <input data-itemid={item.id} type="text" maxLength={3} className="p-1 w-[40px] text-center align-middle border-b-2 border-orange-400"
                        value={item.quantity} onChange={(e) => handleItemQty(e)} />
                    </span>
                    <button onClick={() => dispatch(incrementQuantity(item.id))}
                      className="border cursor-pointer border-gray-300 hover:bg-gray-50 text-gray-700
                     font-semibold p-2 py-0 rounded-md transition-colors duration-200"
                    >
                      +
                    </button>

                    <button onClick={() => dispatch(removeItem(item.id))}
                      className="cursor-pointer text-red-700
                     font-semibold p-2 py-0 rounded-md transition-colors duration-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-bold text-gray-800">Total:</span>
              <span className="text-xl font-bold text-orange-600 pr-10">
                ₹{cartTotal}
              </span>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => dispatch(clearCart())}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
              >
                Clear Cart
              </button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 shadow">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
