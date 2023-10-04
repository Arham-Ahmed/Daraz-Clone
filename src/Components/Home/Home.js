import React from "react";
import Slider from "../Slider/Slider";
import Footer from "../Footer/Footer";
import dataSlider from "../Slider/SliderData/dataSlider";
import Header from "../Header/Header";
import { useProductContext } from "../../Context/productContext";


const Home = () => {
  document.title = `Online Shopping in Pakistan: Fashion, Electronics & Groceries - Daraz.pk -
    Clone`;
  const width = window.innerWidth;
  const {Product ,FeaturedProduct} = useProductContext()

  return (
    <>
      <Header />
      <Slider items={dataSlider} imgWidth={width} />
      {console.log(Product, FeaturedProduct)}
      <Footer bottom={true} />
    </>
  );
};

export default Home;
