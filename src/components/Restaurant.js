import {CDN_URL} from "../utli/constant";

const RestaurantCard = ({resData})=>{
    // const {resData} = props;
      return(
  <div className="res-card">
  <img
  className="res-logo"
  src={CDN_URL+resData.info.cloudinaryImageId}
  />
  
  <h3>{resData.info.name}</h3> 
  <span>{resData.info.cuisines.join(",")}</span> 
  <h5>{resData.info.areaName}</h5>
  <h6>{resData.info.avgRating }</h6>
  </div>
  );
  };

  export default RestaurantCard;