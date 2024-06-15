import Image from "next/image";
import React from "react";
import about from "@/assets/about.png";

const About = () => {
  return (
    <div
      id="about"
      className="w-11/12 md:w-10/12 mx-auto flex flex-col md:flex-col lg:flex-row gap-5 md:gap-20 pt-12 items-center"
    >
      <div className="w-full">
        <Image className="w-full" src={about} alt="hero" loading="lazy" />
      </div>

      <div className="w-full">
        <div>
          <h2 className="text-2xl font-bold">Vrushabh Veer</h2>
          <p className="font-medium text-[#ed732b]">Software Developer</p>
        </div>

        <p className="mt-5 text-[#3f3f46]">
          As a self-motivated developer and creative individual, I am deeply
          passionate about crafting user-friendly products that resonate with
          users. I thrive on the continuous development of technical skills,
          always seeking new challenges to grow and evolve professionally. My
          enthusiasm lies in taking on complex roles that not only push my
          limits but also contribute significantly to an organizations overall
          growth and development. I am excited about the opportunity to create
          innovative solutions and make a meaningful impact.
        </p>

        <a href="./Vrushabh_Veer-Resume.pdf" download>
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
