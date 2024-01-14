import RestaurantCard from "./ResturantCard";
import allRestaurants from "../utils/mock-data";
import React, { useState } from "react";

const Body = () => {
  //state variable - use state hook
  const [listOfRestaurants, setListOfRestaurants] = useState(
    allRestaurants || []
  );
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="top-rated-restaurants-filter">
        <button
          className="top-rated-restaurants-btn"
          onClick={() => {
            const filteredList = listOfRestaurants?.filter(
              (res) => Number(res?.ratings) >= 4.5
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top rated Restaurants
        </button>
        <button
          className="top-rated-restaurants-btn"
          onClick={() => {
            setListOfRestaurants(allRestaurants);
          }}
        >
          All Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants?.map((res, index) => (
          <RestaurantCard
            restaurantName={res?.restaurantName}
            cuisines={res?.cuisines}
            ratings={res?.ratings}
            address={res?.address}
            imageUrl={res?.imageUrl}
            key={index}
          ></RestaurantCard>
        ))}
      </div>
    </div>
  );
};

export default Body;
