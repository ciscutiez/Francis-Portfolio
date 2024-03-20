import React from "react";
import Button from "./Button";

interface ModalProps {
  project: {
    title: string;
    description: string;
    techStack: string[];
  };
  closeModal: () => void;
}
const projectLinks = [
  { title: "Apexpoint", link: "https://apexpointv2.vercel.app/" },
  { title: "FormApp", link: "https://formapp-fe.vercel.app/" },
  { title: "Chat App", link: "https://chat-application-p07b.onrender.com/" },
];

const Modal: React.FC<ModalProps> = ({ project, closeModal }) => {
  if (!project) return null;

  const projectLink = projectLinks.find((p) => p.title === project.title);
  return (
    <div className="fixed inset-0 mt-[50px] flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="m-2 w-[500px] rounded-lg bg-white p-8 dark:text-black">
        <h2 className="text-2xl font-bold">{project.title}</h2>
        <p className="my-4">{project.description}</p>
        <p className="font-semibold">Tech Stack:</p>
        <ul className=" pl-6 text-[14px] md:text-[16px]">
          {project.techStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="flex flex-row justify-center gap-[10px] py-[20px]">
          <Button className="cursor-not-allowed">View Code</Button>

          {projectLink && <Button href={projectLink.link}>Live Demo</Button>}
        </div>
        <div className="flex items-center justify-center">
          <button
            className="mt-4 rounded bg-red-600 px-4 py-2 hover:bg-red-500 "
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
