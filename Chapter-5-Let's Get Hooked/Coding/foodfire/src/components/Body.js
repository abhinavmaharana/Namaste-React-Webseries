import { useState, useEffect, useContext } from "react";
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
  
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
    const data = await fetch("https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D12.9351929%26lng%3D77.62448069999999%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING");

    const json = await data.json();

    console.log(json);
    
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])
  }

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) return <h1>Looks like you're offline!! Please check your internet connection</h1>

  // if(listOfRestaurants?.length === 0) {
  //   return <Shimmer />;
  // }
  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
        <div className="filter flex">
          <div className="search m-4 p-4">
            <input
              type="text"
              data-testid="searchInput"
              className="border border-solid border-black"
              placeholder="Search a restaurant you want..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            >
            </input>
            <button
              className="px-4 py-2 bg-green-100 m-4 rounded-lg"
              onClick={() => {
                const filteredList = listOfRestaurants.filter((listOfRestaurants) => listOfRestaurants?.info?.name.toLowerCase().includes(searchText.toLowerCase()));

                setListOfRestaurants(filteredList);
              }}
            >
              Search
            </button>
          </div>
          <div className="search m-4 p-4 flex items-center">
          <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {
            // Filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList)
          }} >Top Rated Restaurants</button>
          
          <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {
            // Filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.deliveryTime < 20
            );
            setListOfRestaurants(filteredList)
          }} >Fast Delivery Time</button>
          </div>
          <div className="search m-4 p-4 flex items-center">
            <label>UserName : </label>
            <input
              className="border border-black p-2"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            />
        </div>
        </div>
        <div className="flex flex-wrap">
          {listOfRestaurants?.map((restaurant) => {
            {/* If the restaurant is promoted then add a promoted label to it */}
            return (
              <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                {restaurant.info.promoted ? ( 
                  <RestaurantCardPromoted {...restaurant.info} />
                ) : (
                  <RestaurantCard  {...restaurant.info} />
                )}
              </Link>
            );
          })}
        </div>
    </div>
  )
}

export default Body;