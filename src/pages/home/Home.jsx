import React from 'react'
import './Home.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Banner from "../../components/banner/Banner";
import Project from "../../components/project/Project";
import Instagram from '../../assets/img/img-ig.png';


const Home = () => {
  return (
    <>
        <section className="container-home w-full">
          <div className="column-home w-ful flex flex-col">
            <Navbar />
            <Header />
          <section className="ch-about w-full flex ">
            <div className="row-content flex justify-between gap-5 sm:flex-col-reverse md:flex-col-reverse lg:flex-row ">
              <h2 className='md:text-7xl sm:text-3xl'>
              As a digital designer, I focus on producing top-notch and impactful digital experiences.</h2>
              <div className="divider"></div>
              <div className="row-right flex flex-col gap-2">
                <span className='md:text-2xl sm:text-2xl'>(About Me)</span>
                <div className="col-row-right flex gap-2">
                  <img src={Instagram} alt="instagram" srcset="" />
                  <img src={Instagram} alt="instagram" srcset="" />
                  <img src={Instagram} alt="instagram" srcset="" />
                </div>
              </div>
            </div>
          </section>

          <section className="bx-experience grid mt-8 ">
              <div className="content-experience ">
                <article>
                  <h1>
                    (What I do)
                  </h1>
                </article>
              </div>
              <div className="content-experience ">
                 <article>
                  <h1>
                    UI Designer
                  </h1>
                  <p>
                  Design dashboards and user interfaces of information systems for industrial and institutional use. 
                  government.
                  </p>
                 </article>
              </div>
              <div className="content-experience ">
                 <article>
                  <h1>
                    Web Designer
                    </h1>
                    <p>
                    Transformed comprehensive layouts into well-functioning web and mobile screen displays 
                    using HTML, CSS, JavaScript, Jquery libraries.
                    </p>
                 </article>
              </div>
              <div className="content-experience ">
                  <article>
                    <h1>
                    UX Designer
                    </h1>
                    <p>
                    Work closely with developers, project managers, in the design, implementation and handover process.
                    </p>
                  </article>
              </div>
              <div className="content-experience ">
                  <article>
                    <h1>
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
            <div className="">
              <Project />
            </div>
        </section>
    
    </>
  )
}

export default Home
