import React from "react";
import "./Home.css"
import Slider from "../Slider/Slider";
import Footer from "../Footer/Footer";
import MobileBottomMenuBar from "../MobileBottomMenuBar/MobileBottomMenuBar.js";
import dataSlider from "../Slider/SliderData/dataSlider";
import Header from "../Header/Header";
import ProductsContainerTemplate from "../ProductsContainerTemplate/ProductsContainerTemplate";
import FlashSales from "../ProductsComponents/FlashSales/FlashSales";
import Categories from "../ProductsComponents/Categories/Categories";
import JustForYou from "../ProductsComponents/JustForYou/JustForYou";

import Verifybtns from "../VerifedButtons/Verifybtns";
import CategoriesButtons from "../CategoriesButtons/CategoriesButtons";
//import { useProductContext } from "../../Context/productContext";

const Home = () => {
  document.title = `Online Shopping in Pakistan: Fashion, Electronics & Groceries - Daraz.pk -
    Clone`;
  const width = window.innerWidth;
 /*const { Product, FeaturedProduct } = useProductContext();*/

  return (
    <div class="home">
      <Header />
     <Slider items={dataSlider} imgWidth={width} />
     <div class="verifybtns-container">
      <Verifybtns />
      </div>
      <CategoriesButtons/>
      <ProductsContainerTemplate props={{
        heading :"Flash Sales",
        ChildrenComponent : <FlashSales/>
      }} />
      <div className="categorys">
      <ProductsContainerTemplate props={{
        heading :"Categories",
        ChildrenComponent : <Categories/>
      }} />
      </div>
      <ProductsContainerTemplate props={{
        heading :"Just For You",
        ChildrenComponent : <JustForYou/>
      }} />
     <div className="MobileBottomMenuBar">
      <MobileBottomMenuBar/>
      </div>
      <Footer bottom={true} />
    </div>
  );
};

export default Home;
