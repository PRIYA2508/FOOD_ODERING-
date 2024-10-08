 import {CDN_URL} from "../utli/constant";

const RestaurantCard = ({resData})=>{
    // const {resData} = props;

    const {name,cuisines,areaName,avgRating,cloudinaryImageId } = resData?.info
      return(
  <div className=" h-[400px] w-[200px] m-4 p-4 border border-solid border-black bg-gray-200 rounded-md">
  <img
  className="res-logo h-[160px] w-[240px] rounded-[50%]"
  src={CDN_URL+cloudinaryImageId}
  />
  
  <h3 className="text-black font-bold py-1  ">{name}</h3> 
  <h5 className="whitespace-normal break-words">{cuisines.join(",")}</h5> 
  <h5>{areaName}</h5>
  <h6>{avgRating }</h6>
  </div>
  );
  };

  export default RestaurantCard;