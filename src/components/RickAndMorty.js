const RickAndMorty = ({
  name,
  status,
  location,
  image,
  species,
  numberOfEpisodes,
}) => {
  return (
    <div className="min-w-40 min-h-full p-5 text-xs m-10 text-blue-600 bg-gradient-to-b from-gray-800 to-black rounded-md hover:border-solid hover:border-opacity-50 hover:border-black hover:cursor-pointer hover:text-sm hover:bg-opacity-50 hover:bg-black hover:text-gray-300">
      <div className="flex justify-between">
        <div>
          <img className="min-w-full min-h-full rounded-2xl" src={image} />
        </div>

        <div className="inline-block mt-4">
          <div className="ml-2">
            <h2 className="text-slate-500 mb-2 font-extrabold text-lg hover:text-sky-400">
              {name}
            </h2>
            <div className="flex break-all text-slate-500 hover:text-sky-400">
              <h4>{location}</h4>
            </div>
            <h4 className="flex break-all text-slate-500 hover:text-sky-400">
              {numberOfEpisodes} episodes
            </h4>
          </div>
        </div>
        <div className="mt-4 ml-2">
          <div className="text-base text-slate-500 hover:text-sky-400">
            {species}
          </div>
          <h3
            className={
              status === "Alive"
                ? "list-none text-green-500 text-xs"
                : "list-none text-red-500 text-xs"
            }
          >
            {/* <span className="w-3 h-3 bg-green-500 rounded-full mr-1"></span>
            <CheckCircleIcon className="w-5 h-5 text-green-500" />
            <div className="w-3 h-3 bg-red-700 rounded-full"></div>
            <div className="w-3 h-3 bg-green-700 rounded-full"></div> */}
            {status === "Alive" ? (
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
                <p>{status}</p>
              </div>
            ) : (
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
                <p>{status}</p>
              </div>
            )}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default RickAndMorty;
