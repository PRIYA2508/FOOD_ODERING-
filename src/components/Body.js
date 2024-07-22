//import Resturant card
import RestaurantCard from "./Restaurant";
import resObj from "../utli/mockdata";
import { useState } from "react";
// import { useEffect } from "react";
//create a body component  
const Body = () => {
  let [ listofres, setlistofres] = useState(resObj);
    return (
      <div className="body">
        <div className="filter">
          <button 
          className="filter-btn" 
          onClick={()=>{
        let filter = resObj.filter(
        (Resturant)=>Resturant.info.avgRating>=4.4
        );
        setlistofres(filter);
        console.log(filter);
          }}> 
          click me
          </button>
        </div>


      
        
        <div className="res-container">
          {/* <RestaurantCard  resData = {resObj[0]} />
          <RestaurantCard  resData = {resObj[1]} />
          <RestaurantCard  resData = {resObj[2]} />
          <RestaurantCard  resData = {resObj[3]} />
          <RestaurantCard  resData = {resObj[4]} />
          <RestaurantCard  resData = {resObj[5]} />
          <RestaurantCard  resData = {resObj[6]} />
          <RestaurantCard  resData = {resObj[7]} />
           */}
           {listofres.map((Resturant)=>
          <RestaurantCard key={Resturant.info.id} resData = {Resturant} />)}

        </div> 

      </div>
    );
};

export default Body;