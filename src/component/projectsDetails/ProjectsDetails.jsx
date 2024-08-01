// import Header from "../Header";
import { fadeIn } from "../variants";
import DetailsHeader from "./projects1/DetailsHeader";
import { motion } from "framer-motion";
import ProjectsCategory from "./projects1/ProjectsCategory";
import AircncSkilles from "./projects1/AircncSkilles";
const ProjectsDetails = () => {
  return (
    <div className="bg-[#091f36] ">
      <DetailsHeader />
      <div>
        <motion.h1
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-4xl uppercase mt-10 text-center"
        >
          Wellcome to <span className="text-gradient">Aircnc</span>
        </motion.h1>
        <motion.p
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-2xl mt-6 mb-4 text-center"
        >
          Here is My Projects Demo
        </motion.p>

        {/* swiper  */}
        <div className="w-[700px] mx-auto">
          <ProjectsCategory />
        </div>
        <div>
          <AircncSkilles />
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetails;
