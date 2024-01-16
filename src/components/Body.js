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
      console.log(jsonResponse);
      setRickAndMortyCharacters(jsonResponse?.results);
      setFilteredRickAndMortyCharacters(jsonResponse?.results);
    } catch (error) {
      console.error(error);
    }
  };

  getRestaurantData = async () => {
    const url =
      "https://corsproxy.org/?" +
      encodeURIComponent(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
    const data = await fetch(url);
    const json = await data.json();
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(restaurants, "restaurants");

    setListOfRestaurants(restaurants);
    setFilteredListOfRestaurants(restaurants);
  };

  //use effect hook
  useEffect(() => {
    setTimeout(() => {
      getRickAndMortyData();
      getRestaurantData();
    }, 1000);
  }, []);

  if (rickAndMortyCharacters?.length === 0 && listOfRestaurants?.length == 0) {
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
            const search = e.target.value;
            setSearchText(search);
            console.log(searchText, search, "search text");
            const filterdCharacters = rickAndMortyCharacters?.filter((ch) =>
              ch.name.toLowerCase()?.includes(search.toLowerCase())
            );
            console.log(filterdCharacters, "filteredcharactyers");

            setFilteredRickAndMortyCharacters(filterdCharacters);
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
            setFilteredRickAndMortyCharacters(rickAndMortyCharacters);
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
            const topRestaurants = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4.2
            );
            setFilteredListOfRestaurants(topRestaurants);
            setFilteredRickAndMortyCharacters([]);
          }}
        >
          Top rated Restaurants
        </button>
        <button
          className="top-rated-restaurants-btn"
          onClick={() => {
            setFilteredListOfRestaurants(listOfRestaurants);
            setFilteredRickAndMortyCharacters([]);
            // getRickAndMortyData();
          }}
        >
          All Restaurants
        </button>
        <button
          className="top-rated-restaurants-btn"
          onClick={() => {
            setFilteredListOfRestaurants([]);
            setFilteredRickAndMortyCharacters(rickAndMortyCharacters);
          }}
        >
          Only Rick and Morty
        </button>
        <button
          className="top-rated-restaurants-btn"
          onClick={() => {
            setFilteredListOfRestaurants(listOfRestaurants);
            setFilteredRickAndMortyCharacters([]);
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
            setFilteredRickAndMortyCharacters(humansOnly);
            setFilteredListOfRestaurants([]);
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
            setFilteredRickAndMortyCharacters(alinesOnly);
            setFilteredListOfRestaurants([]);
          }}
        >
          Only Alines
        </button>
        <button
          className="top-rated-restaurants-btn"
          disabled={rickAndMortyCharacters?.length === 0}
          onClick={() => {
            setFilteredRickAndMortyCharacters(rickAndMortyCharacters);
            setFilteredListOfRestaurants([]);
          }}
        >
          All Species
        </button>
      </div>
      <div className="restaurant-container">
        {filteredListOfRestaurants?.map((res, index) => (
          <RestaurantCard
            restaurantName={res?.info?.name}
            cuisines={
              res?.info?.cuisines?.length > 4
                ? res?.info?.cuisines.splice(0, 4)?.join(",")
                : res?.info?.cuisines?.join(",")
            }
            ratings={res?.info?.avgRatingString}
            address={res?.info?.areaName}
            costForTwo={res?.info?.costForTwo}
            sla={res?.info.sla.slaString}
            imageUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/g0isknuhld1ltwxkjkcg"
            key={res?.info?.id}
          ></RestaurantCard>
        ))}
      </div>
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
