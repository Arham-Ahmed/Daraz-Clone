import "./Products.css";
// import PriceFormater from "../PriceFormater/PriceFormater";
import {useProductContext}  from "../../Context/productContext.js";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import skeimg from "./Skeleton.png";
const Products = ({ element,Column, titlestyle,visibility }) => {
  const {
    id,
    image,
    title,
    discountprice,
    price,
    currency,
    star,
    rating,
    comment,
  } = element;
  const {isLoading} = useProductContext()
  const percentagecalcu = () => {
    let perc = (discountprice * 100) / price;
    return Math.floor(perc);
  };
  let stararr = [];
  // function for making star arr
  const stars = () => {
    for (var i = 0; i < star; i++) {
      stararr.push(i);
    }
  };
  stars();
  const handleimgloader = (e)=>{
    e.target.src={image}
    document.querySelector(".Products_title").innerHTML=e.target.src
  }
  
  return (
    <>
    <Link to={`/SingleProduct/${id}`}>
      <div
      id={id}
        className={
          Column ? "Flash_Mobile_Product_Container" : "Products_container"
        }
      >
        <img className="Products_img" src={image} onError={(e)=>e.target.src =skeimg} onLoad={(e)=>e.target.src=image}/>
        <div className="Products_detail">
          <div className="Products_title" style={titlestyle}>
            {title}
          </div>
          <div className="Products_Price_currency">
            <div className="Products_Currency">{currency}</div>
            <div className="Products_Price">{discountprice}</div>
          </div>
          <div className="Products_Discont_Percentage_Container" style={{
            display : price==undefined?"none" : "flex",
          }}>
            <div className="Products_Currency">{currency}</div>
            <div className="Products_Discont_Price">{price}</div>
            <div className="Products_Discount_Percentage">
              -{ price!=undefined  ? percentagecalcu() : ""}%
            </div>
          </div>
          <div className="Products_Rating_Comment_Container" 
          style={{
         visibility :`${visibility === true ? "visible" :"hidden"}`,
          }} >
            <div className="Products_Rating_Container">
              <div className="Products_star">
                {stararr.map((_) => {
                  return (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  );
                })}
              </div>
              <div
                className="Products_rating"
                style={{
                  width: `${rating}%`,
                }}
              >
                {stararr.map((_) => {
                  return (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  );
                })}
              </div>
            </div>
            <div className="Products_Comments">({comment})</div>
          </div>
        </div>
      </div>
      </Link>
    </>
  );
};

export default Products;
