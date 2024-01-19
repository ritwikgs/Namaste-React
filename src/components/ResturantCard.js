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
    <div className="w-4/5 min-h-72 p-5 text-xs m-10 text-slate-500 bg-gradient-to-b from-gray-700 to-black rounded-md hover:border-solid hover:border-opacity-50 hover:border-black hover:cursor-pointer hover:text-sm hover:bg-opacity-50 hover:bg-black hover:text-gray-200">
      <img className="min-w-48 max-h-40 min-h-40 rounded-md" src={imageUrl} />

      <div className="mt-1 text-slate-500">
        <div className="ml-1 flex break-all">
          <h3>{restaurantName}</h3>
        </div>
        <div className="ml-1 flex break-all">
          <h4>{ratings}</h4>
        </div>
        <div className="ml-1 flex break-all">
          <h4>{cuisines}</h4>
        </div>
        <div className="block">
          <div className="ml-1 p-0">{costForTwo}</div>
          <div className="ml-1 p-0">{sla}</div>
        </div>
      </div>

      <div className="ml-1 text-s text-slate-500">
        <h4>{address}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
