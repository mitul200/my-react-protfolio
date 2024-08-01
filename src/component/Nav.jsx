import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
import { Link } from "react-scroll";
import { FaTools } from "react-icons/fa";
const Nav = () => {
  return (
    <nav className=" fixed bottom-2 lg:bottom-8 w-full z-50 overflow-hidden ">
      <div className="container mx-auto">
        <div className=" w-full bg-black/20 h-[96px] backdrop-blur-2xl  max-w-[460px] rounded-full mx-auto flex justify-between text-white/50 px-5 text-2xl items-center">
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            to="home"
            className=" w-[60px] h-[60px] flex items-center justify-center cursor-pointer "
          >
            <BiHomeAlt />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="about"
            className=" w-[60px] h-[60px] flex items-center justify-center cursor-pointer "
          >
            <BiUser />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="services"
            className=" w-[60px] h-[60px] flex items-center justify-center cursor-pointer "
          >
            <BsChatSquare />
          </Link>
          {/* technology */}
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="technology"
            className=" w-[60px] h-[60px] flex items-center justify-center cursor-pointer "
          >
            <FaTools />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="work"
            className=" w-[60px] h-[60px] flex items-center justify-center cursor-pointer "
          >
            <BsBriefcase />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="contact"
            className=" w-[60px] h-[60px] flex items-center justify-center cursor-pointer "
          >
            <BsClipboardData />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
