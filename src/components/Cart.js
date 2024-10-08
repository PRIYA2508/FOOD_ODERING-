import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import {removeProduct} from "../utli/cartSlice"

const Cart = ()=>{
    const dispatch = useDispatch()
    const handelcart = ()=>{
    dispatch(removeProduct())
    }
 
    const cartItem = useSelector((state)=>state.cart.items)
    return(
        <div className="cart text-center m-3 p-3 " >
            <h1 className="text-xl font-bold">Cart</h1>
           < div className="w-6/12 m-auto">
           <ItemList  items={cartItem}/>  
           <button className="bg-black text-white border border-gray-400 rounded-lg p-3 text-lg "
              onClick={handelcart}
           >Clear Cart</button>
            </div>
           
        </div>
    )
}  

export default Cart;