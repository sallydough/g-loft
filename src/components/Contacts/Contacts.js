import { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft, FaUserAlt } from "react-icons/fa";


import './contacts.css'

const navbar = [
  {
    id: 1,
    name: "John",
    pathway:"/home",
    number: +4031235678,
    icon: <FaUserAlt size={230} className="nav-icon" />,
  },
  {
    id: 2,
    name: "Matthew",
    pathway:"/iotControls",
    number: +4031235678,
    icon: <FaUserAlt size={230} className="nav-icon"/>,
  },
  {
    id: 3,
    name: "Son",
    pathway:"/entertainment",
    number: +4031235678,
    icon: <FaUserAlt size={230} className="nav-icon"/>,
  },
  {
    id: 4,
    name: "Daughter",
    pathway:"/calendar",
    number: +4031235678,
    icon: <FaUserAlt size={230} className="nav-icon"/>,
  },

];

function Contacts() {
    //click contact to call
  const contactCall = () => {
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
    <div id="lights" className="settings">
      <div className="nav-bar-logo">
        <h1>Logo and mini nav bar</h1>
      </div>
      <div className="slider">
      <Slider className="linkStyle"  {...slidesSettings}>
        {navbar.map((card, idx) => (
          <div id={card.id} onClick={contactCall} className={idx === cardIndex ? "slide activeSlide" : "slide"}   >
             <h1>{card.name}</h1>
            {card.icon}
             </div>
        ))} 
      </Slider>
      </div>
    </div>

    </>
  );
};

export default  Contacts;