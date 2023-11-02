import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./About.css";
import MobileAbout from "./MobileAbout";
import PageHeader from "../Header/PagesHeader/PageHeader";

const About = () => {
  document.title = "About Us - Daraz.pk";

  return (
    <>
      <div className="About-main-container">
        <div className="header-container">
          <Header />
        </div>
        <div className="About-content">
          <img
            src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1aJhxcBCw3KVjSZFuXXcAOpXa.jpg_1200x1200q75.jpg_.webp"
            alt=""
          />
          <img
            src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1L2BrcBGE3KVjSZFhXXckaFXa.jpg_1200x1200q75.jpg_.webp"
            alt=""
          />
          <img
            src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1ZlBrcBGE3KVjSZFhXXckaFXa.jpg_1200x1200q75.jpg_.webp"
            alt=""
          />
          <img
            src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1pHRscBGE3KVjSZFhXXckaFXa.jpg_1200x1200q75.jpg_.webp"
            alt=""
          />
          <img
            src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1_fNrcv1G3KVjSZFkXXaK4XXa.jpg_1200x1200q75.jpg_.webp"
            alt=""
          />
          <img
            src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1gCuDXLBj_uVjSZFpXXc0SXXa.jpg_1200x1200q75.jpg_.webp"
            alt=""
          />
          <img
            src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1gS8UXgFY.1VjSZFnXXcFHXXa.jpg_1200x1200q75.jpg_.webp"
            alt=""
          />
          <div className="img-video-container">
            <img
              src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1P6NAcBCw3KVjSZFuXXcAOpXa.jpg_1200x1200q80.jpg_.webp"
              alt=""
            />
            <div className="video">
              <iframe
                width="560"
                height="450"
                src="https://www.youtube.com/embed/16P735hTtQs?si=KHAHNX2SlCLjqysT"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <img
            src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1UZhWXgFY.1VjSZFqXXadbXXa.jpg_1200x1200q75.jpg_.webp"
            alt=""
          />
          <img
            src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1H.Xtcv1G3KVjSZFkXXaK4XXa.jpg_1200x1200q75.jpg_.webp"
            alt=""
          />
          <img
            src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1wW8YXgFY.1VjSZFnXXcFHXXa.jpg_1200x1200q75.jpg_.webp"
            alt=""
          />
          <img
            src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1Tf4YXgFY.1VjSZFqXXadbXXa.jpg_1200x1200q75.jpg_.webp"
            alt=""
          />
        </div>

        <div className="mobile-About-content">
          <div className="header">
            <PageHeader title={document.title} dots={true}/>
          </div>
          <MobileAbout />
        </div>
      </div>
     {/* <Footer bottom={false} /> */}
    </>
  );
};

export default About;
