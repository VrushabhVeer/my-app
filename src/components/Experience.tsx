"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import globemind from "@/assets/globeminds_logo.png";
import "aos/dist/aos.css";
import Aos from "aos";

const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      id="experience"
      className="w-11/12 md:w-10/12 mx-auto flex items-center pt-24 md:pt-0 md:h-[80vh]"
    >
      <div>
        <div className="text-center">
          <h1 className="text-3xl font-bold">My Experience</h1>
          <p className="text-[#3f3f46]">
            Here is an overview of my work experience.
          </p>
        </div>

        <div className="mt-10" data-aos="zoom-in">
          <div className="w-full rounded-md shadow-md border border-slate-100 hover:shadow-sm p-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex flex-col md:flex-row float-left items-center gap-4">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="w-24"
                    src={globemind}
                    alt="globeminds_logo"
                    loading="lazy"
                  />
                </a>
                <h2 className="font-semibold md:text-lg text-left">
                  React JS Developer at Globeminds Technologies
                </h2>
              </div>
              <div>
                <p className="font-medium">Oct 2023 - Present</p>
              </div>
            </div>

            <div className="mt-5">
              <p className="text-[#3f3f46]">
                As a React JS Developer at Globeminds Technologies Pvt Ltd, played a
                key role in developing and maintaining dynamic web applications,
                focusing on creating responsive and engaging user interfaces
                with React JS. By working closely with cross-functional teams,
                including designers and backend developers, contributed to the
                seamless design, development, and deployment of software
                solutions that meet high standards of quality.
                <br />
                Used Redux for efficient state management, which improved data
                flow and boosted application performance. Built modern and
                intuitive UI components using HTML, CSS, and JavaScript, and
                ensured that the design remained consistent and visually
                appealing with the help of Tailwind CSS and SCSS. Actively
                managed code versions with Git, ensuring smooth collaboration
                and version control within the team.
                <br />
                Additionally, expanded expertise into server-side development
                with Node JS, contributing to the backend functionality that
                supported the frontend. This experience not only honed web
                development skills but also provided a solid foundation for
                building scalable, maintainable software solutions that deliver
                real value to users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
