import {useState} from "react"
import { restaurantList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
  
// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
const Body = () => {

  const [searchText, setSearchText] = useState("");
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);

  return (
    <div className="body">
        <div className="filter">
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search a restaurant you want..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            >
            </input>
            <button
              className="search-btn"
              onClick={() => {
                const filteredList = listOfRestaurants.filter((listOfRestaurants) => listOfRestaurants?.data?.name.toLowerCase().includes(searchText.toLowerCase()));

                setListOfRestaurants(filteredList);
              }}
            >
              Search
            </button>
          </div>
          <button className="filter-btn" onClick={() => {
            // Filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredList)
          }} >Top Rated Restaurants</button>
          
          <button className="filter-btn" onClick={() => {
            // Filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.deliveryTime < 20
            );
            setListOfRestaurants(filteredList)
          }} >Fast Delivery Time</button>

        </div>
        <div className="restaurant-list">
          {listOfRestaurants?.map((restaurant) => {
            return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
          })}
        </div>
    </div>
  )
}

export default Body;