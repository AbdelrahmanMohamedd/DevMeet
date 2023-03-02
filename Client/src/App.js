import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/homecomponent";
import Headercomponents from "./components/headercomponents";
import Footercomponents from "./components/footercomponents";
import Logincomponents from "./components/logincomponents";

  function App() {
    return (
 
    <BrowserRouter>
     <Routes>
    <Route path="/" element={<Logincomponents></Logincomponents>}></Route>
    <Route path="/login" element={<Logincomponents></Logincomponents>}></Route>
    <Route path="/home" element={<Home></Home>}></Route>
    </Routes>
    </BrowserRouter>
    );
  }
  export default App;