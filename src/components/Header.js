import {LOGO_URL} from "../utli/constant";
import {useState,useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utli/useOnlineStatus";
import UserContext from "../utli/UserContext";
import { useSelector } from "react-redux";

// create a header component
const Header = () =>{ 
    const [isLogin,setIsLogin] = useState("Login");
    const onlineStauts = useOnlineStatus();

    const {logIn} = useContext(UserContext)
    console.log(logIn)

     
    console.log(cartItem)
    return(
    <div className="flex justify-between bg-purple-400">
        
    <div className="w-20 m-1">
        <img className="logo" src= {LOGO_URL} />
    </div>
    <div className="navbar">
    
    <ul className="flex gap-5 m-4 p-4">
        <li>
            Online Status: {onlineStauts ? "✅" : "🔴"}
        </li>
        <li>
        <Link to="Home/">home</Link>  
            </li>

        <li>
        <Link to="Cart/">Cart({cartItem.length})</Link>
            
        </li>
        <li>
            <Link to="About/">About</Link>
            </li>
        <li>
            <Link to="Contact/">
            Contact
            </Link>
            </li>
        {/* <li>Cart-({cartItem.length} items)</li> */}


        <button onClick={()=>{
        isLogin==="Login"? setIsLogin("Logout"): setIsLogin("Login")
            }}
            >
                {isLogin}
            </button>
            <li>{logIn}</li>
    </ul>
    </div>
    </div>
    );
    };




    export default Header;



    