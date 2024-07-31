import React, { useEffect } from 'react';
import './Header.css';
// import Photo from '../../assets/img/my-photo.png'
import AOS from "aos";
import "aos/dist/aos.css";



const Header = () => {
  useEffect (() => {
    AOS.init({
      // duration: 1000,
      // easing: 'ease-in-out',
    });
  })
  
  return (
    <>
        <div className="container-header w-full flex flex-col gap-4">
          <div className="bx-title">
            <h1 className="sm:text-3xl md:text-5xl xl:text-9xl" data-aos="fade-down"  data-aos-duration="1000">Budiboy_Supertramp</h1>
            <h1 className="sm:text-3xl md:text-5xl xl:text-9xl" data-aos="fade-down"  data-aos-duration="3000">UI Designer & Engineer</h1>
          </div>
          <div className="bx-title flex w-full justify-between sm:flex-col md:flex-row">
            <span className="sm:text-lg md:text-2xl lg:text-2xl">(Jakarta, Indonesia)</span>
            <span className="sm:text-xl md:text-2xl lg:text-2xl"></span>
          </div>
          <div className="bx-img-photo w-full flex" >
           {/* <img src={Photo} alt="My Photo" className='my_photo' /> */}
          </div>
        </div>
    </>
  )
}

export default Header
