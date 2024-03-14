import React, { useState } from "react";
import { FaRegShareSquare, FaGithub } from "react-icons/fa";
import { GrCaretPrevious, GrCaretNext } from "react-icons/gr";

const ProjectCard = ({ projectsData }) => {
  const [data, setData] = useState(0);

  const handleNext = () => {
    if (data === projectsData.length - 1) {
      // infinite next slide
      setData(0);
    }
    if (data < projectsData.length - 1) {
      setData((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
    if (data === 0) {
      // infinite prev slide
      setData(projectsData.length - 1);
    }
    if (data > 0) {
      setData((prev) => prev - 1);
    }
  };
  const redirectToCode = (index) => {
    window.open(
      `${projectsData[index].githubUrl}`,
      "_blank",
      "noopener noreferrer"
    );
  };

  const redirectToLive = (index) => {
    window.open(
      `${projectsData[index].liveUrl}`,
      "_blank",
      "noopener noreferrer"
    );
  };
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center">
      <div className="flex w-5/5 flex-col md:flex-row justify-between items-center mb-1 md:mb-10 md:mx-10 w-full md:w-10/12 mx-auto rounded-2xl">
        <img
          src={projectsData[data].imageUrl}
          alt="project_img"
          className="w-52 h-36 sm:w-[25rem] sm:h-64 md:w-[33rem] md:h-96 rounded-xl shadow-[0_0px_10px_rgba(0,0,0,0.23)]"
        />
        <div className="px-5 flex justify-center items-center flex-col">
          <div className=" px-3 md:px-0 md:mb-5 mb-0">
            <h1 className="text-center text-md font-semibold mt-3 mb-2 md:mb-3 md:mt-0">
              {projectsData[data].title}
            </h1>

            <p className=" text-gray-500 text-xs md:text-sm px-5 text-wrap h-[200px] overflow-hidden">
              {projectsData[data].description}
            </p>
            <p className="text-center text-xs md:text-md font-semibold md:text-sm text-wrap">
              {projectsData[data].tech}
            </p>
          </div>
          <div className="flex justify-around gap-3">
            <button
              className="text-center w-[8em] flex justify-center rounded items-center p-2 hover:bg-gray-200 bg-gray-100"
              onClick={() => redirectToCode(data)}
            >
              Code
              <span className="ml-2">
                <FaGithub size={20} />
              </span>
            </button>
            <button
              className=" text-center w-[9em] flex justify-center rounded items-center p-2 hover:bg-gray-200  bg-gray-100"
              onClick={() => redirectToLive(data)}
            >
              Live Demo
              <span className="ml-2">
                <FaRegShareSquare size={19} />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center px-10">
        <div className="flex w-[20%] justify-around">
          <button
            // disabled={data > 0 ? false : true}
            className="text-[#358BFC] cursor-pointer hover:scale-100 flex justify-center items-center mr-3 p-3 rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.1)]"
            onClick={handlePrev}
          >
            <GrCaretPrevious size={20} />
          </button>
          <button
            // disabled={data < projectsData?.length - 1 ? false : true}
            className="text-[#358BFC] cursor-pointer hover:scale-100 flex justify-center items-center mr-3 p-3 rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.1)]"
            onClick={handleNext}
          >
            <GrCaretNext size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
