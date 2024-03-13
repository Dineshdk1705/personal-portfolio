import React, { useState } from "react";
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { FaRegShareSquare, FaGithub } from "react-icons/fa";

const ProjectCard = ({ projectsData }) => {
  const [data, setData] = useState(0);

  const handleNext = () => {
    if (data < projectsData.length - 1) {
      setData((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
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
    <div className="w-[80%] h-full flex justify-center items-center">
      <IconButton
        disabled={data > 0 ? false : true}
        className="cursor-pointer hover:scale-100 w-10 h-10 flex justify-center items-center"
        onClick={handlePrev}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <div className="flex justify-between items-center mx-10">
        <img
          src={projectsData[data].imageUrl}
          alt="project_img"
          width="530"
          height="530"
          className="drop-shadow-xl object-cover"
        />
        <div className="px-5 h-full min-h-[350px] text-sm flex justify-center items-center flex-col">
          <div className="mb-10">
            <h1 className="text-center text-xl font-semibold pb-10">
              {projectsData[data].title}
            </h1>

            <p className=" text-gray-500 text-sm mb-1 text-justify h-[200px]">
              {projectsData[data].description}
            </p>
            <p className="text-center">{projectsData[data].tech}</p>
          </div>
          <div className="flex justify-around gap-3">
            <button
              className="text-center w-[8em] flex justify-center rounded items-center p-2 hover:bg-gray-100"
              onClick={() => redirectToCode(data)}
            >
              Code
              <span className="ml-2">
                <FaGithub size={20} />
              </span>
            </button>
            <button
              className="text-center w-[9em] flex justify-center rounded items-center p-2 hover:bg-gray-100"
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
      <IconButton
        disabled={data < projectsData?.length - 1 ? false : true}
        className="cursor-pointer hover:scale-100 w-10 h-10 flex justify-center items-center"
        onClick={handleNext}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </div>
  );
};

export default ProjectCard;
