"use client";
import React, { useState } from "react";
import Card from "./_modules/Card";
import Apexpoint from "./_assets/Apexpoint.png";
import FormApp from "./_assets/FormApp.png";
import ChatApp from "./_assets/ChatApp.png";
import Modal from "./_modules/Modal";
import { StaticImageData } from "next/image";

interface Project {
  title: string;
  description: string;
  src: StaticImageData;
  techStack: string[];
}
 const cardData: Project[] = [
  {
    title: "Apexpoint",
    description:
      "A webpage designed as a landing site for a pharmaceutical and medical company.",
    src: Apexpoint,
    techStack: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "FormApp",
    description:
      "An intuitive application tailored for scheduling and managing football team activities, matches, and events.",
    src: FormApp,
    techStack: [
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "Shadcn",
      "Express",
      "Node.js",
      "MongoDB",
    ],
  },
  {
    title: "Chat App",
    description:
      "A cutting-edge real-time communication platform empowered by Socket.IO technology.",
    src: ChatApp,
    techStack: [
      "React.js",
      "Socket.IO",
      "Node.js",
      "JWT",
      "TailwindCSS",
      "Daisy UI",
      "Express.js",
    ],
  },
];

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };
  return (
    <div className="  bg-[#eeecec] text-center md:h-[100vh] md:w-full dark:bg-[#2f2e2e] ">
      <div className="m-[0px] flex flex-col py-[60px]   md:py-[20px] ">
        <h1 className="my-[40px]  text-[24px] font-bold md:my-0">My Work</h1>
        <div
          className="flex flex-col items-center  justify-center gap-[20px] md:flex md:flex-row md:items-center md:pt-[150px]
        "
        >
          {cardData.map((card, index) => (
            <div key={index} className="">
              <Card
                title={card.title}
                description={card.description}
                src={card.src}
                techStack={card.techStack}
                onClick={() => openModal(card)}
              />
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <Modal project={selectedProject!} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Page;
