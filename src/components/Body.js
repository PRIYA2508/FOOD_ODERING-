
import RestaurantCard from "./Restaurant";
import { useState,useEffect } from 'react';
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";
import useonlineStatus from "../utli/useOnlineStatus"
//create a body component  
const Body = () => {
 
  let [ listOfRestaurants, setlistofres] = useState([]); 
  const[filterlist , setfilter] = useState([]);

  const [searchText, setSearchText] = useState('');
  
  useEffect(()=>{
    fetchdata();   
  }, []);

  const fetchdata = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6098012&lng=77.1001525&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const res = await data.json();
    // console.log(res.data);
     setlistofres(res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     setfilter(res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  //conditional rendering 
  // if(listOfRestaurants.length === 0){
  //   return <Shimmer />
  // }


  const onlineStauts = useonlineStatus()
  if(onlineStauts === false) return <h1>OOPS://LOOKS LIKE NO INTERNET</h1>

  return (listOfRestaurants.length === 0)? (<Shimmer />):  (
    <div className="body ">
      <div className=" filter flex">
      <div className="search m-4 p-4 ">
      <input 
      type="text"
      placeholder="Search for restaurant"
      className="border border-black border-solid rounded-lg m-4"
      value={searchText}
      onChange={(e)=>{setSearchText(e.target.value)}}
      />
      {/* whenever change local state vairable react render it's component */}
      <button className="bg-green-300 px-3 py-1 rounded-md"
      onClick={()=>{
      const filterres = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()))
      setfilter(filterres)

    
       }}> Search </button>
       </div>

       <div className="search m-4 p-5"> 
       <button className="px-3 py-1 rounded-md bg-gray-400 mt-2" 
        onClick={()=>{
      let filter = listOfRestaurants.filter(
      (Resturant)=>Resturant.info.avgRating>=4.4
      );
      setlistofres(filter);
      
        }}
      > 
       Top rated Restaurant 
        </button> 
        </div>
      </div>
 



      <div className="res-container flex flex-wrap ">{
      filterlist.map((restaurant)=>(
       <Link key={restaurant.info.id} to={"/restaurantmenu/"+restaurant.info.id}><RestaurantCard resData = {restaurant} /></Link>  
        ))}
      </div> 

    </div>
  );
    };
    

    
    


export default Body;