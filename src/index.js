import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createHashRouter,
} from "react-router-dom";
import About from "./Components/About/About";
import MobileAbout from "./Components/About/MobileAbout";
// const rrouter = createBrowserRouter([
//   {
//     basename: process.env.PUBLIC_URL,
//     exact_path: "/",
//     element: <App />,
//   },
//   {
//     path: "/About",
//     element: <About />,
//   },
//   {
//     path: "*",
//     element: <App />,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={rrouter}></RouterProvider> */}
    <BrowserRouter basename="/Daraz-Clone">
      <Routes>
        <Route exact path="/Daraz-Clone" element={<App />} />
        <Route path="/about-us" element={<About />} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
