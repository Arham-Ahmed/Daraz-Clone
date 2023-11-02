import React, { useEffect, useReducer } from "react";
import "./PageHeader.css";
import { Link,Router , useNavigate } from "react-router-dom";
import reducer from "../../../Reducers/dropReducer";

const intialState = {
  isAboutDrop: false,
  isLangdrop: false,
  islangCheck: true,
};
const PageHeader = ({ title ,dots }) => {
  const [state, dispatch] = useReducer(reducer, intialState);
  const handleSticky = () => {
    let Header = document.querySelector(".Page_header");
    Header.classList.toggle("sticky-page-header", window.scrollY > 100);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleSticky);
    window.addEventListener("load", handleSticky);

    return () => {
      window.removeEventListener("scroll", handleSticky);
    };
  });
  const navigate = useNavigate()
  return (
    <>
      <header className="Page_header">
      <div className="arrow-container" onClick={()=>navigate(-1)}>
        <div
     className="back-arrow"
      onClick={() => dispatch({ type: "ABOUT_DROP_CLOSE" })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="#fff"
              className="bi bi-chevron-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </div>
        </div>
         
       
        <div
          className="header-title"
          onClick={() => dispatch({ type: "ABOUT_DROP_CLOSE" })}
        >
          {title}
        </div>
        <div style={{
        display : dots===true? "flex":"none",
        }}
          className="drop-dots"
          onClick={() =>
            dispatch({
              type: "ABOUT_DROP",
            })
          }
          onMouseLeave={() => dispatch({ type: "ABOUT_DROP_CLOSE" })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="#fff"
            className="bi bi-three-dots"
            viewBox="0 0 16 16"
          >
            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
          </svg>
        </div>
        <div
          className="about-drop-down"
          style={{
            display: state.isAboutDrop ? "flex" : "none",
          }}
        >
          <ul
            className="drop-container"
            onMouseOver={() => dispatch({ type: "ABOUT_DROP" })}
            onMouseLeave={() => dispatch({ type: "ABOUT_DROP_CLOSE" })}
          >
            <Link to="/Login">
              <li>Login</li>
            </Link>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/Categories">
              <li>Categories</li>
            </Link>
            <Link to="/Account">
              <li>My Account</li>
            </Link>
            <Link to="/Order">
              <li>My Order</li>
            </Link>
            <Link to="/Wishlist">
              <li>My Wishlist</li>
            </Link>

            <li
              onClick={() =>
                dispatch({
                  type:
                    state.isLangdrop === false
                      ? "LANG_DROP"
                      : "LANG_DROP_CLOSE",
                })
              }
              onTouchStart={() => dispatch({ type: "ABOUT_DROP" })}
            >
              زبان تبدیل کریں
            </li>
            <ul
              className="About-Lang-drop"
              style={{
                display: state.isLangdrop ? "flex" : "none",
              }}
            >
              <li
                className="lang"
                onClick={() => dispatch({ type: "DIS_LANG_CHECK" })}
              >
                <img
                  src="https://vn-live-02.slatic.net/layout/build/components/495e912a6d07cf10252d94b513af5157.svg"
                  alt=""
                />
                <span>English</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="#1A9CB7"
                  className="bi bi-check-lg"
                  viewBox="0 0 16 16"
                  style={{
                    display: state.islangCheck === true ? "flex" : "none",
                  }}
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </li>
              <li
                className="lang"
                onClick={() => dispatch({ type: "DIS_LANG_CHECK_CLOSE" })}
              >
                <img
                  src="https://laz-img-cdn.alicdn.com/imgextra/i2/O1CN01DLFDAf1iNhn47MRRT_!!6000000004401-55-tps-40-40.svg"
                  alt=""
                />
                <span>Urdu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#1A9CB7"
                  className="bi bi-check-lg"
                  viewBox="0 0 16 16"
                  style={{
                    display: state.islangCheck === false ? "flex" : "none",
                  }}
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </li>
            </ul>

            <Link to="">
              <li>Need Help?</li>
            </Link>
            <Link to="">
              <li>Refer & Win</li>
            </Link>
          </ul>
        </div>
      </header>
    </>
  );
};

export default PageHeader;
