import img1 from "../assets/portfolio-img1.png";
import img2 from "../assets/Aircnc-projects-assects/Screenshot Aircnc-banner.png";
import img3 from "../assets/portfolio-img3.png";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import { Link } from "react-router-dom";
const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          {/* <div> */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 flex flex-col gap-y-[90px] mb-10 lg:mb-0"
          >
            {/* text  */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                my Latest <br />
                Projects
              </h2>
              <p className="max-w-sm mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                eligendi, quisquam perspiciatis totam ut nemo dolor ullam odio
                alias quis?
              </p>
              <button className="btn btn-sm">View all projects</button>
            </div>
            {/* img  */}
            <div className="group relative overflow-hidden border-2 border-white/50  rounded-xl ">
              {/* overlay  */}

              <div className=" group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className=" group-hover:scale-125 transition-all duration-500"
                src={img1}
                alt=""
              />

              {/* practice   */}
              <div className="absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                UI/UX Desing{" "}
              </div>
              {/* title */}
              <div className="absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span>projects title</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className=" flex-1 flex flex-col gap-y-6 "
          >
            <div className="group relative overflow-hidden border-2 border-white/50  rounded-xl ">
              {/* overlay  */}
              <Link to="/details">
                <div className=" group-hover:bg-black/70 w-full h-full absolute  z-40 transition-all duration-300"></div>
                {/* img */}
                <img
                  className="h-[315px] group-hover:scale-125 transition-all duration-500"
                  src={img2}
                  alt=""
                />
              </Link>
              <div className="absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                Tourist Website
              </div>
              {/* title */}
              <div className="absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-gradient">Aircnc</span>
              </div>
            </div>
            {/* img 3  */}
            <div className="group relative overflow-hidden border-2 border-white/50  rounded-xl ">
              {/* overlay  */}
              <div className=" group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className=" group-hover:scale-125 transition-all duration-500"
                src={img3}
                alt=""
              />
              {/* practice   */}
              <div className="absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                UI/UX Desing{" "}
              </div>
              {/* title */}
              <div className="absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span>projects title</span>
              </div>
            </div>
          </motion.div>

          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Work;
