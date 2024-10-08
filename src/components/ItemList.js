import { useDispatch } from "react-redux"
import { CDN_URL } from "../utli/constant"
import { addProduct } from "../utli/cartSlice"

const ItemList = ({items})=>{ 

const dispatch = useDispatch();
const handle = (item)=>{
   dispatch(addProduct(item))
}
return(
    <div>
       {items.map((item)=>
        (<div key={item.card.info.id} 
        className="m-2 p-2 border-b-2 border-gray-300 text-left flex justify-between"     >
             <div className="w-9/12">
             <div className="py-2 "> 
                <span className=" text-lg">{item.card.info.name}</span>
                <span> - ₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
             </div>

            <div className="w-3/12 text-center ">
            <img src={CDN_URL+item.card.info.imageId} className="rounded-lg"/>  
            <button className="shadow-lg w-20 bg-green-400 text-white text-xl text-center rounded-md " onClick={()=>handle(item)}>Add+</button>
            </div>
        </div>
    ))}
    </div>
)
} 
export default ItemList