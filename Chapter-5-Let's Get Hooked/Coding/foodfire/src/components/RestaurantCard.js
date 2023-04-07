import { CON_URL } from "../utils/constants";

const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating,
    deliveryTime,
}) => {
  return (
    <div className="card">
      <img
        src={
          CON_URL +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{area}</h4>
      <span>
      <h4><i className="fa-solid fa-star"></i>{avgRating}</h4>
        <h4>{lastMileTravelString}</h4>
        <h4>{costForTwoString}</h4>
        <h4>{deliveryTime} min</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;