import "./Login.css"
import {useState} from "react"
import {Link} from "react-router-dom"
import skeimg from "./Skeleton.png"
const Signup = ({handleshowhide , atttribute}) => {
  return (
   <form method="post" className="Login_Container_Bottom_Form">
      <div className="Left_Form">
      <div className="Email_Container">
      <input className="Form_input" type="text" name="name_email" id="" required/>
      <label className="Form_Label" for="">Phone Number</label>
    </div>
    <div class="Password_Container">
      <input className="Form_input" type={atttribute} name="password" id=""  required/>
       <label className="Form_Label" for="">Verification Code</label>
      <span className="eye verify" >Verify</span>
      <span className="error">Invailed Credential !</span>
    </div>
      </div>
    <div className="Right_Form">
      <div className="Login">
        <button type="submit" className="loginbtn">
          Continue
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

export default Signup;