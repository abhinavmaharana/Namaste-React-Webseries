import { CON_URL } from "../utils/constants";

const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    areaName,
    lastMileTravelString,
    costForTwo,
    avgRating,
    sla,
}) => {
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={
          CON_URL +
          cloudinaryImageId
        }
      />
      <h2 className="font-bold py-4 text-lg">{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{areaName}</h4>
      <span>
        <h4><i className="fa-solid fa-star"></i>{avgRating}</h4>
        <h4>{lastMileTravelString}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} min</h4>
      </span>
    </div>
  );
};


export const withPromotedLabel = (RestaurantCard) => {
  return ({
    cloudinaryImageId,
    name,
    cuisines,
    areaName,
    lastMileTravelString,
    costForTwo,
    avgRating,
    sla,
  }) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard 
          cloudinaryImageId={cloudinaryImageId}
          name={name}
          cuisines={cuisines}
          areaName={areaName}
          lastMileTravelString={lastMileTravelString}
          costForTwo={costForTwo}
          avgRating={avgRating}
          sla={sla}
        />
      </div>
    )
  }
}

export default RestaurantCard;