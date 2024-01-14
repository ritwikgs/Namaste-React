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
          <div className="status">
            <li
              className={
                status === "Alive" ? "inline-list-alive" : "inline-list-dead"
              }
            >
              <h3>
                {status}-{species}
              </h3>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RickAndMorty;
