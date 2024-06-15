import React from "react";
import projectsData from "@/data/projectsData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="w-11/12 md:w-10/12 mx-auto pt-16">
      <div className="text-center">
        <h1 className="text-3xl font-bold">My Recent Work</h1>
        <p className="text-[#3f3f46]">Here are some projects I have worked on.</p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

