import "./settings.css";
import { useState } from "react";
import Slider from "react-slick";

import { FaArrowRight, FaArrowLeft, FaUser, FaHouseUser, FaAddressBook, FaCalendarAlt, FaCog, FaTv } from "react-icons/fa";



const navbar = [
  {
    id: 1,
    name: "Bedroom",
    pathway:"/home",
    icon: <FaUser size={230} className="nav-icon" />,
  },
  {
    id: 2,
    name: "Bathroom",
    pathway:"/iotControls",
    icon: <FaHouseUser size={230} className="nav-icon"/>,
  },
  {
    id: 3,
    name: "Dining Room",
    pathway:"/entertainment",
    icon: <FaTv size={230} className="nav-icon"/>,
  },
  {
    id: 4,
    name: "Kitchen",
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

function Settings() {
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

  const slidesSettings = {
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
    <div id="settings" className="settings">
      <Slider {...slidesSettings}>
        {navbar.map((card, idx) => (
          <div id={card.id} className={idx === cardIndex ? "slide activeSlide" : "slide"}>
         {card.icon}
            <h1>{card.name}</h1>
          </div>
        ))} 
      </Slider>
 
    </div>

    </>
  );
};

export default Settings;