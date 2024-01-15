import RestaurantCard from "./ResturantCard";
import allRestaurants from "../utils/mock-data";
import { useState, useEffect } from "react";
import RickAndMorty from "./RickAndMorty";
import Shimmer from "./Shimmer";

const Body = () => {
  //state variable - use state hook
  //whenever there is a change in state variable, react re-renders the component
  const [listOfRestaurants, setListOfRestaurants] = useState(
    allRestaurants || []
  );
  const [rickAndMortyCharacters, setRickAndMortyCharacters] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRickAndMortyCharacters, setFilteredRickAndMortyCharacters] =
    useState([]);

  getRickAndMortyData = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      setRickAndMortyCharacters(jsonResponse?.results);
      setFilteredRickAndMortyCharacters(jsonResponse?.results);
    } catch (error) {
      console.error(error);
    }
  };

  //use effect hook
  useEffect(() => {
    setTimeout(() => {
      getRickAndMortyData();
    }, 1000);
  }, []);

  if (rickAndMortyCharacters?.length === 0) {
    return (
      <div className="shimmer-container">
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
      </div>
    );
  }

  return (
    <div className="body">
      <div className="search-box">
        <input
          type="text"
          className="search-text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            const filterdCharacters = rickAndMortyCharacters?.filter((ch) =>
              ch.name.toLowerCase()?.includes(searchText.toLowerCase())
            );
            if (filterdCharacters) {
              setFilteredRickAndMortyCharacters(filterdCharacters);
            }
          }}
        />
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
        <button
          onClick={() => {
            getRickAndMortyData();
          }}
        >
          clear
        </button>
      </div>
      <div className="top-rated-restaurants-filter">
        <button
          disabled={listOfRestaurants?.length === 0}
          className="top-rated-restaurants-btn"
          onClick={() => {
            const filteredList = listOfRestaurants?.filter(
              (res) => Number(res?.info?.avgRatingString) >= 4.5
            );
            setListOfRestaurants(filteredList);
            getRickAndMortyData();
          }}
        >
          Top rated Restaurants
        </button>
        <button
          className="top-rated-restaurants-btn"
          onClick={() => {
            setListOfRestaurants(allRestaurants);
            getRickAndMortyData();
          }}
        >
          All Restaurants
        </button>
        <button
          className="top-rated-restaurants-btn"
          onClick={() => {
            setListOfRestaurants([]);
            getRickAndMortyData();
          }}
        >
          Only Rick and Morty
        </button>
        <button
          className="top-rated-restaurants-btn"
          onClick={() => {
            setRickAndMortyCharacters([]);
            setListOfRestaurants(allRestaurants);
          }}
        >
          Only Restaurants
        </button>
        <button
          className="top-rated-restaurants-btn"
          disabled={rickAndMortyCharacters?.length === 0}
          onClick={() => {
            const humansOnly = rickAndMortyCharacters?.filter(
              (char) => char?.species === "Human"
            );
            setRickAndMortyCharacters(humansOnly);
          }}
        >
          Only Humans
        </button>
        <button
          className="top-rated-restaurants-btn"
          disabled={rickAndMortyCharacters?.length === 0}
          onClick={() => {
            const alinesOnly = rickAndMortyCharacters?.filter(
              (char) => char?.species === "Alien"
            );
            setRickAndMortyCharacters(alinesOnly);
          }}
        >
          Only Alines
        </button>
        <button
          className="top-rated-restaurants-btn"
          disabled={rickAndMortyCharacters?.length === 0}
          onClick={() => {
            getRickAndMortyData();
          }}
        >
          All Species
        </button>
      </div>
      {/* <div className="restaurant-container">
        {listOfRestaurants?.map((res, index) => (
          <RestaurantCard
            restaurantName={res?.info?.name}
            cuisines={res?.info?.cuisines?.join(",")}
            ratings={res?.info?.avgRatingString}
            address={res?.info?.areaName}
            imageUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/g0isknuhld1ltwxkjkcg"
            key={res?.info?.id}
          ></RestaurantCard>
        ))}
      </div> */}
      <div className="restaurant-container">
        {filteredRickAndMortyCharacters?.map((res, index) => (
          <RickAndMorty
            key={res?.id}
            name={res?.name}
            status={res?.status}
            location={res?.location?.name}
            image={res?.image}
            species={res?.species}
          ></RickAndMorty>
        ))}
      </div>
    </div>
  );
};

export default Body;
