import "./settings.css";
import { useState } from "react";
import Slider from "react-slick";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { BsLightbulbFill, BsLightbulb } from "react-icons/bs";




const navbar = [
  {
    id: 1,
    name: "Bedroom",
    pathway:"/home",
    icon: <BsLightbulbFill size={230} className="nav-icon" />,
  },
  {
    id: 2,
    name: "Bathroom",
    pathway:"/iotControls",
    icon: <BsLightbulbFill size={230} className="nav-icon"/>,
  },
  {
    id: 3,
    name: "Dining Room",
    pathway:"/entertainment",
    icon: <BsLightbulbFill size={230} className="nav-icon"/>,
  },
  {
    id: 4,
    name: "Kitchen",
    pathway:"/calendar",
    icon: <BsLightbulb size={230} className="nav-icon"/>,
  },

];

function Settings() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight size={70} />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft size={70} />
      </div>
    );
  };

  const [cardIndex, setCardIndex] = useState(0);

  const slidesSettings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setCardIndex(next),
  };

  return (
    <>
    <div id="settings" className="settings">
      <div className="nav-bar-logo">
        <h1>Logo and mini nav bar</h1>
      </div>
      <div className="slider">
      <Slider className="linkStyle"  {...slidesSettings}>
        {navbar.map((card, idx) => (
          <div id={card.id} className={idx === cardIndex ? "slide activeSlide" : "slide"}>
         {card.icon}
            <h1>{card.name}</h1>
          </div>
        ))} 
      </Slider>
      </div>
    </div>

    </>
  );
};

export default Settings;