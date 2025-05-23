import { useContext,useEffect } from "react";
import { ItemContext } from "./ItemContext";
import Products from "./Products";
import "./Shop.css";
const Shop = () => {
    const {isDark,items,setItems, cartItems, setCartItems} =useContext(ItemContext);
    
    useEffect(()=>{  
      
      let shop=document.querySelector(".Shop");
      
     
      shop.style.backgroundColor= isDark?"#222":"";
    
    },[isDark])
    return ( // rendering the products in shop
        <div className="Shop"> 
            <Products items={items}></Products>  
        </div>
     );
}
 
export default Shop;