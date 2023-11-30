import "./App.css";
import { useState } from "react";
import Slider from "react-slick";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaArrowRight, FaArrowLeft, FaUser, FaHouseUser, FaAddressBook, FaCalendarAlt, FaCog, FaTv } from "react-icons/fa";
// import iotControls from "../src/components/iot/iotControls/IotControls"
import Entertainment from "./components/Entertainment/Entertainment";
import Calendar from "./components/Calendar/Calendar";
import Contact from "./components/Contacts/Contacts";
import Settings from "./components/Settings/Settings";
import Home from "./components/Home/Home";

const navbar = [
  {
    id: 1,
    name: "Home",
    pathway:"/home",
    icon: <FaUser size={230} className="nav-icon" />,
  },
  {
    id: 2,
    name: "IoT Controls",
    pathway:"/iotControls",
    icon: <FaHouseUser size={230} className="nav-icon"/>,
  },
  {
    id: 3,
    name: "Watch TV",
    pathway:"/entertainment",
    icon: <FaTv size={230} className="nav-icon"/>,
  },
  {
    id: 4,
    name: "Calendar",
    pathway:"/calendar",
    icon: <FaCalendarAlt size={230} className="nav-icon"/>,
  },
  {
    id: 5,
    name: "Contacts",
    pathway:"/contacts",
    icon: <FaAddressBook size={230} className="nav-icon"/>,
  },
  {
    id: 6,
    name: "Settings",
    pathway:"/settings",
    icon: <FaCog size={230} className="nav-icon"/>,
  }
];

function Home() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [cardIndex, setCardIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 5,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setCardIndex(next),
  };

  return (
    <>
<Router>
    <div className="App">
      <div id="settings">

      </div>
      <Slider {...settings}>
        {navbar.map((card, idx) => (
          <Link to={card.pathway}  >
          <div id={card.id} className={idx === cardIndex ? "slide activeSlide" : "slide"}>
         {card.icon}
            <h1>{card.name}</h1>
          </div>
          </Link>
        ))} 
      </Slider>


      <Routes>
      {/* <Route path='/iotControls' element={<iotControls />}></Route> */}
      <Route path='/entertainment' element={<Entertainment />}></Route>
      <Route path='/calendar' element={<Calendar />}></Route>
      <Route path='/contacts' element={<Contact />}></Route>
      <Route path='/settings' element={<Settings />}></Route>
      <Route path='/home' element={<Home />}></Route>
    </Routes>
 
    </div>
    </Router>

    </>
  );
};

export default Home;