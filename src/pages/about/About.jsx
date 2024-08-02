import React, { useState } from "react";
import "./About.css";
import Me from "../../assets/img/belakang.jpg";
import Stepper from "@keyvaluesystems/react-stepper";
import DataHelper, { articleAbout, resume, budiSchool, budiSkill, organization } from "../../dataHelper/DataHelper";
// import { initialStepsArr } from "../../dataHelper/DataHelper";

const About = () => {
  return (
    <>
      <section className="page-about relative w-full grid">
        <img
          src={Me}
          alt=""
          srcset=""
          className="sticky overflow-hidden h-screen top-0 w-screen"
        />
        <div className="bx-about-page overflow-auto w-full flex flex-col md:pt-10 sm:pt-2">
          <section className="header-about flex gap-5 flex-col">
            <p className="md:text-3xl sm:text-xl font font-semibold">(About Me)</p>
            <div className="col-head">
              <h1 className="sm:text-5xl font-bold md:text-7xl lg:text-8xl xl:text-9xl">
                Budiboy
              </h1>
              <h1 className="sm:text-5xl font-bold md:text-7xl lg:text-8xl xl:text-9xl">
                Supertramp
              </h1>
            </div>

            <div className="bx-desc md:pt-3 lg:pt-10 lg:pt-10 sm:pt-0 w-full gap-4 flex flex-col">
              {DataHelper &&
                articleAbout
                  .filter((description) => description.id)
                  .map((description) => (
                    <article key={description.id} className="text-justify font-semibold">
                      <p>{description.desc}</p>
                    </article>
                  ))}
            
              <div className="divider-hor"></div>
            </div>

            <div className="bx-cv">
              <div className="container-cv w-full flex flex-col gap-8">
                <div className="bx-content-cv w-full ">
                  <h1 className="md:text-7xl sm:text-3xl font-bold">Work Experience</h1>
                  <div className="w-full flex flex-col gap-5 md:mt-4 sm:mt-3">
                    {DataHelper && resume.map((work, index)=> (
                        <div key = {index} className="col-cv w-full md:pl-7 sm:pl-0" >
                          <p className="col-cv-title sm:text-xl md:text-2xl">{work.title}</p>
                          <p className="col-cv-work sm:text-lg md:text-xl">{work.name}</p>
                          <p className="col-cv-date sm:text-base">{work.date}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bx-content-cv w-full">
                  <h1 className="md:text-7xl sm:text-3xl font-bold">Education</h1>
                  <div className="w-full flex flex-col gap-5 md:mt-4 sm:mt-3">
                    {DataHelper && budiSchool.map((sch, index)=> (
                        <div key = {index} className="col-cv w-full md:pl-7 sm:pl-0" >
                          <p className="col-cv-title sm:text-xl md:text-2xl">{sch.title}</p>
                          <p className="col-cv-date sm:text-base">{sch.date}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bx-content-cv w-full">
                  <h1 className="md:text-7xl sm:text-3xl font-bold">Skills</h1>
                  <div className="w-full flex flex-col gap-5 md:mt-4 sm:mt-3">
                    {DataHelper && budiSkill.map((skill, index)=> (
                        <div key = {index} className="col-cv w-full md:pl-7 sm:pl-0" >
                          <p className="col-cv-work sm:text-lg md:text-xl">{skill.title}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bx-content-cv w-full mb-5">
                  <h1 className="md:text-7xl sm:text-3xl font-bold">Organization</h1>
                  <div className="w-full flex flex-col gap-5 md:mt-4 sm:mt-3">
                    {DataHelper && organization.map((org, index)=> (
                        <div key = {index} className="col-cv w-full md:pl-7 sm:pl-0" >
                           <p className="col-cv-title sm:text-xl md:text-2xl">{org.title}</p>
                           <p className="col-cv-date sm:text-base">{org.date}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default About;
