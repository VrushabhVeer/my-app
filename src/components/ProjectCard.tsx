import Image from "next/image";
import React from "react";
import github from "@/assets/github.png";
import liveUrl from "@/assets/link.png";
import { Project } from "@/data/projectTypes";

const ProjectCard: React.FC<Project> = ({ title, image, description, tags, githubLink, liveLink }) => (
  <div className="rounded-md shadow-lg hover:shadow-sm">
    <div>
      <Image
        className="w-full rounded-t-md"
        src={image}
        alt={title}
        loading="lazy"
      />
    </div>
    <div className="p-5">
      <h2 className="font-semibold text-xl">{title}</h2>
      <p className="text-[#3f3f46] mt-1">{description}</p>
      <div className="flex flex-wrap items-center gap-4 mt-5">
        {tags.map((tag) => (
          <p key={tag} className="bg-orange-50 text-[#3f3f46] px-3 py-1 text-sm font-medium rounded-full">
            {tag}
          </p>
        ))}
      </div>
      <div className="mt-5 flex flex-row items-center justify-between">
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <Image
              className="w-6"
              src={github}
              alt="github-icon"
              loading="lazy"
            />
          </a>
        )}
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <Image
              className="w-6"
              src={liveUrl}
              alt="link-icon"
              loading="lazy"
            />
          </a>
        )}
      </div>
    </div>
  </div>
);

export default ProjectCard;
