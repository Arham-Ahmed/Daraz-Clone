import {useState} from "react"
import {Link} from "react-router-dom"
import {PiEyeLight ,PiEyeClosedLight} from "react-icons/pi"
import {BiLogoFacebook ,BiLogoGooglePlus} from "react-icons/bi"
// import "./LoginSignupPage.css"
import Login from "./Login.js"
import Signup from "./Signup.js"
import Header from "../Header/Header";
import PageHeader from "../Header/PagesHeader/PageHeader.js";
import Footer from "../Footer/Footer";
import MobileBottomMenuBar from "../MobileBottomMenuBar/MobileBottomMenuBar";
import "./Login.css"
import skeimg from "./Skeleton.png"
const LoginSignupPage = ({signupPage}) => {

const [atttribute,Setatttribute]=useState("password")
const title = document.title="Login / SignUp"
const [ActiveTab,SetActiveTab]=useState(true)
const handleshowhide =()=>{
if (atttribute==="password") {
  Setatttribute("text")
}else{
  Setatttribute("password")
}
}
  return (
  <>
  <div className="Login_Container">
  <div className="Header_Container">
     <div className="Desktop_Header">
        <Header/>
      </div>
      <div className="Mobile_Header">
        <PageHeader title={title} dots={false}/>
      </div>
    </div>
  <div className="Login_Container_Body">
    <div className="Login_Container_Top">
        <div className="Login_Heading">
        {
          !signupPage?
          "Welcome to Daraz! Please Login."
          :"Create your Daraz Account"
        }
        </div>
        <div className="SignUpCalltoAction">
         {
            !signupPage ?
          `New Member? `
          :
          `Already Member? `
         }
          <Link to={!signupPage?"/signup":"/login"}>
           { !signupPage ? "Register" :"Login" }
          </Link>
          
           &nbsp; here.
          </div>
      </div>
      {!signupPage?
     <form method="post" className="Login_Container_Bottom_Form">
      <div className="Left_Form">
          <label className="Form_Label" for="">Phone Number or Email*</label>
      <input className="Form_input" type="text" placeholder="Please Enter Your Phone Number or Email" name="" id="" />
    <label className="Form_Label" for="">Password*</label>
    <div class="Password_Container">
      <input className="Form_input" type={atttribute} placeholder="Please Enter Your Password" name="" id="" />
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
        Or Login with.
      </div>
      <div className="Bottom_Login">
        <Link className="loginbtn">
         <div className="social_logo">
            <BiLogoFacebook/>
          </div>
          Facebook
        </Link>
      <Link className="loginbtn_google">
        <div className="social_logo">
            <BiLogoGooglePlus/>
          </div>
          Google
        </Link>
      </div>
      </div>
     </form>
     :
      <form method="post" className="Login_Container_Bottom_Form">
    <div className="Left_Form">
        <label className="Form_Label" for="">Phone Number*</label>
      <input className="Form_input" type="text" placeholder="Please Enter Your Phone Number" name="" id="" />
        
     
    <label className="Form_Label" for="">Verification code from Whatapp*</label>
    <div class="Password_Container">
      <input className="Form_input" type="text" placeholder="Verification Code" name="" id="" />
      <span className="eye ">Send</span>
    <label className="Form_Label" for="">Password*</label>
    <div class="Password_Container">
      <input className="Form_input" type={atttribute} placeholder="Maximum 6 character with a number and letter" name="" id="" />
      <span className="eye" onClick={()=>handleshowhide()}>{atttribute==="password"?<PiEyeClosedLight/>:<PiEyeLight/>}</span>
      <span className="error">Invailed Credential !</span>
    </div>
      </div>
    <div className="Birthday_Gender_Container">
    <div className="Birthday_Container">
    <span className="heading">Birthday</span>
    <div className="B_Box_Container">
    <div className="B_Box  Month">
    <div className="text">Month</div>
    <div className="svg"> <svg
                xmlns="http://www.w3.org/2000/svg"
                // height="1rem"
                
                viewBox="0 0 512 512"
              >
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg></div>
    </div>
    <div className="B_Box  Day">
    <div className="text">Day</div>
    <div className="svg"> <svg
                xmlns="http://www.w3.org/2000/svg"
                // height="1rem"
                
                viewBox="0 0 512 512"
              >
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg></div>
    </div>
    <div className="B_Box  Year">
    <div className="text">Year</div>
    <div className="svg"> <svg
                xmlns="http://www.w3.org/2000/svg"
                // height="1rem"
                
                viewBox="0 0 512 512"
              >
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg></div>
    </div>
    </div>
    </div>
    <div className="Gender_container">
    <span className="heading">Gender</span>
     <div className="B_Box_Container">
     <div className="B_Box">
    <div className="text">Select</div>
    <div className="svg"> 
    <svg
                xmlns="http://www.w3.org/2000/svg"
                // height="1rem"
                
                viewBox="0 0 512 512"
              >
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg></div>
    </div>
     </div>
    </div>
    </div>
      </div>
    <div className="Right_Form">
    
     <div className="FullName_Container">
      <label className="Form_Label" for="">FullName*</label>
          <input className="Form_input" type="text" placeholder="Please Enter Your FullName" name="" id="" />
    </div>
    
      <div className="Login">
        <button type="submit" className="loginbtn">
          Login
          </button>
        Or Login with.
      </div>
      <div className="Bottom_Login">
        <Link className="loginbtn">
         <div className="social_logo">
            <BiLogoFacebook/>
          </div>
          Facebook
        </Link>
      <Link className="loginbtn_google">
        <div className="social_logo">
            <BiLogoGooglePlus/>
          </div>
          Google
        </Link>
      </div>
      </div>
     </form> 
      }
      
      
    </div>
  <div class="For_Mobile">
    <div class="LoginSignup_Tabs">
    <div class="Tab" style={{
    borderBottom : ActiveTab ? "0.6rem solid #ff732e":"none",
    color:ActiveTab ? "#f85606":"#afafaf",
    }} onClick={()=>SetActiveTab(true)}>Login</div>
    <div class="Tab" style={{
    borderBottom : ActiveTab === false ? "0.6rem solid #ff732e":"none",
    color:ActiveTab===false ? "#f85606":"#afafaf",
    }}
  onClick={()=>SetActiveTab(false)}>SignUp</div>
    </div>
   {
   ActiveTab && <Login handleshowhide={handleshowhide} atttribute={atttribute}/>
   }
  {
  !ActiveTab && <Signup handleshowhide={handleshowhide} atttribute={atttribute}/>
  }
    
    </div>
    
     <div className="Footer_Container">
        <Footer bottom={false}/>
    </div>
  </div>
  </>
  )
}

export default LoginSignupPage;