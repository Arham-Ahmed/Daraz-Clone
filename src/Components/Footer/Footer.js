import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = ({ bottom }) => {
  return (
    <>
      <div className="Footer">
        <div className="top_Footer">
          <div className="Footer_Colums">
            <div className="inner_Colums">
              <h4 className="Footer_Heading">Customer Care</h4>
              <ul className="Footer_links">
                <li className="Footer_link">
                  <Link to={" "}>Help Center</Link>
                </li>
                <li className="Footer_link">
                  <Link to={" "}>How To Buy</Link>
                </li>
                <li className="Footer_link">
                  <Link to={" "}>Corporate & Bulk Purchasing</Link>
                </li>
                <li className="Footer_link">
                  <Link to={" "}>Returns & Refunds</Link>
                </li>
                <li className="Footer_link">
                  <Link to={" "}>Daraz Shop</Link>
                </li>
                <li className="Footer_link">
                  <Link to={" "}>Contact Us</Link>
                </li>
                <li className="Footer_link">
                  <Link to={" "}>Purchase Protection</Link>
                </li>
                <li className="Footer_link">
                  <Link to={" "}>Daraz Pick up Points</Link>
                </li>
              </ul>
            </div>
            <div className="inner_Colums">
              <h4 className="Footer_Heading secondHeading">
                Make Money With Us
              </h4>
              <ul className="Footer_links">
                <li className="Footer_link">
                  <Link to={" "}>Daraz University</Link>
                </li>
                <li className="Footer_link">
                  <Link to={" "}>Sell on Daraz</Link>
                </li>
                <li className="Footer_link">
                  <Link to={" "}>Join Daraz Affiliate Program</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="Footer_Colums">
            <div className="inner_Colums">
              <h4 className="Footer_Heading">Daraz</h4>
              <ul className="Footer_links">
                <li className="Footer_link">
                  <Link to={"/About"}>About Us</Link>
                </li>
                <li className="Footer_link">
                  <Link to={" "}>Digital Payments</Link>
                </li>
                <li className="Footer_link">
                  <Link to={" "}>Daraz Donates</Link>
                </li>
                <li className="Footer_link">
                  <Link to={" "}>Daraz Blog</Link>
                </li>
                <li className="Footer_link">
                  <Link to={" "}>Terms & Conditions</Link>
                </li>
                <li className="Footer_link">
                  <Link to={" "}>Privacy Policy</Link>
                </li>
                <li className="Footer_link">
                  <span to={" "}>NTN Number : 4012118-6</span>
                </li>
                <li className="Footer_link">
                  <span to={" "}>STRN Number : 1700401211818</span>
                </li>
                <li className="Footer_link">
                  <Link to={" "}>Online Shopping App</Link>
                </li>
                <li className="Footer_link">
                  <Link to={" "}>Online Grocery Shopping</Link>
                </li>
                <li className="Footer_link">
                  <Link to={" "}>Daraz Exclusive</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="Footer_Colums">
            <div className="inner_Colums">
              <h4 className="Footer_Heading">Daraz International</h4>
              <ul className="Footer_links-int">
                <li className="Footer_link-int">
                  <Link to={" "}>
                    <div
                      className="flags"
                      style={{
                        backgroundPosition: "-180px -96px",
                        zoom: ".332",
                      }}
                    ></div>
                    Pakistan
                  </Link>
                </li>
                <li className="Footer_link-int">
                  <Link to={" "}>
                    <div
                      className="flags"
                      style={{
                        backgroundPosition: "-513px -96px",
                        zoom: ".332",
                      }}
                    ></div>
                    Bangladesh
                  </Link>
                </li>
                <li className="Footer_link-int">
                  <Link to={" "}>
                    <div
                      className="flags"
                      style={{
                        backgroundPosition: "-402px -96px",
                        zoom: ".332",
                      }}
                    ></div>
                    Srilanka
                  </Link>
                </li>
                <li className="Footer_link-int">
                  <Link to={" "}>
                    <div
                      className="flags"
                      style={{
                        backgroundPosition: "-291px -96px",
                        zoom: ".332",
                      }}
                    ></div>
                    Mayanmar
                  </Link>
                </li>
                <li className="Footer_link-int">
                  <Link to={" "}>
                    <div
                      className="flags"
                      style={{
                        backgroundPosition: "-69px -96px",
                        zoom: ".332",
                      }}
                    ></div>
                    Nepal
                  </Link>
                </li>
              </ul>
            </div>
            <div className="inner_Colums">
              <h4 className="Footer_Heading">Payment Methods</h4>
              <ul className="Footer_links-int">
                <li className="Footer_link-int pay-method">
                  <Link to={" "}>
                    <div
                      className="pay-icons"
                      style={{
                        backgroundPosition: "-98px -682px",
                        zoom: ".332",
                      }}
                    ></div>
                  </Link>
                </li>
                <li className="Footer_link-int pay-method">
                  <Link to={" "}>
                    <div
                      className="pay-icons"
                      style={{
                        backgroundPosition: "-267px -682px",
                        zoom: ".332",
                      }}
                    ></div>
                  </Link>
                </li>
                <li className="Footer_link-int pay-method">
                  <Link to={" "}>
                    <div
                      className="pay-icons"
                      style={{
                        backgroundPosition: "-436px -682px",
                        zoom: ".332",
                      }}
                    ></div>
                  </Link>
                </li>
                <li className="Footer_link-int pay-method">
                  <Link to={" "}>
                    <div
                      className="pay-icons"
                      style={{
                        backgroundPosition: "-606px -682px",
                        zoom: ".332",
                      }}
                    ></div>
                  </Link>
                </li>
                <li className="Footer_link-int pay-method">
                  <Link to={" "}>
                    <div
                      className="pay-icons"
                      style={{
                        backgroundPosition: "-94px -805px",
                        zoom: ".332",
                      }}
                    ></div>
                  </Link>
                </li>
                <li className="Footer_link-int pay-method">
                  <Link to={" "}>
                    <div
                      className="pay-icons"
                      style={{
                        backgroundPosition: "-774px -682px",
                        zoom: ".332",
                      }}
                    ></div>
                  </Link>
                </li>
                <li className="Footer_link-int pay-method">
                  <Link to={" "}>
                    <div
                      className="pay-icons"
                      style={{
                        backgroundPosition: "-940px -682px",
                        zoom: ".332",
                      }}
                    ></div>
                  </Link>
                </li>
                <li className="Footer_link-int pay-method">
                  <Link to={" "}>
                    <div
                      className="pay-icons"
                      style={{
                        backgroundPosition: "-1470px -805px",
                        zoom: ".332",
                      }}
                    ></div>
                  </Link>
                </li>
                <li className="Footer_link-int pay-method">
                  <Link to={" "}>
                    <div
                      className="pay-icons"
                      style={{
                        backgroundPosition: "-268px -805px",
                        zoom: ".332",
                      }}
                    ></div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="inner_Colums">
              <h4 className="Footer_Heading">Verified by</h4>
              <ul className="Footer_links-int">
                <li className="Footer_link-int">
                  <Link to={" "}>
                    <div
                      className="Verified-icon"
                      style={{
                        backgroundPosition: "-1379px -422px",
                        zoom: ".332",
                      }}
                    ></div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="Footer_Colums">
            <div className="inner_Colums">
              <h4 className="Footer_Heading">Exclusive Deals and Offers!</h4>
              <div className="Exlusive-icons">
                <div className="Qr-Code">
                  <img
                    src="//laz-img-cdn.alicdn.com/images/ims-web/TB18aqePBLoK1RjSZFuXXXn0XXa.png"
                    alt=""
                  />
                </div>
                <ul className="Footer_links-int">
                  <li className="Footer_link-int">
                    <Link to={" "}>
                      <div
                        className="stores-icon"
                        style={{
                          backgroundPosition: "-401px -255px",
                          zoom: ".332",
                        }}
                      ></div>
                    </Link>
                  </li>
                  <li className="Footer_link-int">
                    <Link to={" "}>
                      <div
                        className="stores-icon"
                        style={{
                          backgroundPosition: "-401px -361px",
                          zoom: ".332",
                        }}
                      ></div>
                    </Link>
                  </li>
                  <li className="Footer_link-int">
                    <Link to={" "}>
                      <div
                        className="stores-icon"
                        style={{
                          backgroundPosition: "-400px -458px",
                          zoom: ".332",
                        }}
                      ></div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="inner_Colums">
              <div className="Exlusive-icons">
                <div className="Logo-container">
                  <span
                    className="Logo"
                    style={{
                      backgroundPosition: " -755px -435px",
                      zoom: ".339",
                    }}
                  ></span>
                </div>
                <ul className="Footer_links-int">
                  <li className="Footer_link-int">
                    <div
                      className="Happy-icon"
                      style={{
                        backgroundPosition: "-902px -446px",
                        zoom: ".332",
                      }}
                    ></div>
                  </li>
                  <li className="Footer_link-int text">Download App</li>
                </ul>
              </div>
            </div>
            <div className="inner_Colums">
              <h4 className="Footer_Heading">Follow Us</h4>
              <ul className="Footer_links-int">
                <li className="Footer_link-int">
                  <Link to={" "}>
                    <div
                      className="social-icon"
                      style={{
                        backgroundPosition: "-630px -102px",
                        zoom: ".38",
                      }}
                    ></div>
                  </Link>
                </li>
                <li className="Footer_link-int">
                  <Link to={" "}>
                    <div
                      className="social-icon"
                      style={{
                        backgroundPosition: "-740px -102px",
                        zoom: ".38",
                      }}
                    ></div>
                  </Link>
                </li>
                <li className="Footer_link-int ">
                  <Link to={" "}>
                    <div
                      className="social-icon"
                      style={{
                        backgroundPosition: "-847px -101px",
                        zoom: ".38",
                      }}
                    ></div>
                  </Link>
                </li>
                <li className="Footer_link-int ">
                  <Link to={" "}>
                    <div
                      className="social-icon"
                      style={{
                        backgroundPosition: "-957px -101px",
                        zoom: ".38",
                      }}
                    ></div>
                  </Link>
                </li>
                <li className="Footer_link-int ">
                  <Link to={" "}>
                    <div
                      className="social-icon"
                      style={{
                        backgroundPosition: "-1063px -95px",
                        zoom: ".38",
                      }}
                    ></div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="Bottom_Footer"
          style={{ display: bottom === true ? "flex" : "none" }}
        >
          <div className="bottom-inner-footer">
            <div className="left-side">
              <div className="inner-column">
                <h5 className="bottom-heading">
                  How Daraz Transformed Online Shopping in Pakistan
                </h5>
                <p className="bottom-detail-text">
                  Daraz first made waves in Pakistan’s e-commerce market after
                  its introduction in 2012. We have since grown to become
                  Pakistan’s largest platform for online shopping with a network
                  spread across Asia in Pakistan, Bangladesh, Sri Lanka,
                  Myanmar, and Daraz.com.np. Our vision was to provide a safe,
                  efficient online marketplace platform for vendors and
                  customers across the country to come together. We started off
                  exclusively as an online fashion retail platform and over the
                  years expanded to become a complete one-stop solution for all
                  your buying needs. Daraz prides itself on not being just
                  another ecommerce venture in Asia. We work tirelessly to make
                  sure that we provide users with the best online online
                  shopping experience and value for their purchases. Whether you
                  shop online through our website or our online shopping mobile
                  App, you can expect easy navigation, customized
                  recommendations, and a smooth online shopping experience
                  guaranteed.
                </p>
                <h5 className="bottom-heading sub-heading">
                  What Makes Us Different from Other Online Shopping Platforms?
                </h5>
                <p className="bottom-detail-text">
                  <b className="bold-text">
                    Select from the Largest Online Marketplace in Pakistan
                  </b>
                  <br />
                  With over 15 million products to select from, Daraz offers its
                  customers the most comprehensive listing of products in the
                  country. Whether you’re looking for electronics, apparel,
                  appliances, or groceries – there is something for everyone.
                </p>
                <p className="bottom-detail-text">
                  <b className="bold-text">Hassle Free Delivery</b>
                  <br />
                  Online shopping is only as good as its execution and Daraz
                  promises hassle free delivery right from the moment you order
                  to when your package is dropped at your door. We cater to both
                  major and smaller cities alike, and give you the choice to
                  track your package as it makes its way to you so you always
                  know your order status. If you are unsatisfied with any aspect
                  of your order, we have a simple 7-day return or exchange
                  policy.
                </p>
                <p className="bottom-detail-text">
                  <b className="bold-text">
                    Payment Options to Suit Every Style
                  </b>
                  <br />
                  You can choose to pay through a credit/debit card, opt for
                  cash on delivery or even go for EMI (easy monthly
                  instalments). You can also avail exclusive offers by
                  downloading Daraz Wallet – a closed loop digital wallet
                </p>
              </div>
              <div className="inner-column">
                <p className="bottom-detail-text">
                  that offers you a secure, easy way to make payments. We also
                  have easypaisa & jazzcash payment method for our customers'
                  ease
                </p>
                <p className="bottom-detail-text">
                  <b className="bold-text">Shop from Verified Vendors</b>
                  <br />
                  Daraz understands that online shopping in Pakistan comes with
                  its fair share of risks. This is why with Daraz Marketplace
                  and Daraz Mall customers have the security of choosing from
                  verified vendors and brands from Karachi, Lahore, Islamabad
                  and all across Pakistan. Now you’ll never have to second guess
                  authenticity because Daraz makes sure to do it for you!
                </p>
                <p className="bottom-detail-text">
                  <b className="bold-text">
                    Shop Around the World with Daraz Global Collection
                  </b>
                  <br />
                  International sellers and local convenience come together with
                  Daraz Global collection. Get the chance to shop online from
                  vendors around the world without leaving the Daraz website.
                  Featuring thousands of novelty gadgets and accessories, Daraz
                  Global Collection offers you a selection of products that you
                  won’t find anywhere else when you’re online shopping in
                  Pakistan.
                </p>
                <p className="bottom-detail-text">
                  <b className="bold-text">
                    Avail Exclusive Discounts, Offers, and Promotions
                  </b>
                  <br />
                  Online shopping with Daraz means you get the chance to avail
                  exclusive online-only promotional packages as well as discount
                  vouchers from our vendors when you shop from their pages. Our
                  flash sales give you customized product offers all curated
                  with the help of our advanced AI technology so you always have
                  deals you’ll actually be interested in!
                </p>
                <p className="bottom-detail-text">
                  <b className="bold-text">
                    Buy Value, not Just Goods with Daraz Care
                  </b>
                  <br />
                  Daraz does not just cater online shopping in Pakistan but also
                  aims to simplify the way you give back to society. With
                  charities spanning across sectors of education, health care,
                  environmental preservation, and shelters, you can choose to
                  make a big difference with a few, simple clicks.
                </p>
                <p className="bottom-detail-text">
                  <b className="bold-text">Simplify Corporate Purchases</b>
                  <br />
                  Who says corporate purchases need to be a complicated affair?
                  When you opt for Daraz Corporate, you get an efficient and
                  transparent solution for your business’ bulk purchasing needs.
                  We’re proud to be working with some of the most prestigious
                  organizations in Pakistan across a number of different
                  industries.
                </p>
              </div>
            </div>
            <div className="right-side">
              <div className="inner-column">
                <h5 className="bottom-heading">Top Categories & Brands</h5>
                <ul className="bottom-categories-links">
                  <Link to={""}>
                    <li className="catlinks bold">MOBILE PHONES IN PAKISTAN</li>
                  </Link>
                  <br />
                  <Link to={""}>
                    <li className="catlinks">Apple iPhones,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks">Honor Mobiles,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks">Huawei Mobiles,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks">Tecno Mobiles,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Redmi Mobiles,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Xiaomi Mi Mobiles,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Nokia Mobiles,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> OnePlus Mobiles,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Oppo Mobile Phones,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Realme Mobiles,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Samsung Mobile Phones, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks">Vivo Mobile Phones, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Mobile Accessories, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Smart Watches </li>
                  </Link>
                </ul>
                <ul className="bottom-categories-links">
                  <Link to={""}>
                    <li className="catlinks bold">LATEST LAPTOPS</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks">Dell Laptops, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks">HP Laptops,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks">Lenovo Laptops,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks">Mouse,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Gaming Graphic Cards,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> lenovo ideapad 3,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Macbook Pro 13, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Hp Probook 650 G2</li>
                  </Link>
                </ul>
                <ul className="bottom-categories-links">
                  <Link to={""}>
                    <li className="catlinks bold">LED TV</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks">Changhong Led Tv, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> LG Led Tv,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Samsung Led Tv,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks">Sony Led Tv,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> TCL LED TVs,</li>
                  </Link>
                </ul>
                <ul className="bottom-categories-links">
                  <Link to={""}>
                    <li className="catlinks bold">HOME APPLIANCES</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks">Microwave oven,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Geyser, Heater,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Refrigerators,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Deep Freezers,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Generators, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Water Dispensers, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Fans,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Room Cooler, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Table Fans, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Wall Fans, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks">Exhaust Fans, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks">Pedestal Fans, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks">Window Ac, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks">Solar Panel, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks">Washing Machine </li>
                  </Link>
                </ul>
                <ul className="bottom-categories-links">
                  <Link to={""}>
                    <li className="catlinks bold">DSLR CAMERAS</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks">Camera Tripods, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Drones, IP & CCTV Cameras,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Nikon D7000, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks">Nikon D5600, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Canon 200D, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Canon 1200D, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Fujifilm Instax Mini 11, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Canon M50</li>
                  </Link>
                </ul>
                <ul className="bottom-categories-links">
                  <Link to={""}>
                    <li className="catlinks bold">HEALTH & BEAUTY</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks">sunisa foundation, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Biofad, janssen facial kit,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Glutathione Injection,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Glutathione Cream Sauvage, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Glutathione Tablets, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Glutathione Soap, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Infrared Thermometers, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> N95 Mask</li>
                  </Link>
                </ul>
                <ul className="bottom-categories-links">
                  <Link to={""}>
                    <li className="catlinks bold">TRENDING</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks">June Shopping Expo 2023, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Azaadi Sale 2022,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Shopping Expo, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> 11 11 Sale, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks">12.12 Sale, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Live Cricket Streaming, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Online Bills,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Core I5 Laptop,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Gtx 1060, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Samsung A32,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Samsung A51,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Samsung A52,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Samsung A71,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Samsung A72,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Samsung M31, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Samsung S20, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Samsung S20 Ultra 5G,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Samsung S21, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Samsung S21 Ultra, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Samsung Z Flip,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Tecno Camon 17, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Tecno Spark 6,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Vivo V20, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Poco X3 Pro, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Vivo V21,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Vivo V21E,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Vivo X70 Pro,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Vivo Y12, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks">Vivo Y12S,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Vivo Y1S,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Vivo Y20, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Vivo Y51, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Y51S, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Y51S, Oppo F19 Pro, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Oppo Reno 6, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Xiaomi Poco F3, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Xiaomi Poco M3, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Xiaomi Poco X3, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Xiaomi Poco X3 Gt, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Xiaomi Redmi 9C, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Xiaomi Redmi Note 10 Pro, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Sharp Aquos R2 </li>
                  </Link>
                </ul>
                <ul className="bottom-categories-links">
                  <Link to={""}>
                    <li className="catlinks bold">
                      SHOP WORLDWIDE WITH LAZADA
                    </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks">Singapore, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Malaysia, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Philipines, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Indonesia, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Vietnam, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Thailand </li>
                  </Link>
                </ul>
                <Link className="seemorelinks">See more links</Link>
              </div>
              <div className="inner-column">
                <ul className="bottom-categories-links">
                  <Link to={""}>
                    <li className="catlinks bold">WOMEN'S FASHION</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks">Al-Karam Studio, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Warda, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Salitex, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Bonanza Satrangi, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Edenrobe, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Firdous, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Junaid Jamshed, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Limelight, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks">Sana Safinaz, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Mahru, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Pushup Bra, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Women Undergarments</li>
                  </Link>
                </ul>
                <ul className="bottom-categories-links">
                  <Link to={""}>
                    <li className="catlinks bold">MEN'S FASHION</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks">Men's Shirts, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks">Men's T-Shirts</li>
                  </Link>
                </ul>
                <ul className="bottom-categories-links">
                  <Link to={""}>
                    <li className="catlinks bold">ONLINE GROCERY STORE</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks">Oil & Ghee, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Basmati Rice, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks">Dried Fruits, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Chocolates, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Mattresses </li>
                  </Link>
                </ul>
                <ul className="bottom-categories-links">
                  <Link to={""}>
                    <li className="catlinks bold">ONLINE BOOK STORE</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks">English Books,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Islamic Books,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> History Books,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> English Literature Books, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Kids Urdu Stories, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Pride & Prejudice, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Harry Potter Story Books, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Namal Novel, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks">Nimra Ahmed Novels </li>
                  </Link>
                </ul>
                <ul className="bottom-categories-links">
                  <Link to={""}>
                    <li className="catlinks bold">USED CARS FOR SALE</li>
                  </Link>
                  <br />
                  <Link to={""}>
                    <li className="catlinks">Suzuki Wagon R,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> KIA Sportage,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Honda City,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Toyota Prado,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Suzuki Alto,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Suzuki Cultus,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Honda Civic,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Honda 125,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Honda 70, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Yamaha Ybr 125,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Hi Speed 150, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Hi Speed Freedom 200, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Metro 70, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Super Power 125,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks">
                      {" "}
                      Monster JMS 3500 Electric Bike,
                    </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Super Power 70, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks">Car Accessories </li>
                  </Link>
                </ul>
                <ul className="bottom-categories-links">
                  <Link to={""}>
                    <li className="catlinks bold">AIR CONDITIONERS</li>
                  </Link>
                  <br />
                  <Link to={""}>
                    <li className="catlinks">Kenwood Ac,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Haier Ac,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Gree Ac, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Dawlance Ac, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks">Orient Ac,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Ecostar Ac,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Inverex Solar Ac, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks">Pel Ac</li>
                  </Link>
                </ul>
                <ul className="bottom-categories-links">
                  <Link to={""}>
                    <li className="catlinks bold">TOP MOBILE PHONES</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks">Nokia G20,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> redmi 9,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> realme 7 pro, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> realme c15, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> realme c21, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> vivo y20s, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> realme c11 Price in Pakistan,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks">
                      {" "}
                      itel vision 1 pro price in pakistan,
                    </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks">
                      {" "}
                      samsung galaxy a02 price in pakistan,
                    </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Infinix Hot 10, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks">Infinix Hot 8, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Infinix Hot 9,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Infinix Note 10 Pro, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks">Infinix Note 7,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Infinix Note 8,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Infinix Zero 8,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Inifnix Smart 5,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> iPhone 11,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> iPhone 12, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> iphone 12 Pro Max,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> iPhone 12 Pro, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> iPhone 6,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Itel A25, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Mi 10T, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Nokia 105,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Oppo A15,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Oppo A15S,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Oppo A53, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks">Oppo A54,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Infinix Zero X Pro,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Infinix Zero X Neo, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Oppo F19,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Oppo Reno 5, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Oppo Reno 5 Pro, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Xiaomi Poco M3 Pro, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Realme 6 Pro,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Realme 8, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Realme Narzo 30A, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Samsung A02S,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Samsung A11, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Samsung A12, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Samsung A31, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Vivo Y33s, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Infinix Note 11, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Tecno Spark 6 Go,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Samsung A52s, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Samsung Tab A7 Lite, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Oppo Reno 6 Pro </li>
                  </Link>
                </ul>
                <ul className="bottom-categories-links">
                  <Link to={""}>
                    <li className="catlinks bold">MEDICINE</li>
                  </Link>
                  <br />
                  <Link to={""}>
                    <li className="catlinks">surbex z,</li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> tea tree oil, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks">
                      {" "}
                      hydrozole cream, biotin tablets,
                    </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> evion capsule, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> lactogen 1, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> minoxidil, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks">clobevate cream, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> centrum silver, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> maxdif cream, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> dermovate cream, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> cac 1000, </li>
                  </Link>
                  <Link to={""}>
                    <li className="catlinks"> Panadol Migraine </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
