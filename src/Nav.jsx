import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return ( 
        <div className="Nav">
            <Link to="/"   className="logo">
                ShaastraKart
            </Link>
           
                <input className="search" type="text" placeholder='Search for Products'/>
                <img src="search-line.svg" alt="" />
            <div className='nav-item-cont'>
                <div className="nav-item">Account</div>
                <Link to="/cart" className="nav-item" > Cart </Link>
                <div className="nav-item">Options</div> 
            </div>
        </div>
     );
}
 
export default Nav;