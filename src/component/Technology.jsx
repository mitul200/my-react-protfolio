// import React from "react";
import { BsBootstrap } from "react-icons/bs";

import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiFirebase, SiMongodb } from "react-icons/si";

const Technology = () => {
  return (
    <div className="section" id="technology">
      <div className="container mx-auto">
        <div>
          <h1 className="text-4xl text-center mb-20">My Technology <span className="text-gradient">Skills</span></h1>
          <div className=" flex flex-wrap items-center justify-center gap-4">
            <div className=" rounded-2xl border-4 border-neutral-500">
              <RiReactjsLine className="text-[100px] p-3 text-cyan-400" />
            </div>
            <div className=" rounded-2xl border-4 border-neutral-500">
              <SiMongodb className="text-[100px] p-3text-[85px] text-green-500" />
            </div>
            <div className=" rounded-2xl border-4 border-neutral-500">
              <FaNodeJs className="text-[100px] p-3 text-green-600" />
            </div>
            <div className=" rounded-2xl border-4 border-neutral-500">
              <SiFirebase className="text-[100px] p-3 text-yellow-400" />
            </div>
            <div className=" rounded-2xl border-4 border-neutral-500">
              <SiExpress className="text-[100px] p-3 text-cyan-400" />
            </div>
            <div className=" rounded-2xl border-4 border-neutral-500">
              <BsBootstrap className="text-[100px] p-3 text-purple-700" />
            </div>
            <div className=" rounded-2xl border-4 border-neutral-500">
              <RiTailwindCssFill className="text-[100px] p-3 text-cyan-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
