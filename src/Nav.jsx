import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = ({isDark, setIsDark}) => {
    return ( 
        <div className="Nav">
            <Link to="/"   className="logo">
            <div id='title'>
                <img id="logo" src="logo.png" alt="" /> Shaastra
            </div>
                
            </Link>
           
                <input className="search" type="text" placeholder='Search for Products'/>
                <img id='search-icon' src="search-line.svg" alt="" />
            <div className='nav-item-cont'>
                <div className="nav-item">Account</div>
                <Link to="/cart" className="nav-item" > Cart </Link>
                <div className="nav-item">Options</div>
                 <div className='nav-item theme-item' onClick={()=>{setIsDark(!isDark)}}> <img id="theme" src={isDark?"moon-fill.svg":"sun-fill.svg"} alt="" /></div>
            </div>
        </div>
     );
}
 
export default Nav;