const RestaurantCard = ({
  restaurantName,
  cuisines,
  ratings,
  deliveryTime,
  address,
  imageUrl,
  costForTwo,
  sla,
}) => {
  return (
    <div className="restaurant-card">
      <img className="restaurant-image" src={imageUrl} />

      <div>
        <div className="restaurant-details">
          <h3>{restaurantName}</h3>
        </div>
        <div className="restaurant-details">
          <h4>{ratings}</h4>
        </div>
        <div className="restaurant-details">
          <h4>{cuisines}</h4>
        </div>
        <div className="flex-container">
          <div className="box">{costForTwo}</div>
          <div className="box">{sla}</div>
        </div>
      </div>

      <div className="restaurant-address">
        <h4>{address}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
