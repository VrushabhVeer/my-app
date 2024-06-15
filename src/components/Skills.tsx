import Image from "next/image";
import React from "react";
import html from "@/assets/html-5.png";
import css from "@/assets/css-3.png";
import javascript from "@/assets/javascript.png";
import react from "@/assets/react-js.png";
import redux from "@/assets/redux.png";
import bootstrap from "@/assets/bootstrap.png";
import tailwind from "@/assets/tailwind-css.png";
import chakra from "@/assets/chakra-ui.png";
import sass from "@/assets/sass.png";
import git from "@/assets/git.png";
import github from "@/assets/github.png";
import nextJs from "@/assets/next-js.png";

const skills = [
  { src: html, alt: "HTML 5", label: "HTML 5" },
  { src: css, alt: "CSS 3", label: "CSS 3" },
  { src: javascript, alt: "Javascript", label: "Javascript" },
  { src: react, alt: "React", label: "React" },
  { src: redux, alt: "Redux", label: "Redux" },
  { src: bootstrap, alt: "Bootstrap", label: "Bootstrap" },
  { src: tailwind, alt: "Tailwind CSS", label: "Tailwind CSS" },
  { src: chakra, alt: "Chakra UI", label: "Chakra UI" },
  { src: sass, alt: "SCSS", label: "SCSS" },
  { src: git, alt: "Git", label: "Git" },
  { src: github, alt: "Github", label: "Github" },
  { src: nextJs, alt: "Next Js", label: "Next Js" },
];

const Skills = () => {
  return (
    <div id="skills" className="w-10/12 mx-auto pt-24">
      <div className="text-center">
        <h1 className="text-3xl font-bold">My Skills</h1>
        <p className="text-[#3f3f46]">This are the some of my major skills.</p>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 md:gap-10 mt-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-6 rounded-md flex flex-col items-center bg-blue-50 hover:shadow-md"
          >
            <Image
              className="w-14 h-14 object-contain"
              src={skill.src}
              alt={skill.alt}
              loading="lazy"
            />
            <h2 className="text-center mt-4 text-sm md:text-base">{skill.label}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
