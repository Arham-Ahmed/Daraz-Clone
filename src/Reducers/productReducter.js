const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "API_ERROR":
      return {
        ...state,
        isError: true,
      };
    case "SET_PRODUCT_DATA":
        //const featureddata =  action.payload.filter((curElem) => {
        // return curElem.featured === true;
        //});
      
      return {
        ...state,
        isLoading : false,
        isError : false,
        Product: action.payload,
        
        //FeaturedProduct: featureddata,
      };
   case "SET_SINGLE_PRODUCT_DATA":
      return{
        ...state,
        isLoading : false,
        isError : false,
        singleproduct : action.payload
      };
      
    case "SET_ALL_PRODUCT_DATA" :
      const featureddata =  action.payload.filter((curElem) => {
         return curElem.featured === true;
        });
      return{
        ...state,
        AllProducts :action.payload,
        FeaturedProduct: featureddata,
      };
    default:
      return state;
  }
};
export default productReducer;
