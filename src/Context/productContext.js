import axios from "axios";
import { useContext, createContext, useEffect, useReducer } from "react";
import reducer from "../Reducers/productReducter";
const ProductContext = createContext();

const api = "http://localhost:5000/api/products";
const intialState= {
  isLoading :false,
  isError : false,
  Product : [],
  AllProducts : [],
  FeaturedProduct:[],
  singleproduct:{},
}

const ProductContextProvider = ({ children }) => {
  const [state , dispatch] = useReducer(reducer,intialState)
const getProduct = async(url)=>{
    dispatch({type : "SET_LOADING"})
    try {
      let res = await axios.get(url)
      let ApiData = await res.data.Products
      dispatch({type : "SET_PRODUCT_DATA" ,payload :ApiData})
    } catch (error) {
      dispatch({type : "API_ERROR"})
  }
 }
 
const getsingleproduct = async(url)=>{
  dispatch({type : "SET_LOADING"})
   try{
    let res = await axios.get(url)
    let singleProduct= await res.data.Products[0]
    dispatch({type:"SET_SINGLE_PRODUCT_DATA",payload:singleProduct})
   }catch(e){
     dispatch({type : "API_ERROR"})
   }
  }
  
 const getAllProduct = async(url)=>{
    try {
      let res = await axios.get(url)
      let ApiData = await res.data.Products
      dispatch({type : "SET_ALL_PRODUCT_DATA" ,payload :ApiData})
    } catch (error) {
      dispatch({type : "API_ERROR"})
  }
 }
  
 useEffect(()=>{
   getAllProduct(api)
   return ()=>{
   getAllProduct(api) 
 }
  },[])
  
  return (
    <ProductContext.Provider value={{...state, getsingleproduct ,getProduct}}>
      {children}
    </ProductContext.Provider>
  );
};
const useProductContext = () => {
  return useContext(ProductContext);
};

export { ProductContext, ProductContextProvider, useProductContext };
