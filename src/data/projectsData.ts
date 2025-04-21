import maniacMilk from "@/assets/maniacMilk.png";
import tralive from "@/assets/tralive.png";
import adidas from "@/assets/adidas.png";
import coinvest from "@/assets/coinvest.png";
import readit from "@/assets/readit.png";
import { Project } from "@/data/projectTypes";

const projectsData: Project[] = [
  {
    title: "ManiacMilk",
    image: maniacMilk,
    description:
      "Built a responsive e-commerce site for milk and dairy products using React, Node.js & Tailwind. Integrated Razorpay for payments and added features like cart, order tracking, and admin inventory control.",
    tags: ["Javascript", "React", "Tailwind Css", "Node JS", "Razorpay"],
    githubLink: "https://github.com/VrushabhVeer/ManiacMilk-frontend",
    liveLink: "https://maniacmilk.in/",
  },
  {
    title: "Tralive",
    image: tralive,
    description:
      "Tralive is a Simple Travel Companion! This website, made with Next.js, Tailwind CSS, and React, makes travel planning a breeze. easy browsing, planning, and booking for your next adventure.",
    tags: ["Html", "Css", "React", "Next JS", "Tailwind Css", "Express"],
    githubLink: "https://github.com/VrushabhVeer/tralive",
    liveLink: "https://tralive.vercel.app",
  },
  {
    title: "Adidas",
    image: adidas,
    description:
      "Adidas is a German multinational Sport Apparel and Footware company, There are differents types of sport wear are available on the website and it is famouse for its shoes.",
    tags: ["Html", "Css", "React", "Chakra UI", "Redux"],
    githubLink: "https://github.com/VrushabhVeer/adidas",
    liveLink: "https://adidas-shopping.vercel.app",
  },
  {
    title: "Coinvest",
    image: coinvest,
    description:
      "Coinvest is a cryptocurrency trading app, where you can buy or sell the cryptocurrencies, you can see the current market value, prizes & stats of the coin live & buy or sell according to stats.",
    tags: [
      "Html",
      "Css",
      "React",
      "Chakra UI",
      "Mongo DB",
      "Express",
      "Mongoose",
    ],
    githubLink: "https://github.com/VrushabhVeer/coinvest",
    liveLink: "https://coinvest-crypto-trading.vercel.app",
  },
  {
    title: "Readit",
    image: readit,
    description:
      "Readit is a blog writing website, On readit we can write our blog and we can publish it. here we can read other peoples blogs, we can delete, update our blogs here.",
    tags: [
      "Html",
      "Css",
      "React",
      "Chakra UI",
      "Mongo DB",
      "Express",
      "Mongoose",
    ],
    githubLink: "https://github.com/VrushabhVeer/Readit.git",
    liveLink: "https://readit-blogs.vercel.app",
  },
];

export default projectsData;
