import React, { useState, useEffect } from 'react';
import "./Temperature.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faCircleMinus, faThermometer } from '@fortawesome/free-solid-svg-icons';

const Temperature = () => {
  const [temperatureValue, setTemperatureValue] = useState(20);
  const [temperatureColor, setTemperatureColor] = useState('normal');

  const createCard = (title, icon, onClick, size, iconSize = '1x') => (
    <section className={`card ${size}`} onClick={onClick}>
      {title && <h1>{title}</h1>}
      {size === 'big-card' && (
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°C {temperatureColor}
        </div>
      )}
      {icon && (
        <div className="inside-icons">
          <FontAwesomeIcon  icon={icon} size={iconSize} />
        </div>
      )}
    </section>

  );

  const increaseTemperature = () => {
    if (temperatureValue === 30) return;
    const newTemperature = temperatureValue + 1;

    if (newTemperature >= 25) {
      setTemperatureColor('hot');
      sendSMS('+1234567890', 'Temperature is hot!');
    }

    setTemperatureValue(newTemperature);
  };


  const decreaseTemperature = () => {
    if (temperatureValue === 0) return;
    const newTemperature = temperatureValue - 1;
  
    if (newTemperature <= 15) {
      setTemperatureColor('cold');
    } else {
      setTemperatureColor('normal');
    }
  
    setTemperatureValue(newTemperature);
  };
  
  const sendSMS = (to, body) => {
    fetch('http://localhost:3001/send-sms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ to, body }),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  useEffect(() => {
  }, [temperatureColor]);

  return (
    <div className="main">
      <div className="card-container">
        {createCard('Decrease Temperature', faCircleMinus, decreaseTemperature, 'small-card', '10x')}

        <section className="arrow-icon" onClick={decreaseTemperature}>
        <FaArrowLeft size="1x" />
        </section>

        {createCard('Temperature', faThermometer , null, 'big-card', '5x')}

        <section className="arrow-icon" onClick={increaseTemperature}>
        <FaArrowRight size="0.5x" />
        </section>

        {createCard('Increase Temperature', faCirclePlus, increaseTemperature, 'small-card', '10x')}
      </div>
    </div>
  );
};

export default Temperature;