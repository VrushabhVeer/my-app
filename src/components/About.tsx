"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import about from "@/assets/about.png";
import "aos/dist/aos.css";
import Aos from "aos";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      id="about"
      className="w-11/12 md:w-10/12 mx-auto flex flex-col md:flex-col lg:flex-row gap-5 md:gap-20 pt-12 items-center"
    >
      <div className="w-full" data-aos="zoom-in">
        <Image className="w-full" src={about} alt="hero" loading="lazy" />
      </div>

      <div className="w-full" data-aos="zoom-in">
        <div>
          <h2 className="text-2xl font-bold">Vrushabh Veer</h2>
          <p className="font-medium text-[#ed732b]">Software Developer</p>
        </div>

        <p className="mt-5 text-[#3f3f46]">
          A self-motivated developer and creative individual, deeply passionate
          about crafting user-friendly products that resonate with users.
          Thrives on continuously developing technical skills and always seeks
          new challenges to grow and evolve professionally. Enthusiastic about
          taking on complex roles that push limits while contributing
          significantly to an organizations overall growth and development.
          Excited about the opportunity to create innovative solutions and make
          a meaningful impact.
        </p>

        <a href="./Vrushabh_Veer_Resume.pdf" download>
          <button
            className="mt-8 px-10 py-4 bg-[#ef611b] font-medium text-white rounded-md"
            role="button"
          >
            Checkout My Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;
