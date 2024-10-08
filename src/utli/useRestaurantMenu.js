import { useEffect, useState } from "react"
import { MENU_API } from "./constant"

const useRestaurantMenu = (resId)=>{
    const [menu,setmenu] = useState(null)

    useEffect(()=>{
     getMenu()  
    },[])

    const getMenu = async()=>{
        const fetchData = await fetch(MENU_API +resId);
        const json = await fetchData.json();
        console.log(json.data)
        setmenu(json.data)
    }
    return menu;  
}

export default useRestaurantMenu