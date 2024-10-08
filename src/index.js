import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utli/UserContext';
import { Provider } from 'react-redux';
import appStore from './utli/appStore';
import Cart from './components/Cart';


//create a big component for whole app inside Our app layout component we have header , body , fotter
const AppLayout = ()=>{
 const [userName , setName] = useState();
 useEffect(()=>{
   const data = {
    name: "Priya Sharma"
   }
   setName(data.name)
 },[])  
return( 
    <Provider store={appStore }>
<UserContext.Provider value={{logIn:userName}}>
<div className="app">
    <Header/>
    <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>

);
};

const approuter = createBrowserRouter([
    {
        path : "/",
        element: <AppLayout/>,
        children: [
            {
                path : "Home/",
                element: <Body/>
            },
            {
                path : "/About",
                element: <About/>
            },
            {
             path :"/Contact",
             element: <Contact/>
            },
            {
                path : "/RestaurantMenu/:resId",
                element: <RestaurantMenu/>
            },
            {
                path: "/cart",
                element: <Cart/>
            }

        ],
        errorElement: <Error/>,
    },
   
   
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter}/>);