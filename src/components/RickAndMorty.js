const RickAndMorty = ({ name, status, location, image, species }) => {
  return (
    <div className="rick-and-morty-card">
      <div className="inner">
        <div>
          <img className="character-image" src={image} />
        </div>
        <div>
          <h2>{name}</h2>
          <div className="restaurant-details">
            <h4>{location}</h4>
          </div>
          <h4>{status}</h4>
          <h4>{species}</h4>
        </div>
      </div>
    </div>
  );
};

export default RickAndMorty;
