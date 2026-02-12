import React, { useState } from "react";
import "./About.css";
import Me from "../../assets/img/belakang.jpg";
// import Me from "../../assets/img/budiboy2.png";
import Stepper from "@keyvaluesystems/react-stepper";
import DataHelper, { articleAbout, resume, budiSchool, budiSkill, organization } from "../../dataHelper/DataHelper";
// import { initialStepsArr } from "../../dataHelper/DataHelper";
import { Lenis } from 'lenis/react';


const About = ({isDark}) => {
  return (
    <>
      <Lenis
       root
        options={{
          duration: 1.6,
          smoothWheel: true,
          smoothTouch: true,
          syncTouch: true,
          easing: (t) => 1 - Math.pow(1 - t, 3),

        }}
      >
        <section className="page-about relative w-full grid">
          <img
            src={Me}
            alt=""
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

                <div className= {`${isDark === 'dark' ? "border border-[#fff]" : "divider-hor"}`}></div>
              </div>

              <div className="bx-cv">
                <div className="container-cv w-full flex flex-col gap-8">
                  <div className="bx-content-cv w-full ">
                    <h1 className="md:text-7xl sm:text-3xl font-bold">Work Experience</h1>
                    <div className="w-full flex flex-col gap-5 md:mt-4 sm:mt-3">
                      {DataHelper && resume.map((work, index) => (
                        <div key={index} className="col-cv w-full md:pl-7 sm:pl-0" >
                          <p className="col-cv-title sm:text-xl md:text-2xl">{work.title}</p>
                          <p className="col-cv-work sm:text-lg md:text-xl">{work.name}</p>
                          <p className= {` sm:text-base ${isDark === "dark" ? "!text-[#b4b4b4]": ""}`}>{work.date}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bx-content-cv w-full">
                    <h1 className="md:text-7xl sm:text-3xl font-bold">Education</h1>
                    <div className="w-full flex flex-col gap-5 md:mt-4 sm:mt-3">
                      {DataHelper && budiSchool.map((sch, index) => (
                        <div key={index} className="col-cv w-full md:pl-7 sm:pl-0" >
                          <p className="col-cv-title sm:text-xl md:text-2xl">{sch.title}</p>
                          <p className= {` sm:text-base ${isDark === "dark" ? "!text-[#b4b4b4]": ""}`}>{sch.date}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bx-content-cv w-full">
                    <h1 className="md:text-7xl sm:text-3xl font-bold">Skills</h1>
                    <div className="w-full flex flex-col gap-5 md:mt-4 sm:mt-3">
                      <div className="col-cv w-full md:pl-7 sm:pl-4 grid md:grid-cols-4 sm:grid-cols-2 gap-2" >
                        {DataHelper && budiSkill.map((skill, index) => (
                          <p key={index} className="col-cv-work sm:text-lg md:text-xl list-item">{skill.title}</p>
                        ))}
                      </div>
                    </div>
                  </div>


                  <div className="bx-content-cv w-full mb-5">
                    <h1 className="md:text-7xl sm:text-3xl font-bold">Organization</h1>
                    <div className="w-full flex flex-col gap-5 md:mt-4 sm:mt-3">
                      {DataHelper && organization.map((org, index) => (
                        <div key={index} className="col-cv w-full md:pl-7 sm:pl-0" >
                          <p className="col-cv-title sm:text-xl md:text-2xl">{org.title}</p>
                          <p className= {` sm:text-base ${isDark === "dark" ? "!text-[#b4b4b4]": ""}`}>{org.date}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </Lenis>
    </>
  );
};

export default About;
