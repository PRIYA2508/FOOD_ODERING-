import  useRestaurantMenu from "../utli/useRestaurantMenu"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import RestaurantCategory from "./ReasturantCategory"

const RestaurantMenu = ()=>{
    
    const {resId} = useParams();
    const menu = useRestaurantMenu(resId)


    if(menu === null){
        return <Shimmer />
    }

    const {name , cuisines ,  
        costForTwoMessage
        } = menu?.cards[2]?.card?.card?.info;
        console.log(menu)

    const {itemCards} =  menu?.cards[4]?.groupedCard?.cardGroupMap?.
    REGULAR?.cards[1]?.card?.card 



    const categories = menu?.cards[4]?.groupedCard?.cardGroupMap?.
    REGULAR?.cards.filter(c=>c?.card?.card?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    console.log(categories)
    
    return(
        <div className="menu-card text-center">
            <h1 className="font-bold my-3 text-2xl">{name}</h1>
            <p>{cuisines.join(" , ")} - {costForTwoMessage} </p>
            <br/>

            {categories.map((category) =>(
                <RestaurantCategory key={category.card.card.title} data={category?.card?.card}/>
            ))}
           
             
            
        </div>
    )
}
export default RestaurantMenu   