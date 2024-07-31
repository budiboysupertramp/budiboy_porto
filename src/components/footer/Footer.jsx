import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <>
        <div className="container-footer w-full flex justify-center items-center flex-col bg-slate-900 text-white p-8 gap-5">
            <p className='text-white text-3xl'>(Connect)</p>
            <h1 className='text-white text-9xl font-semibold capitalize'>Let's talk</h1>
            <div className="flex justify-center items-center flex-row gap-8 w-full">
                <span className='text-stone-600 text-xl hover:text-slate-200'>Instagram</span>
                <span className='text-stone-600 text-xl hover:text-slate-200'>LIkedIn</span>
                <span className='text-stone-600 text-xl hover:text-slate-200'>Email</span>
            </div>
            <button className='bg-slate-200 text-stone-600 py-5 px-8 text-center flex items-center rounded-lg text-lg font-bold  hover:bg-slate-300'>WhatsApp</button>
            <p className='text-white text-lg pt-8'>©Made by Budiboy_supertramp</p>
        </div>
    
    </>
  )
}

export default Footer
