import axios from "axios";
import { useContext, createContext, useEffect, useReducer } from "react";
import reducer from "../Reducers/productReducter";
const ProductContext = createContext();

const api = "http://localhost:5000/api/products";

const intialState= {
  isLoading :false,
  isError : false,
  Product : [],
  FeaturedProduct:[],
}

const ProductContextProvider = ({ children }) => {
  const [state , dispatch] = useReducer(reducer,intialState)
  const getProduct = async(url)=>{
    dispatch({type : "SET_LOADING"})
    try {
      let res = await axios.get(url)
      let ApiData = await res.data.Products
      console.log(ApiData.Products);
      dispatch({type : "SET_PRODUCT_DATA" ,payload :ApiData})
    } catch (error) {
      dispatch({type : "API_ERROR"})
    console.log(error);
  }
 }
  useEffect(()=>{
  // getProduct()
return ()=>{
  getProduct(api) 
}
  },[])
  return (
    <ProductContext.Provider value={{...state}}>
      {children}
    </ProductContext.Provider>
  );
};
const useProductContext = () => {
  return useContext(ProductContext);
};

export { ProductContext, ProductContextProvider, useProductContext };
