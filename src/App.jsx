// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "../src/pages/home/Home";
// import Navbar from "../src/components/navbar/Navbar";
// import About from "../src/pages/about/About";
// import Footer from "../src/components/footer/Footer"
// import './App.css';

// function App() {
//   return (
//     <BrowserRouter>
//       {/* <Navbar /> */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../src/pages/home/Home";
import About from "../src/pages/about/About";
import Navbar from "../src/components/navbar/Navbar";
import Footer from "../src/components/footer/Footer";
import ScrollToTop from "./dataHelper/ScrollToTop";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />

    </ScrollToTop>
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

