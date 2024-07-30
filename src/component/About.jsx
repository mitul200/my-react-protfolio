import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import khaled2 from "../assets/khaled2.jpg";
// import CountUp from "react-countup";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
// import { fadeIn } from "./variants";
const About = () => {
  const [ref, inView] = useInView({
    thresholdL: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className=" flex flex-col gap-y-10 lg:flex-row   lg:items-center lg:gap-x-20 h-screen lg:gap-y-0">
          {/* img  */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 mt-[300px] "
          >
            <img
              className=" my-auto mx-auto rounded-full h-[500px] w-[420px]"
              src={khaled2}
              alt=""
            />
          </motion.div>
          {/* text  */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent lg:mt-40">About Me.</h2>
            <h3 className="h3 mb-4">I am a Front-end Web Developer </h3>
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eos
              libero labore ipsam illo molestiae porro itaque aut aspernatur
              neque.
            </p>
            {/* stats  */}
            <div className="">
              <div>
                <div className=" font-tertiary text-gradient text-[50px] mb-2">
                  {inView ? (
                    <>
                      <CountUp start={0} end={15} duration={3} />+
                    </>
                  ) : null}
                </div>
                <div className="">
                  Projects are <br />
                  Completed
                </div>
                <div className="max-w-max flex gap-x-6 items-center mx-auto lg:mx-0 mt-4">
                  <button className="btn btn-sm">Contact Me</button>
                  <a href="#">My Protfolio</a>
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
