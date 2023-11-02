import { useState, useEffect } from 'react';
import {Link}  from "react-router-dom";
import "./FlashSales.css"
import Products from "../../Products/Products";
import ProductSkeletonContainer from "../../Skeletons/ProductSkeleton/ProductSkeletonContainer";
import ProductSkeleton from "../../Skeletons/ProductSkeleton/ProductSkeleton";
import {useProductContext} from "../../../Context/productContext.js"
const FlashSales = () => {
  const {FeaturedProduct,isLoading} = useProductContext()
  const endTime = new Date('2023-12-31T23:59:59');

const calculateTimeLeft = () => {
    const difference = +new Date(endTime) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  };

const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  let { hours, minutes, seconds } = timeLeft;
  
  return (
    <>
    <div className="FlashSales_Container">
      <div className="FlashSales_top_clock">
      <div className="onSaletext">
        On Sales Now
      </div>
      <div className="Clock">
      <div className="Clock_Ending_Time">Ending in</div>
        <div className="Clock_Number">{hours < 10 ?`0${hours}`:hours}</div>
        <div className="semi_Cloumn">:</div>
        <div className="Clock_Number">{minutes<10?`0${minutes}`:minutes}</div>
        <div className="semi_Cloumn">:</div>
        <div className="Clock_Number">{seconds<10?`0${seconds}`:seconds}</div>
      </div>
      <Link className="Shop_More_btn" to="">
        Shop More
      </Link>
      </div>
      <div className="FlashSales_bottom_Products">
      {
        isLoading ? 
        <ProductSkeletonContainer morefelid={false}/> 
      : 
        FeaturedProduct.map((e)=>{
       return <Products element={e}visibility={
          false
       }key={e.id}
       
       />
      })}
      </div>
    </div>
    
    <div className="FlashSales_Mobile_bottom_Products">
      {
        isLoading ? 
        <ProductSkeleton morefelid={false}/> 
      : 
        FeaturedProduct.slice(0,1).map((e)=>{
       return <Products element={e} titlestyle={{
         display:"none",
       }}/>
      })}
      <div className="Column_Products">
      {
        isLoading ? 
  //    <ProductSkeletonContainer Column={true} morefelid={false}/>
  <div style={{
    display : "flex",
    flexDirection : "column",
    gap : "0.6rem",
    padding : "0.5rem 0",
  }}>
   <ProductSkeleton Column={true} morefelid={false}/>
   <ProductSkeleton Column={true} morefelid={false}/>
   <ProductSkeleton Column={true} morefelid={false}/>
   </div>
  : 
        FeaturedProduct.slice(1,4).map((e)=>{
       return <Products element={e} Column={true}/>
      })}
      </div>
    </div>
    
    </>
   
  )
}

export default FlashSales;