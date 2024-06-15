"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/assets/coding.png";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollUp, setScrollUp] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollUp(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { to: "hero", label: "Home" },
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "experience", label: "Experience" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <div
      className={`bg-white sticky top-0 z-50 ${scrollUp ? "shadow-sm" : ""}`}
    >
      <div className="w-11/12 md:w-10/12 mx-auto flex flex-row-reverse md:flex-row-reverse lg:flex-row py-3 items-center justify-between">
        <button className="lg:hidden" onClick={handleToggle}>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        <div className="font-semibold text-2xl">
          <Link
            to="hero"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Image
              className="w-[35px] md:w-[45px] cursor-pointer"
              src={logo}
              alt="logo"
              priority
            />
          </Link>
        </div>

        <div className="hidden md:hidden font-medium lg:flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <p className="cursor-pointer">{link.label}</p>
            </Link>
          ))}

          <a
            href="https://drive.google.com/file/d/1t60wVWhk2df2nwQQwvWKG9RqRTP3pIV7/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Resume</p>
          </a>
        </div>
      </div>

      {isOpen && (
        <div className="pb-8 pt-5 lg:hidden">
          <div className="flex flex-col space-y-5 ml-5 font-medium">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <p className="cursor-pointer">{link.label}</p>
              </Link>
            ))}

            <a
              href="https://drive.google.com/file/d/1t60wVWhk2df2nwQQwvWKG9RqRTP3pIV7/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Resume</p>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
