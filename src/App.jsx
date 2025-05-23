import { useEffect, useState } from 'react'

import Nav from './Nav';
import Shop from './Shop';
import { ItemContext } from './ItemContext';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import { v4 as uuidv4 } from 'uuid';// for giving ids to items
import Cart from './Cart';

function App() {
const [isDark, setIsDark] = useState(false);


const[cartItems,setCartItems]=useState([]) // items in the cart
const[items,setItems]=useState([{name:"Roundneck", id:uuidv4(), price:499, img:"item-img.png"}, {name:"Polo", id:uuidv4(), price:599, img:"item-img2.png"}, {name:"Cap",id:uuidv4(),price:299, img:"Cap.png"}]); // items in the shop
  return (
    <>
    
    <ItemContext.Provider value={{isDark,cartItems,setCartItems, items, setItems}}>
    <Router>
      <Nav isDark={isDark} setIsDark={setIsDark}></Nav>
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
