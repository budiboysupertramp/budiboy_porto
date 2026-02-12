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

import ButtonDarkMode from './components/buttonDarkMode/ButtonDarkMode';

function App() {
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);



  // darkmode
  const [isDark, setDark] = useState(() => {
    return localStorage.getItem('app-theme') || 'light'
  })

  useEffect(() => {
    localStorage.setItem('app-theme', isDark)

    if (isDark === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const toggleDarkMode = () => {
    setDark((prev) => (prev === 'light' ? 'dark' : 'light'))
  }
  // darkmode

  if (isLoading) {
    return <Spiner />;
  }



  return (
    <BrowserRouter>
      {/* <HashRouter> */}
      <ScrollToTop>
        <ButtonDarkMode
          toggleDarkMode={toggleDarkMode}
          isDark={isDark}
        />

        <Navbar isDark={isDark}/>
        <Routes>
          <Route path="/" element={<Home isDark={isDark} />} />
          <Route path="/about" element={<About isDark={isDark}/>} />
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

