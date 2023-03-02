import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Regester from "./pages/regiester"
import Headercomponents from "./components/headercomponents";
import Footercomponents from "./components/footercomponents";
import Logincomponents from "./components/logincomponents";

  function App() {
    return (
      <>
      <Headercomponents></Headercomponents>
        {/* <BrowserRouter>
  <Routes>
  <Route path="/" element={<Regester></Regester>}></Route>
      <Route path="/Regester" element={<Regester></Regester>}></Route>
      <Route path="*" element={<Regester></Regester>}></Route>
  </Routes>
  </BrowserRouter> */}
  <Logincomponents></Logincomponents>
  {/* <Footercomponents></Footercomponents> */}
  </>
    );
  }
  export default App;