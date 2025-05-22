import {useState,useEffect, useContext, createRef } from "react"; import { ItemContext } from "./ItemContext";
import Product from "./Product";
import "./Cart.css"

const Cart = () => {
    const [total, setTotal] = useState(0);
  
    
    const { items, setItems, cartItems, setCartItems } = useContext(ItemContext);
     useEffect(function getTotal(){
        let sum=0;
        for (let i = 0; i < cartItems.length; i++) {
        sum=sum+cartItems[i].price * cartItems[i].quantity;
        
        }
        setTotal(sum);
        
    },[cartItems])
    
    return (
        <div className="Cart">
            <div>
                {

                    cartItems.map((cartItem) => {
                        return <Product key={cartItem.id} location={"Cart"} quantity={cartItem.quantity} name={cartItem.name} id={cartItem.id} price={cartItem.price}>   </Product>
                    })
                }
            </div>
            {
                cartItems.length != 0 && <div className="summary">
                    <h4>Summary</h4>
                    <div className="grid">
                        {
                        cartItems.map((item, idx) => {
                            return <>
                                <div>
                                    {item.name} 
                                </div>
                                <div>
                                    {item.price} INR x {item.quantity}
                                </div>



                            </>
                        })
                    }
                    <div>
                        Total
                    </div>
                    <div className="total-value">
                        {
                            total                    } INR
                    </div>
                    </div>
                    

                </div>

            }


        </div>
    );
}

export default Cart;