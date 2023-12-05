import { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft, FaLock } from "react-icons/fa";
import { BsLightbulbFill} from "react-icons/bs";
import { LiaTemperatureHighSolid } from "react-icons/lia";
import { GrMore } from "react-icons/gr";
import { PiPhoneCallFill } from "react-icons/pi";
import {Link} from 'react-router-dom';



const navbar = [
  {
    id: 1,
    name: "Lights",
    pathway:"/lights",
    icon: <BsLightbulbFill size={230} className="nav-icon" />,
  },
  {
    id: 2,
    name: "Temperature",
    pathway:"/temperature",
    icon: <LiaTemperatureHighSolid size={230} className="nav-icon"/>,
  },
  {
    id: 3,
    name: "Door Lock",
    pathway:"/lock",
    icon: <FaLock size={230} className="nav-icon"/>,
  },
  {
    id: 4,
    name: "Other",
    pathway:"/othercontrols",
    icon: <GrMore size={230} className="nav-icon"/>,
  },

];

function Controls() {



  // handle Help Button
const handleHelpClick = () => {
  const phoneNumber = '+1234556778';
  const userChoice = window.confirm('Do you want to call or send an SMS?');

if (userChoice) {
  window.location.href = `tel:${phoneNumber}`;
} else {
  window.location.href = `sms:${phoneNumber}`;
}
  const telUrl = `tel:${phoneNumber}`;
  window.location.href = telUrl;
};


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
      <Link to="/" className="linkStyle"><div className="nav-bar-logo">
        <h1>Back to Menu</h1>
      </div></Link>
      <div className="slider-call-2">
      <div className="slider">
      <Slider className="linkStyle"  {...slidesSettings}>
        {navbar.map((card, idx) => (
          <Link to={card.pathway} className="linkStyle" key={card.id} >
          <div id={card.id} className={idx === cardIndex ? "slide activeSlide" : "slide"}>
         {card.icon}
            <h1>{card.name}</h1>
          </div></Link>
        ))} 
      </Slider>
      </div>
      <div onClick={handleHelpClick} className="call-help-1">
            <PiPhoneCallFill size={70} />
            <h1>Call Support</h1>
          </div>
      </div>
    </div>

    </>
  );
};

export default Controls;