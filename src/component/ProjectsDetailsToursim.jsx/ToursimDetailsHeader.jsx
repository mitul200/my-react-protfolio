import { Link } from "react-router-dom";

const ToursimDetailsHeader = () => {
  return (
    <div>
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
            <Link to="/">
              <button className="btn btn-sm text-lg lg:text-xl">
                Back to Home ?
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToursimDetailsHeader;
