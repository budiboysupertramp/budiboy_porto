import React from 'react';
import './Header.css';
import Photo from '../../assets/img/my-photo.png'

const Header = () => {
  return (
    <>
        <div className="container-header w-full flex flex-col gap-4">
          <div className="bx-title">
            <h1 className="sm:text-3xl md:text-5xl xl:text-9xl">Budiboy_Supertramp</h1>
            <h1 className="sm:text-3xl md:text-5xl xl:text-9xl">UI Designer & Engineer</h1>
          </div>
          <div className="bx-title flex w-full justify-between sm:flex-col md:flex-row">
            <span className="sm:text-2xl md:text-2xl lg:text-2xl">(Jakarta, Indonesia)</span>
            <span className="sm:text-xl md:text-2xl lg:text-2xl">Scroll Down</span>
          </div>
          <img src={Photo} alt="My Photo" />
        </div>
    </>
  )
}

export default Header
