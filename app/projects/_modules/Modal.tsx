import React from "react";

interface ModalProps {
  project: {
    title: string;
    description: string;
    techStack: string[];
  };
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ project, closeModal }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="m-2 w-[500px] rounded-lg bg-white p-8">
        <h2 className="text-2xl font-bold">{project.title}</h2>
        <p className="my-4">{project.description}</p>
        <p className="font-semibold">Tech Stack:</p>
        <ul className="list-disc pl-6">
          {project.techStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="flex items-center justify-center">
          <button
            className="mt-4 rounded bg-gray-300 px-4 py-2 hover:bg-gray-400"
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
