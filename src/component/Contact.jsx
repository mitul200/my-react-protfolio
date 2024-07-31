import { motion } from "framer-motion";
import { fadeIn } from "./variants";
const Contact = () => {
  return (
    <section className="lg:section py-16" id="contact">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 justify-start flex items-center"
          >
            <div>
              <h4 className="text-xl font-medium mb-2 text-accent uppercase tracking-wide">
                Get In touch
              </h4>
              <h2 className="text-[45px]   leading-none mb-12 lg:text-[90px]">
                lets work <br />
                togather!
              </h2>
            </div>
          </motion.div>
          {/* form  */}
          <motion.form
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 border rounded-2xl flex-col gap-y-6 pb-24 p-6"
          >
            <input
              className="bg-transparent border-b py-3 w-full outline-none transition-all focus:border-accent placeholder:text-white"
              type="text"
              placeholder="Yout Name"
            />
            <br />
            <input
              className="bg-transparent border-b py-3 w-full outline-none transition-all focus:border-accent placeholder:text-white"
              type="text"
              placeholder="Yout email"
            />
            <textarea
              className="bg-transparent border-b py-6 outline-none transition-all focus:border-accent 
              placeholder:text-white
              resize-none mb-12 w-full"
              name=""
              id=""
              placeholder="Your message"
            ></textarea>
            <button className="btn btn-sm">Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
