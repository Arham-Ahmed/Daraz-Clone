import { Link } from "react-router-dom";
import "./CategoriesButton.css";
const CategoriesButtons = () => {
  return (
    <>
      <div class="CategoriesButtons_container">
        <ul class="CategoriesButtons-ul">
          <Link to="">
            <li class="Categories">
              <img
                class="Categories-img"
                src="https://icms-image.slatic.net/images/ims-web/1440c427-d3fe-49f7-aa90-09c8eb0b84ea.png"
                alt=""
              />
              <span class="Categories-text">Mart</span>
            </li>
          </Link>
          <div class="border"></div>
          <Link to="">
            <li class="Categories">
              <img
                class="Categories-img"
                src="https://icms-image.slatic.net/images/ims-web/4f250051-aac7-46bd-9bea-c5b836dea844.png"
                alt=""
              />
              <span class="Categories-text">Fashion</span>
            </li>
          </Link>
          <div class="border"></div>
          <Link to="">
            <li class="Categories">
              <img
                class="Categories-img"
                src="https://icms-image.slatic.net/images/ims-web/0ed92f69-d596-458b-bcd6-8d2bb69ef911.png"
                alt=""
              />
              <span class="Categories-text">Beauty</span>
            </li>
          </Link>
          <div class="border"></div>
          <Link to="">
            <li class="Categories">
              <img
                class="Categories-img"
                src="https://icms-image.slatic.net/images/ims-web/d85f0ced-6459-455a-8504-150655bf948c.png"
                alt=""
              />
              <span class="Categories-text">Home & Decor</span>
            </li>
          </Link>
          <div class="border"></div>
          <Link to="">
            <li class="Categories">
              <img
                class="Categories-img"
                src="https://icms-image.slatic.net/images/ims-web/cc89e68e-c809-4638-a5a6-2dc7e450d2a1.png"
                alt=""
              />
              <span class="Categories-text">Free Delivery</span>
            </li>
          </Link>
          <div class="border"></div>
          <Link to="">
            <li class="Categories">
              <img
                class="Categories-img"
                src="https://icms-image.slatic.net/images/ims-web/a13edb2b-61bf-4dec-a410-f85b63d41490.png"
                alt=""
              />
              <span class="Categories-text">Every Day Low Price</span>
            </li>
          </Link>
          <div class="border"></div>
          <Link to="">
            <li class="Categories">
              <img
                class="Categories-img"
                src="https://icms-image.slatic.net/images/ims-web/eaac2292-b2bd-4e83-81ff-40cb013b0b80.png"
                alt=""
              />
              <span class="Categories-text">Daraz Like New </span>
            </li>
          </Link>
          <div class="border"></div>
          <Link to="">
            <li class="Categories">
              <img
                class="Categories-img"
                src="https://icms-image.slatic.net/images/ims-web/62624b46-f8ca-43b7-a5fa-1d31920a6eb5.png"
                alt=""
              />
              <span class="Categories-text">New On Daraz</span>
            </li>
          </Link>
          <div class="border"></div>
          <Link to="">
            <li class="Categories">
              <img
                class="Categories-img"
                src="https://icms-image.slatic.net/images/ims-web/e7b9ee8c-1fbf-4548-ab35-db6eeca830a6.png"
                alt=""
              />
              <span class="Categories-text">Flash Sales</span>
            </li>
          </Link>
        </ul>
      </div>
      <div class="for-mobile">
        <ul class="CategoriesButtons-ul">
          <Link to="">
            <li class="Categories">
              <img
                class="Categories-img"
                src="https://icms-image.slatic.net/images/ims-web/1440c427-d3fe-49f7-aa90-09c8eb0b84ea.png"
                alt=""
              />
              <span class="Categories-text">Mart</span>
            </li>
          </Link>
          
          <Link to="">
            <li class="Categories">
              <img
                class="Categories-img"
                src="https://icms-image.slatic.net/images/ims-web/4f250051-aac7-46bd-9bea-c5b836dea844.png"
                alt=""
              />
              <span class="Categories-text">Fashion</span>
            </li>
          </Link>
          
          <Link to="">
            <li class="Categories">
              <img
                class="Categories-img"
                src="https://icms-image.slatic.net/images/ims-web/0ed92f69-d596-458b-bcd6-8d2bb69ef911.png"
                alt=""
              />
              <span class="Categories-text">Beauty</span>
            </li>
          </Link>
          
          <Link to="">
            <li class="Categories">
              <img
                class="Categories-img"
                src="https://icms-image.slatic.net/images/ims-web/d85f0ced-6459-455a-8504-150655bf948c.png"
                alt=""
              />
              <span class="Categories-text">Home & Decor</span>
            </li>
          </Link>
          <Link to="">
            <li class="Categories">
              <img
                class="Categories-img"
                src="https://icms-image.slatic.net/images/ims-web/ace88c8c-0b26-44f7-81b3-e8d6bb68febc.png"
                alt=""
              />
              <span class="Categories-text">Pay</span>
            </li>
          </Link>
          
        </ul>
      </div>
    </>
  );
};
export default CategoriesButtons;
