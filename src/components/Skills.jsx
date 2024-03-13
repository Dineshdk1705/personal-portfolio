import { IconButton, Tooltip } from "@mui/material";
import React from "react";
import {
  BiLogoTailwindCss,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoCss3,
  BiLogoMongodb,
  BiLogoHtml5,
  BiLogoRedux,
} from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";

const Skills = () => {
  return (
    <div className="flex items-center text-left">
      <h1 className="text-md font-semibold border-r-black border-r-[0.08em] p-[0.5em]">
        Tech Stacks{" "}
      </h1>
      <div className="flex p-[0.5em]">
        <Tooltip title="ReactJS" arrow>
          <IconButton disableRipple={true}>
            <BiLogoReact className="w-10 h-10 text-[#60DBFB] hover:scale-150 transition-all duration-200 hover:cursor-pointer" />
          </IconButton>
        </Tooltip>
        <Tooltip title="NextJS" arrow>
          <IconButton disableRipple={true}>
            <SiNextdotjs className="w-10 h-10 text-black hover:scale-150 transition-all duration-200 hover:cursor-pointer" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Redux" arrow>
          <IconButton disableRipple={true}>
            <BiLogoRedux className="w-10 h-10 text-purple-500 hover:scale-150 transition-all duration-200 hover:cursor-pointer" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Tailwind CSS" arrow>
          <IconButton disableRipple={true}>
            <BiLogoTailwindCss className="w-10 h-10 text-[#00B8D5] hover:scale-150 transition-all duration-200 hover:cursor-pointer" />
          </IconButton>
        </Tooltip>
        <Tooltip title="TypeScript" arrow>
          <IconButton disableRipple={true}>
            <BiLogoTypescript className="w-10 h-10 text-[#3077C6] hover:scale-150 transition-all duration-200 hover:cursor-pointer" />
          </IconButton>
        </Tooltip>
        <Tooltip title="JavaScript" arrow>
          <IconButton disableRipple={true}>
            <BiLogoJavascript className="w-10 h-10 text-yellow-400 hover:scale-150 transition-all duration-200 hover:cursor-pointer" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Html" arrow>
          <IconButton disableRipple={true}>
            <BiLogoHtml5 className="w-10 h-10 text-[#FF9002] hover:scale-150 transition-all duration-200 hover:cursor-pointer" />
          </IconButton>
        </Tooltip>
        <Tooltip title="CSS" arrow>
          <IconButton disableRipple={true}>
            <BiLogoCss3 className="w-10 h-10 text-[#264DE4] hover:scale-150 transition-all duration-200 hover:cursor-pointer" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Bootstrap" arrow>
          <IconButton disableRipple={true}>
            <FaBootstrap className="w-10 h-10 text-[#b153ec] hover:scale-150 transition-all duration-200 hover:cursor-pointer" />
          </IconButton>
        </Tooltip>
        <Tooltip title="NodeJS" arrow>
          <IconButton disableRipple={true}>
            <BiLogoNodejs className="w-10 h-10 text-[#83CD29] hover:scale-150 transition-all duration-200 hover:cursor-pointer" />
          </IconButton>
        </Tooltip>
        <Tooltip title="MongoDB" arrow>
          <IconButton disableRipple={true}>
            <BiLogoMongodb className="w-10 h-10 text-[#4FAA41] hover:scale-150 transition-all duration-200 hover:cursor-pointer" />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

export default Skills;
