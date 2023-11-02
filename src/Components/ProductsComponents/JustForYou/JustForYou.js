import "./JustForYou.css";
import  {useEffect ,useState} from "react";
import Products from "../../Products/Products";
import ProductSkeletonContainer from "../../Skeletons/ProductSkeleton/ProductSkeletonContainer";
import {useProductContext} from "../../../Context/productContext.js";
let Api = "http://localhost:5000/api/products"
const JustForYou = () => {
const [limit,setLimit]=useState(18)
const {getProduct,Product,AllProducts,isLoading } = useProductContext()
useEffect(()=>{
  getProduct(`${Api}?limit=${limit}`)
return ()=>{
  getProduct(`${Api}?limit=${limit}`)
}
  },[limit])
  
  const handleScrollInfinite = async()=>{
    try{
      if(limit <= AllProducts.length){
      if(window.innerHeight+document.documentElement.scrollTop + 100>= document.documentElement.scrollHeight){
        setLimit(limit+18)
      }
      }
      
    }catch(e){
      console.log(e)
    }
  }
  
  useEffect(()=>{
  if(window.innerWidth<=680){
    window.addEventListener("scroll",handleScrollInfinite)
    return ()=>{
      window.removeEventListener("scroll",handleScrollInfinite)
    }}
    
  })
  
  
  return (
  <>
  <div className="Justforyou_Container">
  {
    Product.length <=0 ?
     isLoading ? 
     <>
    <ProductSkeletonContainer morefelid={true}/> 
     <ProductSkeletonContainer morefelid={true}/> 
    </> :
    Product.map((e,i)=>{
   return <Products element={e} visibility={true} key={i} 
       />
    })
    : 
    Product.map((e,i)=>{
   return <Products element={e} visibility={true} key={i} 
       />
    })
  }
   {
     isLoading ?
     <img className="Loading_img" src="https://laz-img-cdn.alicdn.com/imgextra/i3/O1CN01x14AwP25akFxXBkDX_!!6000000007543-1-tps-200-200.gif" alt=""/>
     :
    limit <= AllProducts.length ? <button onClick={()=>setLimit(limit+18)} className="LoadMore">LoadMore</button> : <p className="reach_text"> 
    <div className="lines"></div>
   You have reach the end<br></br>Do Search to keep scrolling
    <div className="lines"></div>
    </p>
     
   } 
  </div>
  </>
  )
}

export default JustForYou;