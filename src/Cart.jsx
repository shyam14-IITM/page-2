import { useContext } from "react"; import { ItemContext } from "./ItemContext";
import Product from "./Product";
import "./Cart.css"

const Cart = () => {
    const { items, setItems, cartItems, setCartItems } = useContext(ItemContext);
    return (
        <div className="Cart">
            <div>
                {

                    cartItems.map((cartItem) => {
                        return <Product key={cartItem.id} location={"Cart"} quantity={cartItem.quantity} name={cartItem.name} id={cartItem.id}>   </Product>
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
                                    499 INR
                                </div>



                            </>
                        })
                    }
                    <div>
                        Total
                    </div>
                    <div className="total-value">
                        
                    </div>
                    </div>
                    

                </div>

            }


        </div>
    );
}

export default Cart;