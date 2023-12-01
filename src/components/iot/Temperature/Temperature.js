import React, { useState, useEffect } from 'react';
import './Temperature.css';
import { FaTemperatureHigh } from 'react-icons/fa';

const Temperature = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");

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

    if (newTemperature < 15) {
      setTemperatureColor('cold');
    }

    setTemperatureValue(newTemperature);
  };

  const sendSMS = (to, body) => {
    // Make an HTTP request to your server-side endpoint
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
    // You can add additional logic here to handle other side effects
  }, [temperatureColor]);

  return (
    <div id="temperature">
      <div className='app-container'>
        <div className={`temperature-display ${temperatureColor}`}>
          <div></div>
          <div>
            {temperatureValue + "°C"} <FaTemperatureHigh size={150} className={`nav-icon ${temperatureColor}`} />
          </div>
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
