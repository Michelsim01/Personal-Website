import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "RentNUS",
    description:
      "RentNUS is a website allows NUS students to rent or rent out their items to other students.",
    techstack: "MongoDB, Express.js, React, Node.js",
    image: "/RentNUS.png",
    github: "https://github.com/Michelsim01/RentNUS",
  },
  {
    name: "SCOOPS",
    description: "SCOOPS is a full stack mobile application that serves as an e-commerce platform for small businesses.",
    techstack: "React, Expo, Firebase",
    image: "/SCOOPS.png",
    github: "https://github.com/Michelsim01/SCOOPS",
  },
  {
    name: "LMS",
    description:
      "LMS is a website that allows people to borrow and return books, and allows admins to manage the system.",
    techstack: "Netbeans 12.4, Jakarta EE 8.0 API, Glassfish 5.1, Java Server Faces with Primefaces 8.0",
    image: "/LMS.png",
    github: "https://github.com/Michelsim01/Library-Management-System",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.github}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <p
                      className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400"
                      style={{ color: "blue" }}
                    >
                      {project.techstack}
                    </p>

                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      {/* <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link> */}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
