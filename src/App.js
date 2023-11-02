import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import LoginSignupPage from "./Components/Login&SignUpForm/LoginSignupPage.js";
import SingleProduct from "./Components/SingleProduct/SingleProduct";
import Test from "./Components/Test.js";
import Home from "./Components/Home/Home";
import Account from "./Components/Account/Account.js";
function App() {
    return (
        <div className="main-container">
            <Router basename="/">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about-us" element={<About />} />
                    <Route
                        path="/SingleProduct/:id"
                        element={<SingleProduct />}
                    />
                    <Route path="/login" element={<LoginSignupPage />} />
                    <Route path="/signup" element={<LoginSignupPage signupPage={true}/>} />
                    <Route path="/Account" element={<Account />} />
                    <Route path="*" element={<Home />} />
                    <Route path="/categories/:title/" element={<Test />}>
                        <Route path=":subtitle" element={<Test />} />
                        <Route
                            path=":subtitle/:insubtitle"
                            element={<Test />}
                        />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;

// Replace 'your-selector' with the CSS selector of the elements containing the data.
// const elements = document.querySelectorAll('.title--wFj93');
// const data = [];

// elements.forEach(element => {
//   // Replace 'field1-selector', 'field2-selector', etc., with the selectors for each field.
//   const image = element.querySelector('.image--WOyuz').src;
//   const title = element.querySelector('.title--wFj93').textContent;
//   const currency= element.querySelector('.currency--GVKjI').textContent;
//   const discount= element.querySelector('.discount--HADrg').textContent;
//   const origPrice= element.querySelector('.origPrice--AJxRs').NodeChild[0].textContent;

//   // Create an object for each set of data and push it into the 'data' array.
//   data.push({
//     "image": image,
//     "title": field2Value,
//     "currency": currency,
//     "origPrice": origPrice,
//     "discount": discount,
//     // Add more fields as needed.
//   });
// });

// // Convert the 'data' array to JSON.
// const jsonData = JSON.stringify(data);

// console.log(jsonData);
