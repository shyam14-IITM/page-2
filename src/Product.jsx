import { useState } from "react";
import "./Product.css"
import { useContext } from "react";import { ItemContext } from "./ItemContext";

const Product = ({name,id, location,quantity}) => {

    // const [x, setX] = useState(0);
    // const [y, setY] = useState(0);

    // const handleMouseMove=(e)=>{
        
    //     let target=e.target;
    //     let rect=target.getBoundingClientRect();
    //     setX(e.clientX - rect.left);
    //     setY(e.clientY- rect.top); 
    //     target.style.setProperty("--x",`${x}px`);
    //     target.style.setProperty("--y",`${y}px`);
    // }
    
   const {items,setItems,cartItems,setCartItems}=useContext(ItemContext); // getting the items in shop and cart

   // adding to cart functiom
   const handleAdd=(name,id)=>{ 
   
    if(cartItems.length==0){                // if cart is empty
        cartItems.push({name:name,id:id,quantity:1}); //push the item in cart
        
    }
    else{
        for(let i=0;i<cartItems.length;i++){ // in non-empty cart, see if the clicked item is present or not 
            if(cartItems[i].id===id){
                let nArr=[...cartItems];        
                nArr[i].quantity=nArr[i].quantity+1;// if yes, then update quantity
                setCartItems(nArr);
                break;
            }
            else if (i===cartItems.length-1){
                let newArr=[...cartItems];
                newArr.push({name:name,id:id,quantity:1});// if no, then push the item
                setCartItems(newArr);
            }
        };
        // cartItems.push({name:name,id:id,quantity:0});
        
   }    

}
  const handleRemove=(name,id)=>{ //function to remove items
    let item=null;
    console.log(id);
    for (let i = 0; i < cartItems.length; i++) {
        if(cartItems[i].id==id){
            item=i;
        }
        
    }
    if(cartItems[item].quantity==1){
         let newCart=cartItems.filter((cartItem,idx)=>{
        return !( cartItem.id == id);
    });
    console.log(newCart);
    setCartItems(newCart);
  }
    else {
        let newCart=[...cartItems]
        newCart[item].quantity -=1
        setCartItems(newCart);


    }

    }
   
    
    return (  
        <div
        //  onMouseMove={(e)=>{
        //     handleMouseMove(e);
        // }
            
        // } 
        className="Product">
            <div className="item-img">
                <img src="item-img.png" alt="" />
            </div>
            <div className="item-info">
               <div>{name}  </div> 
               { location=="Cart" &&<div> Quantity: { quantity} </div>}  
                 <div>
                    
                    {/* for display in Shop */}
                    {location=="Shop" && <button onClick={()=>{console.log(id);handleAdd(name,id)}}> Add to Cart </button>}   
                    {/* for display in Cart */}
                    {location=="Cart" && <div className="inc-btn"> <button onClick={()=>{handleRemove(name,id)}}> - </button> <button onClick={()=>{console.log(id);handleAdd(name,id)}}>+ </button> </div>}

                 </div>
                 <div className="price">
                    499 INR
                 </div>
                 
            </div>
            
       
        </div>
    );
}
 
export default Product;