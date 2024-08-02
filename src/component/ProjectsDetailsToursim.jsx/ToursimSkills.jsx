// import React from "react";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiFirebase, SiMongodb } from "react-icons/si";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
// import { BsBootstrap } from "react-icons/bs";

const iconVariants = (duration) => ({
  initial: {
    y: -10,
  },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const ToursimSkills = () => {
  return (
    <div className="py-8 flex items-center" id="technology">
      <div className="container mx-auto">
        <div>
          <motion.h1
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-4xl text-center mb-20"
          >
            Aircnc project based on this{" "}
            <span className="text-gradient">technology</span>
          </motion.h1>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className=" flex flex-wrap items-center justify-center gap-4"
          >
            <motion.div
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate"
              className=" rounded-2xl border-4 border-neutral-500"
            >
              <RiReactjsLine className="text-[100px] p-3 text-cyan-400" />
            </motion.div>
            <motion.div
              variants={iconVariants(7)}
              initial="initial"
              animate="animate"
              className=" rounded-2xl border-4 border-neutral-500"
            >
              <SiMongodb className="text-[100px] p-3text-[85px] text-green-500" />
            </motion.div>
            <motion.div
              variants={iconVariants(5)}
              initial="initial"
              animate="animate"
              className=" rounded-2xl border-4 border-neutral-500"
            >
              <FaNodeJs className="text-[100px] p-3 text-green-600" />
            </motion.div>
            <motion.div
              variants={iconVariants(3.5)}
              initial="initial"
              animate="animate"
              className=" rounded-2xl border-4 border-neutral-500"
            >
              <SiFirebase className="text-[100px] p-3 text-yellow-400" />
            </motion.div>
            <motion.div
              variants={iconVariants(4)}
              initial="initial"
              animate="animate"
              className=" rounded-2xl border-4 border-neutral-500"
            >
              <SiExpress className="text-[100px] p-3 text-cyan-400" />
            </motion.div>

            <motion.div
              variants={iconVariants(6)}
              initial="initial"
              animate="animate"
              className=" rounded-2xl border-4 border-neutral-500"
            >
              <RiTailwindCssFill className="text-[100px] p-3 text-cyan-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ToursimSkills;
