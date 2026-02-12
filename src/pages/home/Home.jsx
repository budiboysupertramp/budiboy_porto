import React, { useEffect } from 'react'
import './Home.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Banner from "../../components/banner/Banner";
import Project from "../../components/project/Project";
import Instagram from '../../assets/img/img-ig.png';
import Linkind from "../../assets/img/img-linkind.png";
import Twitter from "../../assets/img/img-twitter.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import { Lenis } from 'lenis/react';

const Home = () => {
  useEffect(() => {
    AOS.init();
  })


  return (
    <>
      <Lenis
        root
        options={{
          duration: 1.6,
          smoothWheel: true,
          smoothTouch: true,
          easing: (t) => 1 - Math.pow(1 - t, 3),

        }}
      >
        <section className="container-home w-full overflow-hidden">
          <div className="column-home w-ful flex flex-col">
            {/* <Navbar /> */}
            <Header />
            <section className="ch-about w-full flex ">
              <div className="row-content flex justify-between gap-3 sm:flex-col-reverse md:flex-col-reverse lg:flex-row ">
                <h2 className='md:text-7xl sm:text-3xl '>
                  As a digital designer, I focus on producing top-notch and impactful digital experiences.</h2>
                <div className="divider" data-aos="fade-up" data-aos-duration="3000"></div>
                <div className="row-right flex flex-col gap-2">
                  <span className='md:text-2xl sm:text-2xl'>(About Me)</span>
                  <div className="col-row-right flex gap-2">

                    <Link to="https://www.instagram.com/budiboy_supertramp/">
                      <img src={Instagram} alt="instagram" srcset="" className='' />
                    </Link>

                    <Link>
                      <img src={Twitter} alt="twitter" srcset="" className='' />
                    </Link>

                    <Link to="https://linkedin.com/in/setia-budi-345549232">
                      <img src={Linkind} alt="linkind" srcset="" className='' />
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <section className="bx-experience grid mt-8 sm:gap-4 md:gap-0 ">
              <div className="content-experience " data-aos="fade-right" data-aos-duration="1000">
                <h1 className='sm:text-3xl md:text-3xl'>
                  (What I do)
                </h1>
              </div>
              <div className="content-experience " data-aos="fade-left" data-aos-duration="900">
                <article className='md:text-left sm:text-justify' >
                  <h1 className='sm:text-2xl md:text-3xl'>
                    UI Designer
                  </h1>
                  <p>
                    Design dashboards and user interfaces of information systems for industrial and institutional use.
                    government.
                  </p>
                </article>
              </div>
              <div className="content-experience " data-aos="fade-right" data-aos-duration="1000">
                <article className='md:text-left sm:text-justify' >
                  <h1 className='sm:text-2xl md:text-3xl'>
                    Web Designer
                  </h1>
                  <p>
                    Transformed comprehensive layouts into well-functioning web and mobile screen displays
                    using HTML, CSS, JavaScript, Jquery libraries.
                  </p>
                </article>
              </div>
              <div className="content-experience " data-aos="fade-left" data-aos-duration="2000">
                <article className='md:text-left sm:text-justify'>
                  <h1 className='sm:text-2xl md:text-3xl'>
                    UX Designer
                  </h1>
                  <p>
                    Work closely with developers, project managers, in the design, implementation and handover process.
                  </p>
                </article>
              </div>
              <div className="content-experience " data-aos="fade-right" data-aos-duration="2500">
                <article className='md:text-left sm:text-justify'>
                  <h1 className='sm:text-2xl md:text-3xl'>
                    Responsive design
                  </h1>
                  <p>
                    provides comfort to users in using the service
                  </p>
                </article>
              </div>
            </section>
          </div>

          <div className="">
            <Banner />
          </div>
          <div className="column-home overflow-hidden">
            <Project />
          </div>
        </section>
      </Lenis>
    </>
  )
}

export default Home
