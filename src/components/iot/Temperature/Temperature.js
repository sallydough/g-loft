import React, { useState } from 'react';
import './Temperature.css'
import { FaTemperatureHigh} from 'react-icons/fa';


const navbar = [
  {
    id: 1,
    pathway:"/home",
    icon: <FaTemperatureHigh size={150} className="nav-icon" />
  },
  // {
  //   id: 2,
  //   pathway:"/home",
  //   icon: <FaTemperatureLow size={230} className="nav-icon" />
  // },
  ]

const Temperature = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  const increaseTemperature = () => {
    if(temperatureValue === 30) return;
    const newTemperature = temperatureValue + 1;

    if (newTemperature >= 15) {
      setTemperatureColor('hot');
    }

    setTemperatureValue(newTemperature);
  };

  const decreaseTemperature = () => {
    if(temperatureValue === 0) return;
    const newTemperature = temperatureValue - 1;

    if (newTemperature < 15) {
      setTemperatureColor('cold');
    }

    setTemperatureValue(newTemperature);
  };

  return (
    <div id="temperature">
    <div className='app-container'>
      <div className={`temperature-display ${temperatureColor}`}>
      <div></div>
        <div> {temperatureValue + "°C"}</div>
        {navbar.map((card, idx) => (
          <div id={card.id}   >
             {card.icon}
             </div>
        ))} 
      </div>
      <div className='button-container'>
        <button onClick={() => increaseTemperature()}>+</button>
        <button onClick={() => decreaseTemperature()}>-</button>
      </div>
    </div>
    </div>
  );
};

export default Temperature;