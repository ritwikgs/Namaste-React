const RickAndMorty = ({ name, status, location, image, species }) => {
  return (
    <div className="restaurant-card">
      <img className="restaurant-image" src={image} />
      <h3>{name}</h3>
      <div className="restaurant-details">
        <h4>{location}</h4>
      </div>
      <h4>{status}</h4>
      <h4>{species}</h4>
    </div>
  );
};

export default RickAndMorty;
