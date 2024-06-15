import { StaticImageData } from "next/image";

export interface Project {
    title: string;
    image: StaticImageData;
    description: string;
    tags: string[];
    githubLink: string;
    liveLink: string;
  }
  