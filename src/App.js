import "./App.css";
import Header from "./Components/Header/Header";
import Slider from "./Components/Slider/Slider";
import dataSlider from "./Components/Slider/SliderData/dataSlider";
import Footer from "./Components/Footer/Footer";

function App() {
  const width = window.innerWidth;
  return (
    <div className="App">
      <div className="main-container">
        <Header />
        <Slider items={dataSlider} imgWidth={960} />
        <Footer />
      </div>
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
