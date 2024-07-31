import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/home/Home";
import Navbar from "../src/components/navbar/Navbar";
import About from "../src/pages/about/About";
import Footer from "../src/components/footer/Footer"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
