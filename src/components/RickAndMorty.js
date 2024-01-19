const RickAndMorty = ({ name, status, location, image, species }) => {
  return (
    <div className="w-30 min-h-full p-5 text-xs m-10 text-blue-600 bg-gradient-to-b from-gray-800 to-black rounded-md hover:border-solid hover:border-opacity-50 hover:border-black hover:cursor-pointer hover:text-sm hover:bg-opacity-50 hover:bg-black hover:text-gray-200">
      <div className="flex justify-between">
        <div>
          <img className="max-w-60 min-h-full rounded-2xl" src={image} />
        </div>
        <div className="ml-2">
          <h2 className="text-slate-500">{name}</h2>
          <div className="flex break-all text-slate-500">
            <h4>{location}</h4>
          </div>
          <div className="text-xs text-slate-500">{species}</div>
          <div className="inline-block font-extrabold">
            <h3
              className={
                status === "Alive"
                  ? "list-none text-green-500 text-xs"
                  : "list-none text-red-500 text-xs"
              }
            >
              {status}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RickAndMorty;
