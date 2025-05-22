import { useContext } from "react";
import Product from "./Product";
import './Products.css'
import { ItemContext } from "./ItemContext";
import Message from "./Message";

const Products = ({items}) => {
    return ( 
        <div className="Products">
            {
                items.map((item,idx)=>{
                    return <Product location = {"Shop"} name={item.name} id={item.id} key={item.id} price={item.price}></Product>
                })
            }
             <Message></Message>
        </div>
     );
}
 
export default Products;