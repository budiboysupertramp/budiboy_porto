// import React, {useState} from 'react'
// import './Navbar.css'
// import { NavLink } from "react-router-dom";

// const Navbar = () => {

//   const [click, setClick] = useState(false);
  
// const clickMenu = () => {
//   setClick(!click)
// }

//   return (
//     <>
//         <nav className='container-navbar w-full flex justify-end sticky top-0 z-10'>
//             <button className='btn-nav text-bold-20 bg-slate-900'  onClick={clickMenu}>Menu</button>
        
//           <div className={`collapse-nav absolute w-full flex flex-col justify-center  top-0 left-0 right-0 h-screen z-30 overflow-hidden items-center ${click ? 'block' : 'hidden'}`}>
//             <span className='text-slate-100 sm:text-3xl md:text-5xl xl:text-9xl absolute top-7 right-7 cursor-pointer z-30' onClick={clickMenu}>X</span>
//           <div className="custom-bg">
//             <div className="bg-mobile1"></div>
//             <div className="bg-mobile2"></div>
//             <div className="bg-mobile3"></div>
//           </div>
//             <ul className='flex gap-8 flex-col z-30'>
//               <li className='text-center'>
//                 <NavLink 
//                 to = "/"
//                 onClick={clickMenu}
//                 >
//                     <span className='text-slate-100 sm:text-6xl md:text-6xl xl:text-9xl fw-bold uppercase'>Home</span>
//                 </NavLink>
//               </li>

//               <li>
//               <NavLink 
//                 to = "about"
//                 onClick={clickMenu}
//                 >
//                     <span className='text-slate-100 sm:text-6xl md:text-6xl xl:text-9xl fw-bold uppercase'>About</span>
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         </nav>
    
//     </>
//   )
// }

// export default Navbar



import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const clickMenu = () => {
    setClick(!click);
  };

  return (
    <>
      <nav className={`container-navbar w-full flex justify-end sticky top-0 z-10 ${click ? 'active' : ''}`}>
        <button className={`btn-nav text-bold-20 ${click ? 'bg-slate-700' : 'bg-slate-900'}`} onClick={clickMenu}>
          Menu
        </button>
        <div className={`collapse-nav bg-slate-950 absolute w-full flex flex-col justify-center top-0 left-0 right-0 h-screen z-30 overflow-hidden items-center ${click ? 'visible' : 'invisible'}`}>
          <span className='text-slate-100 sm:text-3xl md:text-5xl xl:text-9xl absolute top-7 right-7 cursor-pointer z-30' onClick={clickMenu}>X</span>
          <div className="custom-bg-nav">
              <div className="bg-mobile1"></div>
              <div className="bg-mobile2"></div>          
              <div className="bg-mobile3"></div>
              <div className="bg-mobile4"></div>        
              {/* <div className="bg-mobile5"></div> */}
          </div>
          <ul className='flex gap-8 flex-col z-30'>
            <li className='text-center'>
              <NavLink to="/" onClick={clickMenu}>
                <span className='text-slate-100 sm:text-6xl md:text-6xl xl:text-9xl fw-bold uppercase'>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={clickMenu}>
                <span className='text-slate-100 sm:text-6xl md:text-6xl xl:text-9xl fw-bold uppercase'>About</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

