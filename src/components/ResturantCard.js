const RestaurantCard = ({
  restaurantName,
  cuisines,
  ratings,
  deliveryTime,
  address,
  imageUrl,
}) => {
  return (
    <div className="restaurant-card">
      <img className="restaurant-image" src={imageUrl} />
      <h3>{restaurantName}</h3>
      <div className="restaurant-details">
        <h4>{cuisines}</h4>
      </div>
      <h4>{ratings}</h4>
      <h4>{deliveryTime}</h4>
      <div className="restaurant-address">
        <h4>{address}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
