import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/home/Home";
import About from "../src/pages/about/About";
import Navbar from "../src/components/navbar/Navbar";
import Footer from "../src/components/footer/Footer";
import ScrollToTop from "./dataHelper/ScrollToTop";
import Spiner from "../src/components/loading/Loading";
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <Spiner />;
  }

  return (
    <BrowserRouter>
    {/* <HashRouter> */}
    <ScrollToTop>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} /> */}
      </Routes>
      <Footer />

    </ScrollToTop>
    {/* </HashRouter> */}
    </BrowserRouter>
  );
}

export default App;


// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Home from "../src/pages/home/Home";
// import About from "../src/pages/about/About";
// import Navbar from "../src/components/navbar/Navbar";
// import Footer from "../src/components/footer/Footer";
// import ScrollToTop from "./dataHelper/ScrollToTop";
// import './App.css';

// const Layout = () => (
//   <ScrollToTop>
//     <Navbar />
//     <Outlet />
//     <Footer />
//   </ScrollToTop>
// );

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: "about", element: <About /> },
//     ],
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;

