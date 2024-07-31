// import logo from "../assets/khaled mahamud.jpg";
const Header = () => {
  return (
    <div className="py-8">
      <div className=" container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            {/* <img src={logo} alt="" /> */}
            <h1 className="text-3xl  uppercase">
              khaled <span className="text-gradient">Mahamud</span>
            </h1>
          </div>
          {/* button  */}
          <button className="btn btn-sm text-xl">Work with me</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
