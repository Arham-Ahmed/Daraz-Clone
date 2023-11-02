import "./ProductSkeleton.css";
import img from "./Skeleton.png";


 const Products = ({ Column , morefelid , element, titlestyle,visibility }) => {
  return (
    <>
      <div
         className={
           Column ? "Flash_Mobile_Product_Container_ske" : "Products_container_ske"
         }
      >
        <img className="Products_img " src={img}/>
   <div className="sekelton_column_detail_container">
         <div className="sekelton_column_detail">
          </div>
         <div className="sekelton_column_price">
          </div>
        <div className="sekelton_column">
          </div>
          
       <div className="sekelton_column_ext" style={{
          display : morefelid ? "flex":"none"
        }} >
        </div>
        {/*
        <div className="sekelton_column_ext"
        style={{
          display : morefelid ? "flex":"none"
        }}>
          </div>
          */}
          </div>
        </div>
    </>
  );
};

export default Products;
