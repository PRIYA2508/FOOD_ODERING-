import { useState,useEffect } from "react";
const User = ({name,contact})=>{
  const [newnum,setnewnum] = useState(0)
    return(
  <div className="user-card">
   <button onClick={()=>{
   if(newnum<20){
    setnewnum(newnum+1)
   }
   else{
    setnewnum(0)
   }
   }}>
    count
   </button>
    <h2>{newnum}</h2>
  <h2>Name:{name}</h2>
  <h2>Contact:{contact}</h2>  
  <h2>Location:India</h2>
  </div>
    );

}
export default User