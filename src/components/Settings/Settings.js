import "./settings.css";
import { useState } from "react";
import Slider from "react-slick";
import {
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import { RxFontSize } from "react-icons/rx";
import { GrLanguage, GrMore } from "react-icons/gr";
import { IoIosColorPalette } from "react-icons/io";
import { PiPhoneCallFill } from "react-icons/pi";
import {Link} from 'react-router-dom';
import axios from "axios";


const navbar = [
  {
    id: 1,
    name: `Change Font Size`,
    pathway:"/home",
    icon: <RxFontSize size={230} className="nav-icon" />,
  },
  {
    id: 2,
    name: "Change Language",
    pathway:"/controls",
    icon: <GrLanguage size={230} className="nav-icon"/>,
  },
  {
    id: 3,
    name: "Change Theme",
    pathway:"/entertainment",
    icon: <IoIosColorPalette size={230} className="nav-icon"/>,
  },
  {
    id: 4,
    name: "More",
    pathway:"/calendar",
    icon: <GrMore size={230} className="nav-icon"/>,
  },

];

function Settings() {
  // handle Help Button
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

// function for arrows
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

  

  return (
    <>
    <div id="settings" className="settings">
      <Link to="/" className="linkStyle"><div className="nav-bar-logo">
        <h1>Back to Menu</h1>
      </div></Link>
      <div className="slider-call-1">
      <div className="slider">
      <Slider className="linkStyle"  {...slidesSettings}>
        {navbar.map((card, idx) => (
          <div id={card.id} className={idx === cardIndex ? "slide activeSlide" : "slide"}>
         {card.icon}
         {/* {isYellow ? (
        <BsLightbulbFill size={230} color="yellow" onClick={toggleColor} />
      ) : (
        <BsLightbulb size={230} color="white" onClick={toggleColor} />
      )} */}
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
};

export default Settings;