import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Expense Tracker",
    imageUrl: "/expense-tracker.png",
    tech: "React, JavaScript, Global Context",
    description:
      "The Expense Tracker app built on ReactJS is a user-friendly and efficient financial management tool designed to help users monitor, manage, and analyze their expenses in a streamlined manner. With its modern and intuitive interface, the app offers a comprehensive solution for individuals and households to gain better control over their spending habits and financial goals.",
    githubUrl: "https://github.com/Dineshdk1705/expensetrackerapp1",
    liveUrl: "https://dineshdk1705.github.io/expensetrackerapp1/",
  },
  {
    id: 2,
    title: "Todo App",
    imageUrl: "/todo.png",
    tech: "React, Tailwind, LocalStorage",
    description:
      "The Todo App built on ReactJS is a user-friendly and organized task management tool designed to help individuals and teams effectively plan, track, and complete tasks and activities. Featuring a modern and intuitive interface, the app offers a seamless solution for users to stay productive and focused on their goals.",
    githubUrl: "https://github.com/Dineshdk1705/ReactTypeScriptTodo",
    liveUrl: "https://react-type-script-todo-775a.vercel.app/",
  },
  {
    id: 3,
    title: "Facebook Clone",
    imageUrl: "/facebook.jpeg",
    tech: "React, Firebase",
    description:
      "The Facebook Clone Web App built on ReactJS is a feature-rich and visually appealing social networking platform designed to emulate the core functionalities and user experience of the popular social media platform, Facebook. With its modern design and interactive features, the app provides users with a familiar environment for connecting, sharing, and engaging with friends and peers online.",
    githubUrl: "https://github.com/Dineshdk1705/facebookcloneapp",
    liveUrl: "https://facebook-clone-app-27031.web.app/",
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col h-screen text-center mx-auto px-10 justify-evenly items-center pt-20">
      <h1 className="mb-1 text-4xl font-semibold text-[#358BFC]">Projects</h1>
      <h3 className="text-lg font-semibold">
        Each project is a unique piece of development 🧩
      </h3>
      <div className="w-screen h-screen flex items-center md:flex-sm px-10">
        <div className="w-screen h-full relative">
          <div className="flex w-full h-[80%] justify-center items-center">
            <ProjectCard projectsData={projectsData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
