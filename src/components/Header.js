import {LOGO_URL} from "../utli/constant";
// create a header component
const Header = () =>{ 
    return(
    <div className="header">
        
    <div className="logo-container">
        <img className="logo" src= {LOGO_URL} />
    </div>
    <div className="navbar">
    
    <ul>
        <li>home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
    </ul>
    </div>
    </div>
    );
    };




    export default Header;



    