import RestaurantCard from "./ResturantCard";
import allRestaurants from "../utils/mock-data";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        {allRestaurants?.map((res, index) => (
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
