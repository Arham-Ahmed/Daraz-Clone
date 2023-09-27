import { useEffect, useReducer } from "react";
import "./Header.css";
import { BrowserRouter, Link } from "react-router-dom";
import reducer from "../../Reducers/dropReducer";
import CateSidebar from "../CateSidebar/CateSidebar";

const intialState = {
  isSavedrop: false,
  isLangdrop: false,
  isHelpdrop: false,
  isheaderCate: false,
};

function Header() {
  const [state, dispatch] = useReducer(reducer, intialState);

  const handleSticky = () => {
    let Header = document.querySelector(".header");
    let Headercate = document.querySelector(".cate-dropdown");
    let topHeader = document.querySelector(".top-header");
    topHeader.classList.toggle("hidden", window.scrollY > 100);
    Header.classList.toggle("sticky", window.scrollY > 100);
    Headercate.classList.toggle("show", window.scrollY > 500);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleSticky);
    window.addEventListener("load", handleSticky);

    return () => {
      window.removeEventListener("scroll", handleSticky);
    };
  });

  return (
    <>
      <header className="header">
        <div className="top-header">
          <ul className="menu">
            <Link className="link" to="/bds">
              Become a Seller
            </Link>
            <Link className="link" to="/Dap">
              Daraz Affiliate Program
            </Link>
            <Link
              className="link"
              to="/sod"
              onMouseEnter={() => dispatch({ type: "HELP_DROP" })}
              onMouseLeave={() => dispatch({ type: "HELP_DROP_CLOSE" })}
              onTouchStart={() => dispatch({ type: "HELP_DROP" })}
              // onTouchEnd={() => dispatch({ type: "HELP_DROP_CLOSE" })}
            >
              Help & Support
            </Link>
            <div
              className="helpdrop"
              onMouseEnter={() => dispatch({ type: "HELP_DROP" })}
              onMouseLeave={() => dispatch({ type: "HELP_DROP_CLOSE" })}
              style={{
                height: state.isHelpdrop ? "35rem" : 0,
                padding: state.isHelpdrop ? "2.5rem 2.5rem 1rem" : 0,
                opacity: state.isHelpdrop ? 1 : 0,
                // transform: state.isHelpdrop ? "translateY(0px)" : "translateY(-400px)",
                transition: "all .40s ease",
              }}
            >
              <ul>
                <li className="help-items">
                  <span className="help-center"></span>
                  Help Center
                </li>
                <li className="help-items">
                  <span className="chatbot"></span>
                  Chat with us
                </li>
                <li className="help-items">
                  <span className="returns-refunds"></span>
                  Order
                </li>
                <li className="help-items">
                  <span className="shipping-delivery "></span>
                  Shipping & Delivery
                </li>
                <li className="help-items">
                  <span className="order-payment"></span>
                  Payment
                </li>
                <li className="help-items">
                  <span className="refund-money"></span>
                  Return & Refund
                </li>
                <li className="help-items">
                  <span className="purchase-protection"></span>
                  Purchase Protection
                </li>
              </ul>
            </div>
          </ul>
          <div
            className="savemore-cta"
            onMouseEnter={() => dispatch({ type: "SAVE_DROP" })}
            onMouseLeave={() => dispatch({ type: "SAVE_DROP_CLOSE" })}
          >
            <img
              className="saveimg"
              src="https://img.alicdn.com/imgextra/i1/O1CN01Ie2YnK1JmZ1mL3fY5_!!6000000001071-2-tps-60-60.png"
              alt=""
            />
            Save More on App
            <div
              className="savedrop"
              style={{
                padding: state.isSavedrop ? "3rem 0 0.6rem 0" : 0,
                height: state.isSavedrop ? "460px" : 0,
                opacity: state.isSavedrop ? 1 : 0,
                transition: "all .40s ease",
              }}
              onMouseEnter={() => dispatch({ type: "SAVE_DROP" })}
              onMouseLeave={() => dispatch({ type: "SAVE_DROP_CLOSE" })}
            >
              <div className="topimg">
                <img
                  src="https://icms-image.slatic.net/images/ims-web/d19edbfe-4ab9-486f-ba66-b29d80483a50.png"
                  alt=""
                />
                Enjoy More Discount With Daraz App!
              </div>
              <div className="btomimg">
                <div className="leftimg">
                  <img
                    src="https://icms-image.slatic.net/images/ims-web/8f2bd105-9cf3-45ba-af3d-ba979a63cc3c.png"
                    alt=""
                  />
                </div>
                <div className="rightimg">
                  <img
                    src="//img.alicdn.com/imgextra/i2/O1CN01bmAhAt1HlWuBzN0aF_!!6000000000798-2-tps-160-49.png"
                    alt=""
                  />
                  <img
                    src="//img.alicdn.com/imgextra/i3/O1CN01ISGiPM26cPQAYcTAq_!!6000000007682-2-tps-160-43.png"
                    alt=""
                  />
                  <img
                    src="//img.alicdn.com/imgextra/i1/O1CN01ci3iam1hfjuPi6NvE_!!6000000004305-2-tps-160-50.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-header">
          <div className="logo-search-cont">
            <img
              src="https://icms-image.slatic.net/images/ims-web/e650d6ca-1841-4646-b0e9-4ddbf2beb731.png"
              alt=""
              className="img"
            />
            <div
              className="cate-dropdown"
              onMouseEnter={() => dispatch({ type: "HEADER_CATE_DROP" })}
              onMouseLeave={() => dispatch({ type: "HEADER_CATE_CLOSE" })}
            >
              Categories
              <svg
                xmlns="http://www.w3.org/2000/svg"
                // height="1rem"
                fill="#fff"
                viewBox="0 0 512 512"
              >
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </div>
            <div className="search-container">
              <input
                type="text"
                name=""
                id=""
                placeholder="Search in Daraz"
                className="input"
              />
              <span className="search-icon">
                <svg
                  className="svg"
                  // style={{ width: "15px", height: "15px",fill :"#f85606",  }}
                  xmlns="http://www.w3.org/2000/svg"
                  // height="1.1em"
                  viewBox="0 0 512 512"
                >
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
              </span>
            </div>
          </div>
          <div className="l-s-btn">
            <ul>
              <li>
                <img
                  src="//img.alicdn.com/imgextra/i4/O1CN01kwkROp1vjm0trG3sl_!!6000000006209-2-tps-72-72.png"
                  alt=""
                />
                Login
              </li>
              <li>|</li>
              <li>Sign Up</li>
            </ul>
          </div>
          <div
            className="lang"
            onMouseEnter={() => dispatch({ type: "LANG_DROP" })}
            onMouseLeave={() => dispatch({ type: "LANG_DROP_CLOSE" })}
          >
            <img
              src="//img.alicdn.com/imgextra/i2/O1CN01kCOXEJ24smLMboKkc_!!6000000007447-2-tps-72-72.png"
              alt=""
            />
            <h3>EN</h3>
            <span>&gt;</span>
            <div
              className="lang-drop"
              style={{
                height: state.isLangdrop ? "120px" : 0,
                opacity: state.isLangdrop ? 1 : 0,
                transition: "all .40s ease",
              }}
              onMouseEnter={() => dispatch({ type: "LANG_DROP" })}
              onMouseLeave={() => dispatch({ type: "LANG_DROP_CLOSE" })}
            >
              <span>Select Language</span>
              <div className="Each-lang">
                <input id="langs" type="radio" name="lang" value="urdu" />
                UR / Urdu
              </div>
              <div className="Each-lang">
                <input
                  id="langs"
                  name="lang"
                  type="radio"
                  value="english"
                  checked
                />
                EN / English
              </div>
            </div>
          </div>
          <div className="cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="#fff"
              className="bi bi-cart"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
          </div>
          <div
            className="cate-container"
            onMouseEnter={() => dispatch({ type: "HEADER_CATE_DROP" })}
            onMouseLeave={() => dispatch({ type: "HEADER_CATE_CLOSE" })}
            style={{ display: state.isheaderCate === true ? "flex" : "none" }}
          >
            <CateSidebar style={{ bra: "none" }} />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
