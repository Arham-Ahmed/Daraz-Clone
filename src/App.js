import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
function App() {
  return (
    <div className="main-container">
      <Router basename="/">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// Replace 'your-selector' with the CSS selector of the elements containing the data.
// const elements = document.querySelectorAll('.card-jfy-item');
// const data = [];

// elements.forEach(element => {
//   // Replace 'field1-selector', 'field2-selector', etc., with the selectors for each field.
//   const field1Value = element.querySelector('.image').src;
//   const field2Value = element.querySelector('.title').textContent;

//   // Create an object for each set of data and push it into the 'data' array.
//   data.push({
//     field1: field1Value,
//     field2: field2Value,
//     // Add more fields as needed.
//   });
// });

// // Convert the 'data' array to JSON.
// const jsonData = JSON.stringify(data);

// console.log(jsonData);
