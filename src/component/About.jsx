import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import khaled2 from "../assets/khaled2.jpg";
// import CountUp from "react-countup";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
// import { fadeIn } from "./variants";
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className=" h-[640px] mix-blend-lighten bg-no-repeat flex flex-col gap-y-10 lg:flex-row   lg:items-center lg:gap-x-20 bg-top lg:gap-y-0">
          {/* img  */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1  "
          >
            <img
              className="relative my-auto mx-auto rounded-full h-[450px] w-[370px]"
              src={khaled2}
              alt=""
            />
          </motion.div>
          {/* text  */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About Me.</h2>
            <h3 className="h3 mb-2">I am a Front-end Web Developer </h3>
            <p className="mb-1">
            Welcome to my portfolio! Discover my frontend web development projects, skills, and expertise. Lets create amazing web experiences together!
            </p>
            {/* stats  */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className=" font-tertiary text-gradient text-[50px] mb-2">
                  {inView ? (
                    <>
                      <CountUp start={0} end={15} duration={3} />+
                    </>
                  ) : null}
                </div>
                <div>
                  Projects are <br />
                  Completed
                </div>
                <div className="max-w-max flex gap-x-6 items-center mx-auto lg:mx-0 mt-2">
                  <button className="btn btn-sm">Contact Me</button>
                  <p>My Protfolio</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
