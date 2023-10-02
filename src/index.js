import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Home from "./pages/Home"
import About from "./pages/About"
import Internet from "./pages/Internet"
import Donate from "./pages/Donate"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}></Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="internet" element={<Internet/>}></Route>
        <Route path="donate" element={<Donate/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
