import {useParams ,NavLink} from "react-router-dom";
const Test = () => {
  const {title,subtitle,insubtitle} = useParams()
  return (
    <>
   <NavLink to=".." relative="/">{title}</NavLink>
   <NavLink to={`/${subtitle}`}>{subtitle}</NavLink>
   <NavLink to="#">{insubtitle}</NavLink>
   </>
  )
}

export default Test;