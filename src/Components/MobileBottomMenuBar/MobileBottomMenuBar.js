import "./MobileBottomMenuBar.css";
import {NavLink} from "react-router-dom";
import {IoMdHome} from "react-icons/io";
import {FaShoppingCart} from "react-icons/fa";

import {FaUser} from "react-icons/fa";
const MobileBottomMenuBar = () => {
  return (
  <>
  <div className="MobileBottomMenuBar_Container">
    <ul className="MobileBottomMenuBar_ul">
      <NavLink className="MobileBottomMenuBar_a" to="">
       <li className="MobileBottomMenuBar_li">
     <div className="MobileBottomMenuBar_svg">
        <IoMdHome/>
      </div> 
      <span className="MobileBottomMenuBar_text">
        Home
      </span>
        </li>
      </NavLink>
      <NavLink className="MobileBottomMenuBar_a" to="/Categories">
       <li className="MobileBottomMenuBar_li">
     <div className="MobileBottomMenuBar_svg">
        <svg id="Layer_1" dataName="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 121.74"><path d="M5,0H49.39a5,5,0,0,1,3.53,1.47A5,5,0,0,1,54.4,5V49.19a5,5,0,0,1-5,5H5a5,5,0,0,1-3.55-1.47l-.09-.11A5,5,0,0,1,0,49.19V5A5,5,0,0,1,5,0ZM73.49,67.53h44.37a5.05,5.05,0,0,1,5,5v44.17a5,5,0,0,1-5,5H73.49A5,5,0,0,1,70,120.27l-.09-.11a4.94,4.94,0,0,1-1.38-3.44V72.55A5,5,0,0,1,70,69l.1-.1a5,5,0,0,1,3.44-1.38ZM5,67.53H49.39A5,5,0,0,1,52.92,69a4.94,4.94,0,0,1,1.48,3.54v44.17a5,5,0,0,1-5,5H5a5,5,0,0,1-3.55-1.47l-.09-.11A5,5,0,0,1,0,116.72V72.55a5,5,0,0,1,5-5ZM73.49,0h44.37a5,5,0,0,1,5,5V49.19a5,5,0,0,1-5,5H73.49a5,5,0,0,1-5-5V5A5,5,0,0,1,70,1.47l.1-.09A5,5,0,0,1,73.49,0Z"/></svg>
      </div> 
      <span className="MobileBottomMenuBar_text">
        Categories
      </span>
        </li>
      </NavLink>
      <NavLink className="MobileBottomMenuBar_a" to="/Cart">
       <li className="MobileBottomMenuBar_li">
     <div className="MobileBottomMenuBar_svg">
        <FaShoppingCart/>
      </div> 
      <span className="MobileBottomMenuBar_text">
        Cart
      </span>
        </li>
      </NavLink>
      <NavLink className="MobileBottomMenuBar_a" to="/Account">
       <li className="MobileBottomMenuBar_li">
     <div className="MobileBottomMenuBar_svg">
        <FaUser/>
      </div> 
      <span className="MobileBottomMenuBar_text">
        Account
      </span>
        </li>
      </NavLink>
    </ul>
  </div>
  </>
  )
}

export default MobileBottomMenuBar;