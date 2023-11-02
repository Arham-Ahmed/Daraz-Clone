import "./Account.css";
import {Link} from "react-router-dom";
import {useState} from "react";
import Header from "../Header/Header";
import PageHeader from "../Header/PagesHeader/PageHeader";
import Footer from "../Footer/Footer";
const Account = () => {
const [On, SetOn]=useState(false);
const handleOnOff=()=>{
  if(!On){
 SetOn(true)
  }
  else{
 SetOn(false)
  }
}
const title = document.title="My Account";
  return (
  <div className="Account_Container">
    <div className="Headers">
      <div className="Desktop_Header">
        <Header/>
      </div>
      <div className="Mobile_Header">
        <PageHeader title={title} dots={true}/>
      </div>
    </div>
    <div className="Account_body">
      <div className="Account_body_Top">
        <h5 className="Top_Text">Hello, Welcom to Daraz!</h5>
      <Link to="/login" className="Login_SignUp">
        Login / SignUp
      </Link>
      </div>
     <div className="Account_body_Bottom">
        <ul className="Account_ul">
        <Link to="" className="Account_a">
          <div className="svg"></div>
          <div className="Text">My Order</div>
        </Link>
        <Link to="" className="Account_a">
          <div className="svg"></div>
          <div className="Text">My WishList & Followed Stores</div>
        </Link>
        <Link to="" className="Account_a">
          <div className="svg"></div>
          <div className="Text">Policies</div>
        </Link>
        <Link to="" className="Account_a">
          <div className="svg"></div>
          <div className="Text">Help Center</div>
        </Link>
        <Link to="" className="Account_a">
          <div className="svg"></div>
          <div className="Text">Chat With Us</div>
        </Link>
        </ul>
      </div>
      <div className="Promtional_Container">
        <p className="Text">I want to receive exclusive offers and promotions from Daraz.</p>
        <div className="btn" 
        onClick={(e)=>handleOnOff()}
        style={{
        background :On?"#25bddc":"#ededed",
        }}
        >
          <div className="btn_circle" style={{
          left : On?"1.8rem":"0",
          background :On?"#199CB7":"#ededed",
          transition: "all .40s ease",
          }}></div>
        </div>
      </div>
    </div>
    <div className="Footer">
      <div className="Desktop_Footer">
        <Footer bottom={false}/>
      </div>
    </div>
  </div>
  )
}

export default Account;