import About from "./component/About";
import Banner from "./component/Banner";
import Contact from "./component/Contact";
import Header from "./component/Header";
import Nav from "./component/Nav";
import Service from "./component/Service";
import Technology from "./component/Technology";
import Work from "./component/Work";

const App = () => {
  return (
    <div className=" bg-[#091f36] bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <About />
      <Service />
      <Technology />
      <Work />
      <Contact />
      <Nav />
      <div className="h-[6000px]"></div>
    </div>
  );
};

export default App;
