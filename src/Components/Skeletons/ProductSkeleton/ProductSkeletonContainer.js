import ProductSkeleton from "../../Skeletons/ProductSkeleton/ProductSkeleton";
const ProductSkeletonContainer = ({Column , morefelid}) => {
  return (
    <>
    <div className="ProductSkeletonContainer" style={{
      display : "flex",
      gap : "1rem",
    }}>
    <ProductSkeleton morefelid={morefelid}/>
    <ProductSkeleton morefelid={morefelid}/>
    <ProductSkeleton morefelid={morefelid}/>
    <ProductSkeleton morefelid={morefelid}/>
    <ProductSkeleton morefelid={morefelid}/> 
    <ProductSkeleton morefelid={morefelid}/> 
    {Column ? 
    <div className="mobile_skeleton">
    <ProductSkeleton Column={true}/>
    <ProductSkeleton Column={true}/> 
    <ProductSkeleton Column={true}/>
    </div>
    :"" }
    </div>
    </>
  )
}

export default ProductSkeletonContainer;