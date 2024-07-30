import React from 'react'
import './Project.css'
import RahmaniImg from "../../assets/img/img-ra.png"
import MunduImg from "../../assets/img/img-mn.png"
import HastamaImg from "../../assets/img/img-he.png"
import BanyumiliImg from "../../assets/img/img-bm.png"

const Project = () => {
  return (
    <>
        <div className="container-project w-full flex-col flex gap-8">
            <div className="bx-title grid md:grid-cols-2 gap-4 sm:grid-cols-1 items-center">
                <h1 className='sm:text-3xl md:text-5xl xl:text-9xl fw-bold'>MY Project</h1>
                <span>A cutting-edge digital platform designed to revolutionize the way people
                interact with technology.</span>
            </div>
            <div className="bx-project w full grid lg:grid-flow-col gap-5 lg:auto-cols-auto">
              <div className="content-project">
                <h1>what have you done?</h1>
              </div>
              <div className="content-project grid md:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                <figure>
                  <img src={RahmaniImg} alt="" srcset="" />
                  <figcaption>Rahmaniny Agency</figcaption>
                </figure>
                <figure>
                  <img src={MunduImg} alt="" srcset="" />
                  <figcaption>Kampung Mundu</figcaption>
                </figure>
                <figure>
                  <img src={HastamaImg} alt="" srcset="" />
                  <figcaption>hastama Esence</figcaption>
                </figure>
                <figure>
                  <img src={BanyumiliImg} alt="" srcset="" />
                  <figcaption>Banymily 58</figcaption>
                </figure>
             
              </div>
            </div>
        </div>
    
    </>
  )
}

export default Project
