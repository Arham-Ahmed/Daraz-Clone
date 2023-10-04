import React, { useState, useRef } from "react";
import "./CateSidebar.css";
import cateData from "./CateData";
import { Link } from "react-router-dom";

export const CateSidebar = ({ style }) => {
  const [CName, SetCName] = useState();
  const [CSubName, SetCSubName] = useState();
  const [SubCate, SetSubCate] = useState([]);
  const [Display, SetDisplay] = useState(false);
  const [SubDisplay, SetSubDisplay] = useState(false);
  let cateitem = cateData.filter((x) => x.title === CName);
  return (
    <>
      <div
        className="catesidebar"
        style={{ borderRadius: style.bra, display: style.dis }}
      >
        <ul
          className="cate-sidebar-ul"
          onMouseLeave={(e) => {
            SetCName("");
            SetDisplay(false);
          }}
        >
          {cateData.map((x, i) => {
            return (
              <li
                className="cate-sidebar-ul-li "
                id={x.id}
                key={i}
                onMouseOver={(e) => {
                  SetCName(e.currentTarget.children[1].innerText);
                  // console.log(e.currentTarget.children[1].innerText);
                  SetDisplay(true);
                  // console.log(e.currentTarget.classList.toggle("k"));
                }}
              >
                <div className="icon-holder">{x.icon}</div>
                <Link to={x.href} className="cate-sidebar-ul-li-a">
                  {x.title}
                </Link>
                <span className="arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="0.75em"
                    viewBox="0 0 320 512"
                    fill="#F85606"
                  >
                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                  </svg>
                </span>
              </li>
            );
          })}
        </ul>
        <div
          className="catesidebar"
          id="cate-sidebar"
          style={
            Display
              ? {
                  display: "flex",
                  position: "absolute",
                  top: "-0.3rem",
                  left: "25rem",
                  borderTopLeftRadius: "1rem",
                  borderBottomLeftRadius: "1rem",
                  borderTopRightRadius: "0rem",
                  borderBottomRightRadius: SubDisplay ? "0rem" : "1rem",
                }
              : { display: "none" }
          }
        >
          <ul
            className="cate-sidebar-ul"
            id="cate-sidebar-ul"
            onMouseOver={(e) => {
              SetCName(CName);
              SetDisplay(true);
            }}
            onMouseLeave={(e) => {
              SetCName(CName);
              SetDisplay(false);
              SetSubDisplay(false);
            }}
          >
            {cateitem.map((x) =>
              x.submenu.map((sub, i) => {
                return (
                  <li
                    className="cate-sidebar-ul-li"
                    id={sub.id}
                    key={i}
                    onMouseOver={(e) => {
                      SetCSubName(e.currentTarget.firstChild.textContent);
                      SetSubCate(cateData.find((x) => x.title === CName));
                      SetSubDisplay(true);
                      x.submenu.find(
                        (x) =>
                          x.title === e.currentTarget.firstChild.textContent
                      ).insunmenu.length == 0
                        ? SetSubDisplay(false)
                        : SetSubDisplay(true);
                    }}
                    // onMouseLeave={(e) => {
                    //   SetSubDisplay(false);
                    //   SetCSubName(e.currentTarget.firstChild.textContent);
                    // }}
                  >
                    <Link to={sub.href} className="cate-sidebar-ul-li-a">
                      {sub.title}
                    </Link>
                    {SubDisplay ? (
                      <span className="arrow">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="0.75em"
                          viewBox="0 0 320 512"
                          fill="#F85606"
                        >
                          <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                        </svg>
                      </span>
                    ) : (
                      ""
                    )}
                  </li>
                );
              })
            )}
          </ul>
        </div>
        <div
          className="catesidebar insub-container"
          id="cate-sidebar"
          onMouseOver={(e) => {
            SetCName(CName);
            SetCSubName(CSubName);
            SetDisplay(true);
            SetSubDisplay(true);
          }}
          style={
            SubDisplay
              ? {
                  display: "flex",
                  position: "absolute",
                  top: "-0.3rem",
                  left: "48.5rem",
                  borderTopRightRadius: "1rem",
                  borderBottomRightRadius: "1rem",
                  borderTopLeftRadius: "0rem",
                  borderBottomLeftRadius: "0rem",
                  borderLeft: "1px solid #cccc",
                }
              : { display: "none" }
          }
        >
          <h3
            className="in-sub-h3"
            onMouseOver={(e) => {
              SetCName(CName);
              SetCSubName(CSubName);
              SetDisplay(true);
              SetSubDisplay(true);
            }}
            // onMouseLeave={(e) => {
            //   SetCName(CName);
            //   SetDisplay(false);
            //   SetSubDisplay(false);
            // }}
          >
            {CSubName}
          </h3>
          <ul
            className="cate-sidebar-ul insub-ul"
            id="cate-sidebar-ul"
            onMouseOver={(e) => {
              SetCName(CName);
              SetCSubName(CSubName);
              SetDisplay(true);
              SetSubDisplay(true);
            }}
            onMouseLeave={(e) => {
              SetCName(CName);
              SetDisplay(false);
              SetSubDisplay(false);
            }}
          >
            {cateitem.map((x) => {
              let { submenu } = x;
              return submenu
                .filter((y) => y.title === CSubName)
                .filter((x) => x.insunmenu)
                .map((x, i) => {
                  return x.insunmenu.map((sub, i) => {
                    return (
                      <li
                        className="cate-sidebar-ul-li in-sub"
                        id={sub.id}
                        key={i}
                        onMouseOver={(e) => {
                          SetSubDisplay(true);
                          SetDisplay(true);
                        }}
                        onMouseLeave={(e) => {
                          SetSubDisplay(false);
                          SetDisplay(false);
                        }}
                      >
                        <img src={sub.img} alt="" />
                        <Link to={sub.href} className="cate-sidebar-ul-li-a">
                          {sub.title}
                        </Link>
                      </li>
                    );
                  });
                });
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CateSidebar;
