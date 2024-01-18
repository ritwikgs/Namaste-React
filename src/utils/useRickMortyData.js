import { useState, useEffect } from "react";
import { RICK_MORTY_URL } from "./constants";

const useRickMortyData = (initial) => {
  const [rickMortyData, setRickAndMortyData] = useState([]);

  useEffect(() => {
    fetchRickMortyData();
  }, []);

  const fetchRickMortyData = async () => {
    try {
      const data = await fetch(RICK_MORTY_URL);
      const jsonData = await data.json();
      setRickAndMortyData(jsonData?.results);
    } catch (error) {
      console.error(error);
    }
  };

  return rickMortyData;
};

export default useRickMortyData;
