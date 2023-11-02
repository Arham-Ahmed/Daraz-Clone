import {useParams} from "react-router-dom"
import {useEffect} from "react";
import Header from "../Header/Header";
import PageHeader from "../Header/PagesHeader/PageHeader";
import Footer from "../Footer/Footer";
import MobileBottomMenuBar from "../MobileBottomMenuBar/MobileBottomMenuBar.js";
import {useProductContext} from "../../Context/productContext";
import "./SingleProduct.css";
 
let Api = "http://localhost:5000/api/products";

const SingleProduct =  () => {
  const {getsingleproduct,singleproduct,isLoading} =  useProductContext();
  const {id}=useParams()
  useEffect(()=>{
    getsingleproduct(`${Api}?id=${id}`)
    
    return ()=>{
    getsingleproduct(`${Api}?id=${id}`)
    }
    
  },[])
  const {id:alias,title,image,price,discountprice,star,rating,comment}= singleproduct
  return (
    isLoading ? "Loading......." :
     <>
     <div className="SingleProduct">
     <div className="Header">
     <div className="Desktop_Header">
     <Header/>
     </div>
     <div className="Mobile_Header">
     <PageHeader title={title}/>
     </div>
     </div>
     <h1>{title}title</h1>
     <h1>{price}price</h1>
     </div>
     <div className="Footer">
     <Footer bottom ={false}/>
     </div>
    <div className="MobileBottomMenuBar">
      <MobileBottomMenuBar/>
      </div>
     </>
  )

}
  
export default SingleProduct;