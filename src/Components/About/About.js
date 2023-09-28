import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const About = () => {
  const center = {
    display: "flex",
    width: "200px",
    margin: "20% auto",
  };
  return (
    <>
      <Header />
      <h2 style={center}> This IS About PAge</h2>
      <Footer bottom={false} />
    </>
  );
};

export default About;
