import image from "../assets/khaled1.jpg";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../component/variants";
const Banner = () => {
  return (
    <section className="section min-h-[85vh] lg:min-h-[78vh]" id="home">
      <div className="container mx-auto">
        <div className=" flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text  */}
          <div className="font-secondary lg:text-left text-center flex-1">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" text-[40px] font-bold leading-[0.8] lg:text-[55px]"
            >
              Khaled <span>Mahamud</span>
            </motion.h1>

            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" mb-6 text-[34px] lg:text-[54px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mr-2">I am a </span>
              <TypeAnimation
                sequence={[
                  "Devaloper",
                  2000,
                  "Desingnar",
                  2000,
                  "Youtuber",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 mx-auto lg:mx-0 max-w-lg"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
              suscipit odit error iusto dicta, accusantium velit tenetur vel
              repudiandae quas.
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="max-w-max flex gap-x-6 items-center   mx-auto lg:mx-0"
            >
              <button className="btn btn-sm">Contact Me</button>
              <a href="#">My Protfolio</a>
            </motion.div>
            {/* social icon  */}

            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" flex gap-x-6 mx-auto max-w-max lg:mx-0 w-[300px] mt-5"
            >
              <a href="">
                <FaGithub />
              </a>
              <a href="">
                <FaFacebook />
              </a>
              <a href="">
                <FaLinkedin />
              </a>
            </motion.div>
          </div>
          {/* img  */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img
              className="h-[400px] w-[550px] rounded-full hidden lg:flex flex-1"
              src={image}
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
