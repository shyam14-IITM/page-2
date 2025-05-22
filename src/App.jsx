import { useState } from 'react'

import Nav from './Nav';
import Shop from './Shop';
import { ItemContext } from './ItemContext';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import { v4 as uuidv4 } from 'uuid';// for giving ids to items
import Cart from './Cart';

function App() {

const[cartItems,setCartItems]=useState([]) // items in the cart
const[items,setItems]=useState([{name:"Roundneck", id:uuidv4(), price:499}, {name:"Polo", id:uuidv4(), price:599}, {name:"Cap",id:uuidv4(),price:299}]); // items in the shop
  return (
    <>
    
    <ItemContext.Provider value={{cartItems,setCartItems, items, setItems}}>
    <Router>
      <Nav></Nav>
       <Routes>
      
        <Route exact path= "/" element={<Shop></Shop>}/>
        <Route exact path= "/cart" element={<Cart/>}/>
    
      </Routes>
    </Router>
   </ItemContext.Provider> 
    
    
    
    </>
  )
}

export default App
