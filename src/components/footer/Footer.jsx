import React from 'react'
import { Link } from "react-router-dom";
import './Footer.css'
const Footer = () => {
  const openWhatsApp = () => {
    window.open('https://api.whatsapp.com/send?phone=+6289502606853')
  }
  return (
    <>
        <div className="container-footer w-full flex justify-center items-center flex-col bg-slate-900 text-white p-8 gap-5">
            <p className='text-white text-3xl'>(Connect)</p>
            <h1 className='text-white text-9xl font-semibold capitalize'>Let's talk</h1>
            <div className="flex justify-center items-center flex-row gap-8 w-full">
              <Link to = "https://www.instagram.com/budiboy_supertramp/">
                <span className='text-stone-600 text-xl hover:text-slate-200'>Instagram</span>
              </Link>
              <Link to= "https://linkedin.com/in/setia-budi-345549232">
                <span className='text-stone-600 text-xl hover:text-slate-200'>LingkedIn</span>
              </Link>
              <Link to = "mailto:budiboy195@gmail.com">
                <span className='text-stone-600 text-xl hover:text-slate-200'>Email</span>
              </Link>
            </div>
            <button className='bg-slate-200 text-stone-600 py-5 px-8 text-center flex items-center rounded-lg text-lg font-bold  hover:bg-slate-300' onClick={openWhatsApp}>WhatsApp</button>
            <p className='text-white text-lg pt-8'>©Made by Budiboy_supertramp</p>
        </div>
    
    </>
  )
}

export default Footer
