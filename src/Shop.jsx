import { useContext } from "react";
import { ItemContext } from "./ItemContext";
import Products from "./Products";
import "./Shop.css";
const Shop = () => {
    const {items,setItems, cartItems, setCartItems} =useContext(ItemContext); 
    return ( // rendering the products in shop
        <div className="Shop"> 
            <Products items={items}></Products>  
        </div>
     );
}
 
export default Shop;