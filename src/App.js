import "./App.css";
import { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const navbar = [
  "garden loft",
  "iot",
  "entertainment",
  "tv",
  "calendar",
  "contacts",
  "settings",
];

function App() {
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
    <div className="App">
      <Slider {...settings}>
        {navbar.map((card, idx) => (
          <div className={idx === cardIndex ? "slide activeSlide" : "slide"}>
            <FaArrowLeft />
            <h1>{card}</h1>
          </div>
        ))} 

      </Slider>
    </div>
  );
}

export default App;
