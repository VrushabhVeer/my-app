import Image from "next/image";
import React from "react";
import coding from "@/assets/coding.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-black py-5 mt-24 text-white w-full">
      <div className="flex flex-col md:flex-row gap-3 items-center justify-between w-10/12 mx-auto">
      <div className="flex flex-row items-center gap-2">
        <div>
          <Image className="w-9" src={coding} alt="" loading="lazy" />
        </div>
      </div>
      <div>
        <p className="text-sm">{currentYear}, Made By Vrushabh Veer.</p>
      </div>
    </div>
    </div>
  );
};

export default Footer;
