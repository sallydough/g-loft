import React, { useState, useEffect } from 'react';
import "./Temperature.css";
import { FaArrowRight, FaArrowLeft, FaArrowDown } from "react-icons/fa";
import { PiPhoneCallFill } from "react-icons/pi";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faCircleMinus } from '@fortawesome/free-solid-svg-icons';

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
      {size === 'big-card' ? (
        <div className="inside-icons">
          <RemoteLogo icon={icon} size={iconSize} />
        </div>
      ) : (
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

  const RemoteLogo =() =>{
    return(
    <svg width="250" height="250" viewBox="0 0 318 292" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M302.762 146C302.631 226.634 237.936 292 158.262 292C78.5885 292 14.1069 226.634 14.2384 146C14.3699 65.3664 79.0648 0 158.738 0C238.412 0 302.894 65.3664 302.762 146Z" fill="#353535"/>
    <ellipse cx="78.5211" cy="79.4673" rx="78.5211" ry="79.4673" transform="matrix(1 0 -0.00163104 0.999999 80.0625 66.4731)" fill="#6A6C72"/>
    <path d="M256.312 114.25L290.176 143.652L256.312 177.448" stroke="white" stroke-width="37"/>
    <path d="M61.153 177.608L27.2891 148.206L61.153 114.41" stroke="white" stroke-width="37"/>
    <path d="M146.424 163.528C143.344 163.528 140.645 162.853 138.328 161.504C136.04 160.155 134.236 158.292 132.916 155.916C131.625 153.511 130.98 150.739 130.98 147.6C130.98 144.461 131.625 141.704 132.916 139.328C134.236 136.923 136.04 135.045 138.328 133.696C140.645 132.347 143.344 131.672 146.424 131.672C149.475 131.672 152.159 132.347 154.476 133.696C156.793 135.045 158.597 136.923 159.888 139.328C161.179 141.704 161.824 144.461 161.824 147.6C161.824 150.739 161.179 153.511 159.888 155.916C158.597 158.292 156.793 160.155 154.476 161.504C152.159 162.853 149.475 163.528 146.424 163.528ZM146.424 158.468C149.357 158.468 151.689 157.5 153.42 155.564C155.18 153.628 156.06 150.973 156.06 147.6C156.06 144.227 155.18 141.572 153.42 139.636C151.689 137.7 149.357 136.732 146.424 136.732C143.491 136.732 141.144 137.7 139.384 139.636C137.624 141.572 136.744 144.227 136.744 147.6C136.744 150.973 137.624 153.628 139.384 155.564C141.144 157.5 143.491 158.468 146.424 158.468ZM166.797 163V132.2H172.429V144.652L183.825 132.2H190.777L179.425 144.432L191.085 163H184.177L175.377 148.744L172.429 151.956V163H166.797Z" fill="white"/>
    </svg>
  )}

  return (
    <div className="main">
      <Link to="/controls" className="linkStyle">
          <div className="nav-bar-logo">
            <h1>Back To Loft Controls</h1>
          </div>
        </Link>

      <div className="slide-call-1">
 <div className="card-container">
        {createCard('Decrease Temperature', faCircleMinus, decreaseTemperature, 'small-card', '8x')}

        <section className="arrow-icon" onClick={decreaseTemperature}>
          <FaArrowLeft size="1x" />
        </section>

        {createCard('Temperature',<RemoteLogo />, null, 'big-card', '7x')}

        <section className="arrow-icon" onClick={increaseTemperature}>
        <FaArrowRight size="0.5x" />
        </section>

        {createCard('Increase Temperature', faCirclePlus, increaseTemperature, 'small-card', '8x')}
      </div>

        {/* <div className="arrow-down">
          <FaArrowDown size={90} className="arrow-down-gf" color="white" />
        </div> */}
      <div onClick={handleHelpClick} className="call-help-1">
            <PiPhoneCallFill size={70} />
            <h1>Call Support</h1>
          </div>
      </div>
    </div>
  );
};

export default Temperature;
