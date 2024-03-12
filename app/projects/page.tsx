"use client";
import React, { useState } from "react";
import Card from "./_modules/Card";
import Apexpoint from "./_assets/Apexpoint.png";
import FormApp from "./_assets/FormApp.png";
import ChatApp from "./_assets/ChatApp.png";
import Modal from "./_modules/Modal";

interface Project {
  title: string;
  description: string;
  techStack: string[];
}
const cardData = [
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
      "Framer Motion",
      "Axios",
      "Zustand",
      "Formik",
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
      "Zustand",
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
    <div className="m-0 flex h-full w-full bg-[#eeecec] md:m-5 md:h-[735px] md:rounded-[25px] dark:bg-[#2f2e2e] ">
      <div className="m-[10px] flex flex-col py-[60px]  md:px-[50px] md:py-[75px] ">
        <h1 className="pt-[30px] text-[24px] font-bold md:pt-0">My Work</h1>
        <div
          className="flex flex-col items-center justify-center gap-[20px] md:flex md:flex-row md:items-center md:justify-evenly md:px-[70px] md:pt-[40px]
        "
        >
          {cardData.map((card, index) => (
            <div key={index}>
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
