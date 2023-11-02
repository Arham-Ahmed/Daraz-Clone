import "./ProductsContainerTemplate.css";
const ProductsContainerTemplate = ({props}) => {
  return (
  <>
  <div className="ProductsContainerTemplate">
  <h3 class="Heading">{props.heading}</h3>
  {props.ChildrenComponent}
  </div>
  </>
  )
}

export default ProductsContainerTemplate;
