import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";







//create a big component for whole app inside Our app layout component we have header , body , fotter
const AppLayout = ()=>{
return(
<div className="app">
    <Header  />
    <Body/>
    </div>

);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);