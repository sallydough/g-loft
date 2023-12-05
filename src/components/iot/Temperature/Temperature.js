import React, { useState, useEffect } from 'react';
import "./Temperature.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { PiPhoneCallFill } from "react-icons/pi";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faCircleMinus, faThermometer } from '@fortawesome/free-solid-svg-icons';

const Temperature = () => {

  // handle Help Button
  const handleHelpClick = () => {
    const phoneNumber = "+1234556778";
    const userChoice = window.confirm("Do you want to call or send an SMS?");

    if (userChoice) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      window.location.href = `sms:${phoneNumber}`;
    }
    const telUrl = `tel:${phoneNumber}`;
    window.location.href = telUrl;
  };

// change temp function
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
      <Link to="/controls" className="linkStyle">
          <div className="nav-bar-logo">
            <h1>Back To Loft Controls</h1>
          </div>
        </Link>
      <div className="slide-call-1">
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
      <div onClick={handleHelpClick} className="call-help-1">
            <PiPhoneCallFill size={70} />
            <h1>Call Support</h1>
          </div>
      </div>
    </div>
  );
};

export default Temperature;
