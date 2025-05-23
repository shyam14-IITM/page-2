import { useState } from "react";
import "./Product.css"
import { useContext } from "react";import { ItemContext } from "./ItemContext";



const Product = ({name,id, location,quantity, price,img}) => {

    // const [x, setX] = useState(0);  for a styling effect...
    // const [y, setY] = useState(0);

    // const handleMouseMove=(e)=>{
        
    //     let target=e.target;
    //     let rect=target.getBoundingClientRect();
    //     setX(e.clientX - rect.left);
    //     setY(e.clientY- rect.top); 
    //     target.style.setProperty("--x",`${x}px`);
    //     target.style.setProperty("--y",`${y}px`);
    // }
    
   const {isDark,items,setItems,cartItems,setCartItems}=useContext(ItemContext); // getting the items in shop and cart

   // adding to cart  
   const handleAdd=(name,id,price)=>{ 
   
    if(cartItems.length==0){                // if cart is empty
        cartItems.push({name:name,id:id,quantity:1,price:price,img:img}); //push the item in cart
         
        
        let msg=document.querySelector(".Message");
        msg.style.opacity=1;
        setTimeout(()=>{
            msg.style.opacity=0;
             setTimeout(()=>{
                msg.style.display="none";
            
             },200)
        },1200)
    }
    else{
        for(let i=0;i<cartItems.length;i++){ // in non-empty cart, see if the clicked item is present or not 
            if(cartItems[i].id===id){
                let newArr=[...cartItems];        
                newArr[i].quantity=newArr[i].quantity+1;// if yes, then update quantity
                setCartItems(newArr);
                break;
            }
            else if (i===cartItems.length-1){
                let newArr=[...cartItems];
                newArr.push({name:name,id:id,quantity:1, price:price,img:img});// if no, then push the item
                setCartItems(newArr);
            }
        };
        let msg=document.querySelector(".Message");
        msg.style.display="block"
        msg.style.opacity=1;
        
        

        setTimeout(()=>{
             msg.style.opacity=0;
             setTimeout(()=>{
                msg.style.display="none";
            
             },200)
            
        },1500)
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
        className= {isDark?"dark Product":"Product"}>
            <div className="item-img">
                <img src={img} alt="" />
                
            </div>
            <div className="item-info">
               <div>{name} <br />
               Material: Cotton <br />
               Size: M  </div> 
               { location=="Cart" &&<div> Quantity: { quantity} </div>}  
                 <div>
                    
                    {/* for display in Shop */}
                    {location=="Shop" && <button onClick={()=>{console.log(id);handleAdd(name,id,price)}}> Add to Cart </button>}   
                    {/* for display in Cart */}
                    {location=="Cart" && <div className="inc-btn"> <button onClick={()=>{handleRemove(name,id)}}> - </button> <button onClick={()=>{console.log(id);handleAdd(name,id,price)}}>+ </button> </div>}

                 </div>
                 <div className="price">
                    {price} INR
                 </div>
                 
            </div>
           
       
        </div>
    );
}
 
export default Product;