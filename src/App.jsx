import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/home/Home";
import Navbar from "../src/components/navbar/Navbar";

import './App.css'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />}>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
