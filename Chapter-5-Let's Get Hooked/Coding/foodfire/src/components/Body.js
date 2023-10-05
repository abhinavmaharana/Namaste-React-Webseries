import {useEffect, useState} from "react"
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
  
// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
const Body = () => {

  const [searchText, setSearchText] = useState("");
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  // Whenever state variables update, react triggers a reconcilation cycle(re-renders the component)
  // console.log("Body Rendered")

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();

    console.log(json);
    
    setListOfRestaurants(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  // if(listOfRestaurants?.length === 0) {
  //   return <Shimmer />;
  // }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
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
                const filteredList = listOfRestaurants.filter((listOfRestaurants) => listOfRestaurants?.info?.name.toLowerCase().includes(searchText.toLowerCase()));

                setListOfRestaurants(filteredList);
              }}
            >
              Search
            </button>
          </div>
          <button className="filter-btn" onClick={() => {
            // Filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList)
          }} >Top Rated Restaurants</button>
          
          <button className="filter-btn" onClick={() => {
            // Filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.deliveryTime < 20
            );
            setListOfRestaurants(filteredList)
          }} >Fast Delivery Time</button>

        </div>
        <div className="restaurant-list">
          {listOfRestaurants?.map((restaurant) => {
            return <RestaurantCard key={restaurant.info.id} {...restaurant.info} />;
          })}
        </div>
    </div>
  )
}

export default Body;