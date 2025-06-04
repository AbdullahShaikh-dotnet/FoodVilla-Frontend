import React from "react";
import ReactDOM from "react-dom/client";

//Header
//    -- Logo
//    -- Nav Items
//    -- Cart
// body
//    -- Search
//    -- Restaurant Container
//        -- Restaurant Card
//            -- Image
//            -- Name
//            -- Rating 
//            -- Cuisines
//            -- Start Rating
//            -- Delivery Time
// Footer
//    -- Copyright
//    -- Links
//    -- Address
//    -- Contact

const Header = () => (
    <div className="heading">
        <div className="logo-container">
            <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="logo" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);


const Body = () => (
    <div className="body">
        <div className="search">
            <input type="text" placeholder="Search" />
        </div>
            {ResData.restaurants.map((restaurant) => (
                restaurant.menu.map((item, index) => (
                    <RestaurantCard key={restaurant.id + index} 
                    restaurantName={restaurant.name} 
                    rating={restaurant.rating} 
                    cuisines={restaurant.cuisine} 
                    dishName={item.name}
                    price={item.price}
                    imageUrl={item.image_url} />
                ))
            ))}
    </div>
)

const ResData = {
    "restaurants": [
      {
        "id": 1,
        "name": "Spicy Delight",
        "cuisine": "Indian",
        "rating": 4.5,
        "location": "Andheri West",
        "menu": [
          {
            "item_id": 101,
            "name": "Butter Chicken",
            "price": 350,
            "category": "Main Course",
            "is_veg": false,
            "image_url": "https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken--750x750.jpg"
          },
          {
            "item_id": 102,
            "name": "Paneer Tikka",
            "price": 250,
            "category": "Starter",
            "is_veg": true,
            "image_url": "https://www.carolinescooking.com/wp-content/uploads/2021/09/paneer-tikka-featured-pic-sq.jpg"
          }
        ]
      },
      {
        "id": 2,
        "name": "Sushi World",
        "cuisine": "Japanese",
        "rating": 4.8,
        "location": "Bandra",
        "menu": [
          {
            "item_id": 201,
            "name": "California Roll",
            "price": 500,
            "category": "Sushi",
            "is_veg": false,
            "image_url": "https://therecipecritic.com/wp-content/uploads/2023/08/california_roll.jpg"
          },
          {
            "item_id": 202,
            "name": "Veg Tempura",
            "price": 400,
            "category": "Appetizer",
            "is_veg": true,
            "image_url": "https://th.bing.com/th/id/OIP.RLvyCCBHdJwsKU6Ih5HiUQHaLH?r=0&rs=1&pid=ImgDetMain"
          }
        ]
      }
    ],
    "categories": [
      "Starter",
      "Main Course",
      "Sushi",
      "Appetizer",
      "Dessert",
      "Beverages"
    ]
}


const RestaurantCard = ({restaurantName, rating, cuisines, dishName, price, imageUrl}) => (
    <div className="restaurant-card">
        <img className="restaurant-image" src={imageUrl} alt={dishName} />
        <h5>Restaurant Name : {restaurantName}</h5>
        <h5>Rating : {rating}</h5>
        <h5>Cuisines : {cuisines}</h5>
        <h5>Dish Name : {dishName}</h5>
        <h5>Price : {price}</h5>
    </div>
)


const AppLayout = () => (
    <div className="app">
        <Header />
        <Body />
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

