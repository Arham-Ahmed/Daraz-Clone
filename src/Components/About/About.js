import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./About.css"

const About = () => {
  const center = {
    display: "flex",
    width: "200px",
    margin: "20% auto",
  };
  return (
    <>
      <Header />
      <div className="About-main-container">
      <h2 style={center}> This IS About PAge</h2>
      </div>
      <Footer bottom={false} />
    </>
  );
};

export default About;
