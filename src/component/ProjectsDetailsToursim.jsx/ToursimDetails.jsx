import { fadeIn } from "../variants";
// import DetailsHeader from "./projects1/DetailsHeader";
import { motion } from "framer-motion";
// import ProjectsCategory from "./projects1/ProjectsCategory";
// import AircncSkilles from "./projects1/AircncSkilles";
import { FaLocationArrow } from "react-icons/fa";

const openAircncSite = () => {
  window.open("https://aircnc-833bd.web.app/", "_blank", "noopener,noreferrer");
};

const ToursimDetails = () => {
  return (
    <div className="bg-[#091f36] ">
      {/* <DetailsHeader /> */}
      <div>
        <motion.h1
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-4xl uppercase mt-10 text-center"
        >
          Wellcome to <span className="text-gradient">Toursim</span>
        </motion.h1>
        <div className=" flex justify-center items-center gap-x-6">
          <motion.p
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-2xl mt-6 mb-4 text-center"
          >
            Here is My Projects Demo
          </motion.p>
          <motion.div
            onClick={openAircncSite}
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="relative inline-block"
          >
            <p className=" focus:outline-none">
              <FaLocationArrow className="text-blue-700 cursor-pointer" />
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-24 bg-black text-white text-center rounded-md px-2 py-1 opacity-0 hover:opacity-100 transition-opacity duration-300">
                Click here
              </span>
            </p>
          </motion.div>
        </div>

        {/* swiper  */}
        <div className="w-[700px] mx-auto">{/* <ProjectsCategory /> */}</div>
        <div>{/* <AircncSkilles /> */}</div>
      </div>
    </div>
  );
};

export default ToursimDetails;
