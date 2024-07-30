import { motion } from "framer-motion";
import { BsArrowBarRight } from "react-icons/bs";
const service = [
  {
    name: "UI/UX Desing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cupiditate ipsa necessitatibus facilis ",
    link: "learn more",
  },
  {
    name: "Freelacing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cupiditate ipsa necessitatibus facilis  ",
    link: "learn more",
  },
  {
    name: "Content creator",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cupiditate ipsa necessitatibus facilis  ",
    link: "learn more",
  },
];
// flex flex-col gap-y-10 lg:flex-row   lg:items-center lg:gap-x-20 h-screen lg:gap-y-0

const Service = () => {
  return (
    <section className="section h-screen" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <div className=" flex-1 lg:bg-bottom bg-no-repeat lg:bg-services mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="h2 mb-6 text-accent">What i do</h2>
            <h3 className="h3 max-w-[455px] mb-16 ">
              I am a Front-end Web Developer
            </h3>
            <button className="btn btn-sm">See my Work</button>
          </div>
          <div>
            {/* services */}
            <div className="flex-1">
              {/* service list */}
              <div>
                {service.map((service, index) => {
                  const { name, description, link } = service;
                  return (
                    <div
                      key={index + 1}
                      className="border-b border-white/20 h-[170px] mb-[38px]"
                    >
                      <div className="max-w-[476px]">
                        <h1 className=" text-[20px] tracking-wider font-primary font-semibold font mb-6">
                          {name}
                        </h1>
                        <p className=" font-secondary leading-tight">
                          {description}
                        </p>
                      </div>
                      <div className="mb-2 flex flex-col items-end">
                        <a href="">
                          <BsArrowBarRight />
                        </a>
                        <a href="">{link}</a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
