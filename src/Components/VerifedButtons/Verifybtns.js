import { Link } from "react-router-dom";
import "./Verifybtns.css";
const Verifybtns = () => {
  return (
    <>
    <ul class="Verifybtns_container">
      <Link to="">
        <li>
          <img class="img" src="https://icms-image.slatic.net/images/ims-web/55c642f0-250b-4515-9c8a-42cce3327098.png" alt="" />
          <span class="text">Safe Payment</span>
        </li>
      </Link>
      <Link to="">
        <li>
          <img class="img" src="https://icms-image.slatic.net/images/ims-web/1b7e5ccb-89fc-4383-bc27-4586e82195be.png" alt="" />
          <span class="text">Nationwide Delivery</span>
        </li>
      </Link>
      <Link to="">
        <li>
          <img class="img" src="https://icms-image.slatic.net/images/ims-web/f2a7f550-3a25-478d-9879-e6aa419c7ebf.png" alt="" />
          <span class="text">Free & Easy Return</span>
        </li>
      </Link>
      <Link to="">
        <li>
          <img class="img" src="https://icms-image.slatic.net/images/ims-web/05352646-9b19-4283-a7b1-dcb16736663e.png" alt="" />
          <span class="text">Best Price Garanteed</span>
        </li>
      </Link>
      <Link to="">
        <li>
          <img class="img" src="https://icms-image.slatic.net/images/ims-web/781b5194-65f0-4ae5-b7a6-003bc717054f.png" alt="" />
          <span class="text">100% Authentic Products</span>
        </li>
      </Link>
      <Link to="">
        <li>
          <img class="img" src="https://icms-image.slatic.net/images/ims-web/8faa565d-b52d-4e05-90e4-38466e764e84.png" alt="" />
          <span class="text">
            Daraz Verified{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              
              viewBox="0 0 320 512"
              fill ="#5e5e5e"
            >
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          </span>
        </li>
      </Link>
    </ul>
    </>
  );
};

export default Verifybtns;

