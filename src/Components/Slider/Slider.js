import React, { useState, useEffect } from "react";
import "./Slider.css";
import { CateSidebar } from "../CateSidebar/CateSidebar";
const Slider = ({ items, imgWidth }) => {
  const [dragging, setDragging] = useState(false);
  const [over, setOver] = useState(false);
  const [startX, setStartX] = useState(null);
  const [currentPosX, setCurrentPosX] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  const datloader = () => {
    if (items.length !== 11) {
      items.push(items[0]);
      items.unshift(items[items.length - 2]);
    } else {
      return () => {};
    }
  };
  datloader();
  const slicearr1 = () => {
    return items.slice(0, 14);
  };

  const moveRight = () => {
    let slider = document.querySelector(".slider");
    slider.style.transition = "transform 700ms cubic-bezier(0, 0, 0.25, 1)";
    setCurrentIndex(currentIndex + 1);
  };
  const moveLeft = () => {
    let slider = document.querySelector(".slider");
    slider.style.transition = "transform 700ms cubic-bezier(0, 0, 0.25, 1)";
    setCurrentIndex(currentIndex - 1);
  };

  const transend = () => {
    let slider = document.querySelector(".slider");
    let slideimg = document.querySelectorAll(".slide-img");
    if (currentIndex === 0) {
      slider.style.transition = "none";
      setCurrentIndex(slideimg.length - 2);
    }
    if (currentIndex === slideimg.length - 1) {
      slider.style.transition = "none";
      setCurrentIndex(1);
      setTimeout(() => {
        slider.style.transition = "transform 700ms cubic-bezier(0, 0, 0.25, 1)";
      }, 1000);
    }
  };

  useEffect(() => {
    let slider = document.querySelector(".slider");
    slider.addEventListener("transitionend", transend);
    return () => {
      slider.removeEventListener("transitionend", transend);
    };
  });

  const getClientX = (e) => {
    return e.type.startsWith("touch") ? e.touches[0].clientX : e.clientX;
  };
  const handleMouseDown = (e) => {
    setDragging(true);
    setStartX(getClientX(e));
    let slider = document.querySelector(".slider");
    slider.style.transition = "none";
  };
  const handleMouseUp = (e) => {
    if (!dragging) return;
    setDragging(false);
    let slider = document.querySelector(".slider");
    slider.style.transition = "transform 700ms cubic-bezier(0, 0, 0.25, 1)";

    const slideWidth = imgWidth;
    const snapThreshold = slideWidth / 18;
    if (Math.abs(currentPosX) > snapThreshold) {
      const direction = currentPosX < 0 ? 1 : -1;
      setCurrentIndex(currentIndex + direction);
    }
    if (Math.abs(currentPosX) > slider.offsetWidth / 2) {
      if (currentPosX < 0) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(currentIndex - 1);
      }
    }

    transend();
    setCurrentPosX(0);
  };
  const handleMouseMove = (e) => {
    if (!dragging) return;
    const deltaX = getClientX(e) - startX;
    setCurrentPosX(deltaX);
    let slider = document.querySelector(".slider");
    slider.style.transform = `translateX(calc(-${
      currentIndex * 100
    }% + ${deltaX}px))`;
  };
  const handleMouseLeave = (e) => {
    setOver(true);
    if (!dragging) return;
    setDragging(false);
    let slider = document.querySelector(".slider");
    slider.style.transition = "transform 700ms cubic-bezier(0, 0, 0.25, 1)";

    const slideWidth = imgWidth;
    const snapThreshold = slideWidth / 18;
    if (Math.abs(currentPosX) > snapThreshold) {
      const direction = currentPosX < 0 ? 1 : -1;
      setCurrentIndex(currentIndex + direction);
    }
    if (Math.abs(currentPosX) > slider.offsetWidth / 2) {
      if (currentPosX < 0) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(currentIndex - 1);
      }
    }
  };

  const autoscroll = () => {
    setCurrentIndex((peridex) => {
      const nextindex = (peridex + 1) % items.length;
      return nextindex;
    });
  };
  useEffect(() => {
    if (over === true) return;
    const autoscrolll = setInterval(autoscroll, 3000);
    return () => {
      clearInterval(autoscrolll);
    };
  });

  return (
    <>
      <div className="main-slider-cont">
      <CateSidebar style={{
        bra :"1rem",
      }} />
        <div
          className="cotnainer-slider"
          onMouseOver={() => setOver(true)}
          onMouseLeave={() => setOver(false)}
        >
          <div
            className="slider"
            style={{
              transition: "transform 450ms cubic-bezier(0, 0, 0.25, 1)",
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            onTouchStart={handleMouseDown}
            onTouchMove={handleMouseMove}
            onTouchEnd={handleMouseLeave}
            onTouchStartCapture={handleMouseMove}
          >
            {items.map((ele, index) => {
              return (
                <div
                  key={index}
                  className="slide-img"
                  style={{
                    width: `${imgWidth}`,
                    display: "flex",
                    cursor: `${dragging ? "grabbing" : " grab"}`,
                  }}
                >
                <picture className="img" id={index}>
                  <source
                    media="(max-width:800px)"
                    srcset={ele.srcset}
                  />
            <img src={ele.img} width={imgWidth} alt="" />
                  </picture>
                  <button
                    className=" button right-arrow"
                    style={{
                      position: "absolute",
                      top: "40%",
                      right: "0%",
                      zIndex: "11111",
                    }}
                    onClick={() => moveRight()}
                  >
                    <img
                      src="//lzd-img-global.slatic.net/g/tps/imgextra/i3/O1CN01ZOuN0L20G4QOewAtR_!!6000000006821-2-tps-24-24.png"
                      alt="forward-arrow"
                    />
                  </button>
                  <button
                    className=" button left-arrow"
                    style={{
                      position: "absolute",
                      top: "40%",
                      left: "0%",
                      zIndex: "11111",
                    }}
                    onClick={() => moveLeft()}
                  >
                    <img
                      src="//lzd-img-global.slatic.net/g/tps/imgextra/i3/O1CN01oDB6Gj23JE04rxV5u_!!6000000007234-2-tps-24-24.png"
                      alt="backward-arrow"
                    />
                  </button>
                </div>
              );
            })}
          </div>
          <span className="indicators">
            {slicearr1().map((_, i) => {
              return (
                <button
                  key={i}
                  id={i}
                  className={
                    currentIndex === i ? "indicator" : "indicator-inactive"
                  }
                  onMouseOver={() => {
                    setCurrentIndex(i);
                  }}
                ></button>
              );
            })}
          </span>
        </div>
      </div>
    </>
  );
};

export default Slider;
