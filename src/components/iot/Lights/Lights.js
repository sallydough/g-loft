import "./lights.css";

import { useState } from "react";
import Slider from "react-slick";

import { BsLightbulbFill, BsLightbulb } from "react-icons/bs";
import { PiPhoneCallFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import axios from 'axios';
import {
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";


const navbar = [
  {
    id: 1,
    name: "Bedroom",
    pathway: "/home",
    icon: <BsLightbulbFill size={230} className="nav-icon" />,
  },
  {
    id: 2,
    name: "Bathroom",
    pathway: "/iotControls",
    icon: <BsLightbulbFill size={230} className="nav-icon" />,
  },
  {
    id: 3,
    name: "Dining Room",
    pathway: "/entertainment",
    icon: <BsLightbulbFill size={230} className="nav-icon" />,
  },
  {
    id: 4,
    name: "Kitchen",
    pathway: "/calendar",
    icon: <BsLightbulb size={230} className="nav-icon" />,
  },
];

function Lights() {

    // handle Help Button
    const handleHelpVideo = () => {
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
  
    // twilio call function
  const makeTwilioCall = async () => {
    try {
      const twilioSid = 'API key token here';
      const twilioAuthToken = 'access token put here';
      const destinationPhoneNumber = '+14036901549';
      const twilioPhoneNumber = '+18624374931';
  
      const apiEndpoint = `https://api.twilio.com/2010-04-01/Accounts/${twilioSid}/Calls.json`;
  
      const credentials = `${twilioSid}:${twilioAuthToken}`;
      const base64Credentials = btoa(credentials); 
  
      const response = await axios.post(
        apiEndpoint,
        new URLSearchParams({
          To: destinationPhoneNumber,
          From: twilioPhoneNumber,
          Url: 'https://handler.twilio.com/twiml/EHbfd029cc3862c7fec28b9760ff15b078', // Replace with your TwiML Bin URL or server endpoint
          Method: 'POST',
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${base64Credentials}`,
          },
        }
      );
  
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleHelpClick = async () => {
    try {
      const twilioSid = 'your_twilio_sid';
      const twilioAuthToken = 'your_twilio_auth_token';
      const destinationPhoneNumber = 'recipient_phone_number';
      const twilioPhoneNumber = 'your_twilio_phone_number';
  
      const apiEndpoint = `https://api.twilio.com/2010-04-01/Accounts/${twilioSid}/Calls.json`;
  
      const response = await axios.post(
        apiEndpoint,
        new URLSearchParams({
          To: destinationPhoneNumber,
          From: twilioPhoneNumber,
          Url: 'http://your-server.com/twiml', // Replace with your TwiML Bin URL or server endpoint
          Method: 'POST',
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + Buffer.from(`${twilioSid}:${twilioAuthToken}`).toString('base64'),
          },
        }
      );
  
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  const makeTwilioHelpCall = () => {
  handleHelpClick();
  makeTwilioCall();
  handleHelpVideo();
  }

  // makes lights turn yellow
  const [isYellow, setIsYellow] = useState(false);
  const toggleColor = () => {
    setIsYellow((prevIsYellow) => !prevIsYellow);
  };

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <IoIosArrowForward size={90} />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <IoIosArrowBack size={90} />
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

  // Duncan's code for light

  const delay = (milliseconds) =>
    new Promise((resolve) => setTimeout(resolve, milliseconds));

  const socket = new WebSocket("ws://homeassistant.local:8123/api/websocket");

  socket.onopen = async (event) => {
    console.log("WebSocket connection opened:", event);

    // Authenticate with Home Assistant
    socket.send(
      JSON.stringify({
        type: "auth",
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI3ZTA5NDg5M2E3NGI0MDY1OWFmMzYzYTJkMDYzOGJhMiIsImlhdCI6MTcwMDc3NDU5MCwiZXhwIjoyMDE2MTM0NTkwfQ.VV19RhjO5Dsc01D3g21NV27WlJeioWmvowtibkqsQ5k", // Replace with your access token
      })
    );

    // Listen to changes sent by IOT
    socket.send(
      JSON.stringify({
        id: incrimentalId,
        type: "subscribe_events",
      })
    );

    await delay(500);
    // Call getCurrentSwitchState immediately when the page loads

    getCurrentState();
  };

  let switchState;

  //process recieved messages
  socket.onmessage = (event) => {
    try {
      // console.log(event);
      const receivedData = JSON.parse(event.data);

      if (
        receivedData.type === "event"
        // && Array.isArray(receivedData.result)
      ) {
        let background = document.getElementById("background");
        let iotSwitch = document.getElementById("switch");

        // console.log("receivedData.event");

        if (receivedData.event.data.entity_id === "switch.thing2") {
          switchState = receivedData.event.data.new_state.state === "on";

          if (switchState) {
            //if its on, check the toggleswithc, and add "on" to the body
            iotSwitch.checked = true;
            background.classList.remove("on", "off");
            background.classList.add("on");
          } else {
            iotSwitch.checked = false; //if its off, check the toggle switch, and add "off" to the body
            background.classList.remove("on", "off");
            background.classList.add("off");
          }
        }

        // initial state sensing

        if (
          receivedData.type === "result" &&
          Array.isArray(receivedData.result)
        ) {
          const resultArray = receivedData.result;
          console.log(resultArray);
          for (let i = 0; i < resultArray.length; i++) {
            let currentEntry = resultArray[i];
            if (currentEntry.entity_id === "switch.thing2") {
              switchState = currentEntry.state;
              const iotThing = document.getElementById("switch");
              if (switchState === "on") {
                iotThing.checked = true;
              } else {
                iotThing.checked = false;
              }

              // //console.log(switchState);
              // switchContainer.classList.remove("on", "off"); //Remove both classes
              // switchContainer.classList.add(switchState); // Add the current state as a class
              break;
            }
          }
        } else {
          // console.warn(
          //   "Received data does not match the expected format:",
          //   receivedData
          // );
        }
      }
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }

    // manualToggle = false; // make sure we know the button hasnt been pushed in the last wee bit
  };

  //closing the websocket
  socket.onclose = (event) => {
    console.log("WebSocket connection closed:", event);
  };
  //sending message to the pi
  // function sendMessage(message) {
  //   console.log("Sending message:", message);
  //   socket.send(message);
  // }

  function sendMessage(message) {
    if (socket.readyState === WebSocket.OPEN) {
      console.log("Sending message:", message);
      socket.send(message);
    } else {
      console.error("WebSocket not open yet. Unable to send message:", message);
    }
  }

  // start a counter so theres a different id every time
  let incrimentalId = 1;

  //get the current state of the switch
  function getCurrentState() {
    const message = JSON.stringify({
      id: incrimentalId,
      type: "get_states",
    });
    incrimentalId++;
    console.log(message);
    sendMessage(message);
  }

  // Call getCurrentSwitchState every 2 seconds, unless theres been a manual switch recently
  // setInterval(getCurrentState, 1000);

  //tell the switch to toggle
  function toggleSwitch() {
    // manualToggle = true;
    const message = JSON.stringify({
      id: incrimentalId,
      type: "call_service",
      domain: "switch",
      service: "Toggle",
      service_data: {
        entity_id: "switch.thing2", // Replace with whatever the entity ID is when copying
      },
    });
    sendMessage(message);
    incrimentalId++;
  }

  const toggleColorSwitch = () => {
    toggleColor();
    toggleSwitch();
  }

  return (
    <>
      <div id="lights" className="settings">
        <Link to="/controls" className="linkStyle">
          <div className="nav-bar-logo">
            <h1>Back To Loft Controls</h1>
          </div>
        </Link>
        <div className="slider-call-1">
          <div className="slider">
            <Slider className="linkStyle" {...slidesSettings}>
              {navbar.map((card, idx) => (
                <div
                  id={card.id}
                  className={idx === cardIndex ? "slide activeSlide" : "slide"}
                >
                  {/* {card.icon} */}
                  {isYellow ? (
                    <BsLightbulbFill
                      size={230}
                      color="yellow"
                      onClick={toggleColorSwitch}
                    />
                  ) : (
                    <BsLightbulb
                      size={230}
                      color="white"
                      onClick={toggleColorSwitch}
                    />
                  )}
                  <h1>{card.name}</h1>
                </div>
              ))}
            </Slider>
          </div>
          <div onClick={makeTwilioHelpCall} className="call-help-1">
            <PiPhoneCallFill size={70} />
            <h1>Call Support</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lights;
