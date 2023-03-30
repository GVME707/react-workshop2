import React from "react";
import ReactDOM from "react-dom/client";
import {
  Routes,
  BrowserRouter,
  Route
} from "react-router-dom";
import "./index.css";
import App from './App';
//import ClickCounter from './ClickCounter';
import reportWebVitals from "./reportWebVitals";
import Login from "./Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
