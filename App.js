import React from "react";
import ReactDOM from "react-dom/client";

//Header
    // Logo
    // Nav Items
    // Cart
// body
    // Search
    // Restaurant Container
        // Restaurant Card
            // Image
            // Name
            // Rating
            // Cuisines
            // Start Rating
            // Delivery Time
// Footer
    // Copyright
    // Links
    // Address
    // Contact

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
        <RestaurantCard />
    </div>
)

const RestaurantCard = () => (
    <div className="restaurant-card">
        <img className="restaurant-image" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="logo" />
        <h3>Restaurant Name</h3>
        <h4>Rating</h4>
        <h4>Cuisines</h4>
        <h4>Start Rating</h4>
        <h4>Delivery Time</h4>
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

