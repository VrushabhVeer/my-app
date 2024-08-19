"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import hero from "@/assets/developer.png";
import "aos/dist/aos.css";
import Aos from "aos";

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      id="hero"
      className="w-11/12 md:w-10/12 mx-auto flex flex-col-reverse md:flex-col-reverse lg:flex-row gap-5 md:gap-20 md:pt-10 items-center"
    >
      <div className="w-full" data-aos="zoom-in">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#224e89]">
            Hello, I&apos;m <span className="name">Vrushabh.</span>
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-[#3f3f46] mt-2">
            I build things for the web.
          </h2>
          <p className="mt-5 text-[#3f3f46]">
            Creating innovative solutions that bring intuitive user interfaces
            and seamless digital experiences to life. Excited to collaborate and
            build something amazing together.
          </p>
          <a href="#contact">
            <button className="bg-[#ecc64d] text-white px-10 py-4 rounded-md mt-8 font-medium">
              Lets Connect
            </button>
          </a>
        </div>
      </div>
      <div className="w-full" data-aos="zoom-in">
        <Image
          className="w-full"
          src={hero}
          alt="hero"
          priority
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default Hero;
