import {Link} from "react-router-dom"
import {useState} from "react"
import {PiEyeLight ,PiEyeClosedLight} from "react-icons/pi"
import Header from "../Header/Header";
import PageHeader from "../Header/PagesHeader/PageHeader.js";
import Footer from "../Footer/Footer";
import MobileBottomMenuBar from "../MobileBottomMenuBar/MobileBottomMenuBar";
import "./Login.css"
import skeimg from "./Skeleton.png"
const Login = ({handleshowhide ,atttribute}) => {
  return (
    <form method="post" className="Login_Container_Bottom_Form">
      <div className="Left_Form">
      <div className="Email_Container">
      <input className="Form_input" type="text" name="name_email" id="" required/>
      <label className="Form_Label" for="">Phone Number or Email</label>
    </div>
    <div class="Password_Container">
      <input className="Form_input" type={atttribute} name="password" id=""  required/>
       <label className="Form_Label" for="">Your Password</label>
      <span className="eye" onClick={()=>handleshowhide()}>{atttribute==="password"?<PiEyeClosedLight/>:<PiEyeLight/>}</span>
      <span className="error">Invailed Credential !</span>
    </div>
    <Link className="resetpassword" id="resetpassword" to="/resetpassword">Reset Your Password</Link>
      </div>
    <div className="Right_Form">
      <div className="Login">
        <button type="submit" className="loginbtn">
          Login
          </button>
     <div class="lines">
      <div className="line"></div>  Or<div className="line"> </div>
      </div>
      </div>
      <div className="Bottom_Login">
        <Link className="loginbtn">
          <div className="social_logo">
            <img  src="https://laz-img.alicdn.com/tfs/TB1wGErw7T2gK0jSZPcXXcKkpXa-96-96.png" alt="Facebook logo" onError={(e)=>e.target.src=skeimg}/>
          </div>
          Facebook
        </Link>
        <Link className="loginbtn_google"> 
        <div className="social_logo">
            <img  src="https://laz-img.alicdn.com/tfs/TB1_TgtwVP7gK0jSZFjXXc5aXXa-92-92.png" alt="Google Logo" onError={(e)=>e.target.src=skeimg} />
          </div>
          Google
        </Link>
      </div>
      </div>
     </form>
  )
}

export default Login;