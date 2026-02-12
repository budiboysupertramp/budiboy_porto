import React, { useEffect } from 'react'
import './Project.css'
import RahmaniImg from "../../assets/img/img-ra.png"
import MunduImg from "../../assets/img/img-mn.png"
import HastamaImg from "../../assets/img/img-he.png"
import BanyumiliImg from "../../assets/img/img-bm.png"
import {Link} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = ({isDark}) => {

    useEffect (() => {
    AOS.init({
      // duration: 1000,
      // easing: 'ease-in-out',
    });
  })
  
  return (
    <>
        <div className="container-project w-full flex-col flex gap-8 overflow-hidden">
            <div className="bx-title grid md:grid-cols-2 gap-4 sm:grid-cols-1 items-center">
                <h1 className='sm:text-3xl md:text-5xl xl:text-9xl fw-bold' data-aos="fade-down"  data-aos-duration="1000">MY Project</h1>
                <p className = "md:text-left sm:text-justify text-[20px]" data-aos="fade-right"  data-aos-duration="3000">A cutting-edge digital platform designed to revolutionize the way people
                interact with technology.</p>
            </div>
            <div className="bx-project w full grid lg:grid-flow-col gap-5 lg:auto-cols-auto">
              <div className="content-project">
                <h1 data-aos="fade-left"  data-aos-duration="1000">what have you done?</h1>
              </div>
              <div className="content-project grid md:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 overflow-hidden">
              <Link to = "https://konsultanlegalisasi.com/">
              <figure className= {`border overflow-hidden rounded-[4px]  ${isDark === 'dark' ? ' overflow-hidden-black ' : "border-[#bebdbd]"}`}>
                  <img src={RahmaniImg} alt="rahmany agency" />
                  <figcaption>Rahmaniny Agency</figcaption>
                </figure>
              </Link>
              <Link to = "https://mundu1902.vercel.app/">
                 <figure className= {`border overflow-hidden rounded-[4px]  ${isDark === 'dark' ? 'border-black ' : "border-[#bebdbd]"}`}>
                  <img src={MunduImg} alt="kampung mundu" />
                  <figcaption>Kampung Mundu</figcaption>
                </figure>
              </Link>
              <Link to = "https://my-essence.vercel.app/">
                 <figure className= {`border overflow-hidden rounded-[4px]  ${isDark === 'dark' ? 'border-black ' : "border-[#bebdbd]"}`}>
                  <img src={HastamaImg} alt="hastama essence"  />
                  <figcaption>hastama Esence</figcaption>
                </figure>
              </Link>
              <Link to = "https://banyumily58.com">
                <figure className= {`border overflow-hidden rounded-[4px]  ${isDark === 'dark' ? 'border-black ' : "border-[#bebdbd]"}`}>
                  <img src={BanyumiliImg} alt="hastama essence" />
                  <figcaption>Banymily 58</figcaption>
                </figure>
              </Link>
              </div>
            </div>
        </div>
    
    </>
  )
}

export default Project
