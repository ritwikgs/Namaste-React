import RestaurantCard from "./ResturantCard";
import allRestaurants from "../utils/mock-data";
import { useState, useEffect } from "react";
import RickAndMorty from "./RickAndMorty";
import Shimmer from "./Shimmer";
import {
  SAMPLE_RESTAURANT_LOGO,
  SWIGGY_API_URL,
  BYPASS_CORS,
} from "../utils/constants";
import { Link } from "react-router-dom";
//import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //state variable - use state hook
  //whenever there is a change in state variable, react re-renders the component
  const [listOfRestaurants, setListOfRestaurants] = useState(
    allRestaurants || []
  );
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );

  const [searchText, setSearchText] = useState("");
  const [rickAndMortyCharacters, setRickAndMortyCharacters] = useState([]);
  const [filteredRickAndMortyCharacters, setFilteredRickAndMortyCharacters] =
    useState([]);

  getRickAndMortyData = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const jsonResponse = await response.json();
      console.log(jsonResponse, "rickmorty");
      setRickAndMortyCharacters(jsonResponse?.results);
      setFilteredRickAndMortyCharacters(jsonResponse?.results);
    } catch (error) {
      console.error(error);
    }
  };

  getRestaurantData = async () => {
    const url = BYPASS_CORS + encodeURIComponent(SWIGGY_API_URL);
    const data = await fetch(url);
    const json = await data.json();
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(restaurants, "restaurants");
    setListOfRestaurants(restaurants);
    setFilteredListOfRestaurants(restaurants);
  };

  const generateShimmers = (count) => {
    return Array.from({ length: count }, (_, index) => <Shimmer key={index} />);
  };

  //use effect hook
  useEffect(() => {
    setTimeout(() => {
      getRickAndMortyData();
      getRestaurantData();
    }, 200);
  }, []);

  // console.log(rickAndMortyCharacters.length, listOfRestaurants.length);

  // const isOnline = useOnlineStatus();
  // console.log(isOnline, "isOnline");

  // if (!isOnline) {
  //   return <div className="w-full h-70 bg-red-500 text-gray-300 text-xl font-bold mt-20">You are offline!</div>;
  // }

  if (rickAndMortyCharacters?.length === 0 || listOfRestaurants?.length === 0) {
    return <div className="flex flex-wrap">{generateShimmers(10)}</div>;
  }

  return (
    <div className="bg-gradient-to-r from-cyan-800 to-indigo-950">
      <div className="flex justify-start ml-15 mt-6">
        <input
          type="text"
          placeholder="Search"
          className="h-11 w-3/12 mt-1 mx-10 p-3 border-2 border-gray-300 rounded-md outline-none text-base text-gray-700 transition duration-300 focus:border-green-400 focus:shadow-outline-green"
          value={searchText}
          onChange={(e) => {
            const search = e.target.value;
            setSearchText(search);
            const filteredCharacters = rickAndMortyCharacters?.filter((ch) =>
              ch?.name?.toLowerCase()?.includes(search.toLowerCase())
            );
            const filteredRestaurants = listOfRestaurants?.filter(
              (restaurant) =>
                restaurant?.info?.name
                  ?.toLowerCase()
                  .includes(search.toLowerCase())
            );
            setFilteredListOfRestaurants(filteredRestaurants);
            setFilteredRickAndMortyCharacters(filteredCharacters);
          }}
        />
        <button
          className="inline-block px-5 mb-4 py-2 bg-cyan-500 shadow-lg shadow-cyan-500/50 my-2 text-white text-base font-bold text-center no-underline rounded-md transition duration-300 ease-in-out hover:bg-gray-900"
          onClick={() => {
            if (searchText) {
              setFilteredRickAndMortyCharacters(rickAndMortyCharacters);
              setFilteredListOfRestaurants(listOfRestaurants);
              setSearchText("");
            }
          }}
        >
          Clear
        </button>

        {/* <input type="text" class="styled-input" placeholder="Search rick and morty characters"></input> */}
        {/* <button
          onClick={() => {
            const filterdCharacters = rickAndMortyCharacters?.filter((ch) =>
              ch.name.toLowerCase()?.includes(searchText.toLowerCase())
            );
            if (filterdCharacters) {
              setFilteredRickAndMortyCharacters(filterdCharacters);
            }
          }}
        >
          search
        </button> */}
      </div>
      <div className="mx-10 my-6 flex justify-around">
        <button
          className="inline-block px-5 py-3 bg-gray-800 text-white text-base font-bold text-center no-underline rounded-md transition duration-300 ease-in-out hover:bg-gray-900 shadow-lg shadow-cyan-500/50"
          onClick={() => {
            setFilteredListOfRestaurants(listOfRestaurants);
            setFilteredRickAndMortyCharacters(rickAndMortyCharacters);
          }}
        >
          All
        </button>
        <button
          className="inline-block px-5 py-3 bg-gray-800 text-white text-base font-bold text-center no-underline rounded-md transition duration-300 ease-in-out hover:bg-gray-900 shadow-lg shadow-cyan-500/50"
          onClick={() => {
            setFilteredListOfRestaurants(listOfRestaurants);
            setFilteredRickAndMortyCharacters([]);
          }}
        >
          Only Restaurants
        </button>
        <button
          disabled={listOfRestaurants?.length === 0}
          className="inline-block px-5 py-3 bg-gray-800 text-white text-base font-bold text-center no-underline rounded-md transition duration-300 ease-in-out hover:bg-gray-900 shadow-lg shadow-cyan-500/50"
          onClick={() => {
            const topRestaurants = listOfRestaurants?.filter(
              (restaurant) => restaurant?.info?.avgRating > 4.2
            );
            setFilteredListOfRestaurants(topRestaurants);
            setFilteredRickAndMortyCharacters([]);
          }}
        >
          Top rated Restaurants
        </button>
        <button
          className="inline-block px-5 py-3 bg-gray-800 text-white text-base font-bold text-center no-underline rounded-md transition duration-300 ease-in-out hover:bg-gray-900 shadow-lg shadow-cyan-500/50"
          onClick={() => {
            setFilteredListOfRestaurants([]);
            setFilteredRickAndMortyCharacters(rickAndMortyCharacters);
          }}
        >
          Only Rick and Morty
        </button>
        <button
          className="inline-block px-5 py-3 bg-gray-800 text-white text-base font-bold text-center no-underline rounded-md transition duration-300 ease-in-out hover:bg-gray-900 shadow-lg shadow-cyan-500/50"
          disabled={rickAndMortyCharacters?.length === 0}
          onClick={() => {
            const humansOnly = rickAndMortyCharacters?.filter(
              (char) => char?.species === "Human"
            );
            setFilteredRickAndMortyCharacters(humansOnly);
            setFilteredListOfRestaurants([]);
          }}
        >
          Only Humans
        </button>
        <button
          className="inline-block px-5 py-3 bg-gray-800 text-teal-100 text-base font-bold text-center no-underline rounded-md transition duration-300 ease-in-out hover:bg-gray-900 shadow-lg shadow-cyan-500/50"
          disabled={rickAndMortyCharacters?.length === 0}
          onClick={() => {
            const alinesOnly = rickAndMortyCharacters?.filter(
              (char) => char?.species === "Alien"
            );
            setFilteredRickAndMortyCharacters(alinesOnly);
            setFilteredListOfRestaurants([]);
          }}
        >
          Only Alines
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {filteredListOfRestaurants?.map((res) => (
          <Link to={"restaurant/" + res?.info?.id} key={res?.info?.id}>
            <RestaurantCard
              restaurantName={res?.info?.name}
              cuisines={
                res?.info?.cuisines?.length > 4
                  ? res?.info?.cuisines?.splice(0, 4)?.join(",")
                  : res?.info?.cuisines?.join(",")
              }
              ratings={res?.info?.avgRatingString}
              address={res?.info?.areaName}
              costForTwo={res?.info?.costForTwo}
              sla={res?.info?.sla?.slaString}
              imageUrl={SAMPLE_RESTAURANT_LOGO}
            ></RestaurantCard>
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-3">
        {filteredRickAndMortyCharacters?.map((res) => (
          // <Link to={"character/" + res?.id} key={res?.id}>

          <RickAndMorty
            name={res?.name}
            status={res?.status}
            location={res?.location?.name}
            image={res?.image}
            species={res?.species}
            numberOfEpisodes={res?.episode?.length}
            key={res?.id}
          ></RickAndMorty>
        ))}
      </div>
    </div>
  );
};

export default Body;
