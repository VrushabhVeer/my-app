"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import latitude from "@/assets/latitude-logo.webp";
import "aos/dist/aos.css";
import Aos from "aos";

const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div id="experience" className="w-11/12 md:w-10/12 mx-auto flex items-center pt-24 md:pt-0 md:h-[80vh]">
      <div>
      <div className="text-center">
        <h1 className="text-3xl font-bold">My Experience</h1>
        <p className="text-[#3f3f46]">Here is an overview of my work experience.</p>
      </div>

      <div className="mt-10" data-aos="zoom-in">
        <div className="w-full rounded-md shadow-md border border-slate-100 hover:shadow-sm p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col md:flex-row float-left items-center gap-4">
              <a
                href="https://latitudetechnolabs.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="w-20"
                  src={latitude}
                  alt="latitude-logo"
                  loading="lazy"
                />
              </a>
              <h2 className="font-semibold md:text-lg text-left">
                React JS Developer at Latitude Technolabs
              </h2>
            </div>
            <div>
              <p className="font-medium">Nov 2023 - Present</p>
            </div>
          </div>

          <div className="mt-5">
            <p className="text-[#3f3f46]">
              As a React JS Developer at Latitude Technolabs, I developed and
              maintained dynamic web applications. I created responsive and
              interactive user interfaces with React JS to enhance user
              engagement. I collaborated with cross-functional teams to design,
              develop, and deploy software solutions. Using Redux for state
              management, I improved data flow and application performance. I
              also utilized HTML, CSS, and JavaScript to build modern UI
              components and used Tailwind CSS and SCSS for consistent and
              attractive styling. I managed code versions and worked with team
              members using Git. Additionally, I gained experience in
              server-side development with Node JS, contributing to the backend
              functionality. This role helped me enhance my web development
              skills and build scalable, maintainable software solutions.
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Experience;
