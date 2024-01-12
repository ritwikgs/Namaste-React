import React from "react";
import ReactDOM from "react-dom";

/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - Restaurant container
 *   - Restaurant card (image, name, rating, cuisine, delivery time)
 * Footer
 * - Links
 * - Copyright
 * - Address
 * - Contact
 */

const RestaurantCard = ({
  restaurantName,
  cuisines,
  ratings,
  deliveryTime,
  address,
  imageUrl,
}) => {
  console.log(
    restaurantName,
    cuisines,
    address,
    ratings,
    deliveryTime,
    imageUrl
  );
  return (
    <div className="restaurant-card">
      <img className="restaurant-image" src={imageUrl} />
      <h3>{restaurantName}</h3>
      <div className="resturant-details">
        <h4>{cuisines}</h4>

        <h4>{ratings}</h4>
        <h4>{deliveryTime}</h4>
      </div>
      <div className="restaurant-address">
        <h4>{address}</h4>
      </div>
    </div>
  );
};

const allResturants = [
  {
    restaurantName: "Meghana Foods",
    cuisines: "Biriyanis",
    ratings: "4.7",
    deliveryTime: "30 minutes",
    address: "Koramangala, Bangalore",
    imageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/g0isknuhld1ltwxkjkcg",
  },
  {
    restaurantName: "Dominos Pizza",
    cuisines: "Pizza",
    ratings: "4.5",
    deliveryTime: "28 minutes",
    address: "J P Nagar, Bangalore",
    imageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/iwxqykgpvgcjipvlugqy",
  },
  {
    restaurantName: "McDonolds",
    cuisines: "Burger",
    ratings: "4.4",
    deliveryTime: "20 minutes",
    address: "Banashankari, Bangalore",
    imageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/q0astez5jmmfo5icayde",
  },
  {
    restaurantName: "California Burritos",
    cuisines: "Mexican",
    ratings: "4.3",
    deliveryTime: "30 minutes",
    address: "Gandhi Bazar, Bangalore",
    imageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/p57honbbzdgf7tyt2vay",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        {allResturants.map((res, index) => (
          <RestaurantCard
            restaurantName={res.restaurantName}
            cuisines={res.cuisines}
            ratings={res.ratings}
            address={res.address}
            imageUrl={res.imageUrl}
            key={index}
          ></RestaurantCard>
        ))}
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://careers.swiggy.com/assets/img/logo.png"
        />
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
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

//React Element - type(tag), attributes, content withing tags - creates an Object - when this is rendered onto the DOM it becomes an HTML Element
const heading = React.createElement("h1", { id: "heading" }, "Heading");

//JSX code is transpiled before it is ready by JS Engine by Babel(parcel dependency Babel)
//JSX => React.createElement (Object) => Rendered as HTML Element to DOM

const root = ReactDOM.createRoot(document.getElementById("root"));

//React functional components
const TitleComponent = () => {
  return (
    <h1 className="jsx-heading" tabIndex="5">
      Title using JSX
    </h1>
  );
};

const num = 100;

const HeadingComponent = () => {
  return (
    <div className="header-container">
      <h1>Heading from react functional component {num}</h1>
      <TitleComponent />
      <TitleComponent></TitleComponent>
      {heading}
    </div>
  );
};

//anything already inside root will be replaces by heading
root.render(<AppLayout />);
