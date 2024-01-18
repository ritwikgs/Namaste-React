import { useEffect, useState } from "react";
import { MENU_API, BYPASS_CORS } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState(null);
  const { restaurantId } = useParams();
  console.log(
    encodeURI(
      BYPASS_CORS +
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.931636&lng=77.545565&restaurantId=49704&catalog_qa=undefined&submitAction=ENTER"
    )
  );

  const getMenu = async () => {
    try {
      const menu = await fetch(encodeURI(BYPASS_CORS + MENU_API));
      const menuJson = await menu.json();
      setMenu(menu);
      console.log(menuJson, "menu");
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getMenu();
  }, []);

  if (menu === null) {
    return <Shimmer />;
  }

  return (
    <div className="restaurant-menu">
      <h1>Name</h1>
      <img src=""></img>
      <h2>Menu</h2>

      <ul>
        <li>Biriyani</li>
        <li>Pizza</li>
        <li>Soft Drinks</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
