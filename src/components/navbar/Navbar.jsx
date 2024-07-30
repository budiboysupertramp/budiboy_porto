import React, {useState} from 'react'
import './Navbar.css'
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const [click, setClick] = useState(false);
  
const clickMenu = () => {
  setClick(!click)
}

  return (
    <>
        <nav className='container-navbar w-full flex justify-end sticky top-0 z-10'>
            <button className='btn-nav text-bold-20 '  onClick={clickMenu}>Menu</button>
          {/* <div className="collapsd-nav absolute w-full flex flex-col justify-center bg-black top-0 left-0 right-0 h-screen z-30 overflow-hidden items-center hidden"> */}
          <div className={`collapsd-nav absolute w-full flex flex-col justify-center bg-black top-0 left-0 right-0 h-screen z-30 overflow-hidden items-center ${click ? 'block' : 'hidden'}`}>
            
            <span className='text-slate-100 sm:text-3xl md:text-5xl xl:text-9xl absolute top-7 right-7 cursor-pointer' onClick={clickMenu}>X</span>
            <ul>
              <li className='text-center'>
                <NavLink 
                to = ""
                >
                    <span className='text-slate-100 sm:text-3xl md:text-5xl xl:text-9xl fw-bold uppercase'>Home</span>
                </NavLink>
              </li>

              <li>
              <NavLink 
                to = ""
                >
                    <span className='text-slate-100 sm:text-3xl md:text-5xl xl:text-9xl fw-bold uppercase'>About</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
    
    </>
  )
}

export default Navbar
