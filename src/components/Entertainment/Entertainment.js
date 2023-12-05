import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './entertainment.css'
import { PiPhoneCallFill } from "react-icons/pi";
import {Link} from 'react-router-dom';

const Entertainment = ({ apiKey, videoId }) => {

  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos`,
          {
            params: {
              part: 'snippet',
              id: videoId,
              key: apiKey,
            },
          }
        );

        setVideo(response.data.items[0]);
      } catch (error) {
        console.error('Error fetching YouTube video:', error);
      }
    };

    if (videoId) {
      fetchVideoData();
    }
  }, [videoId, apiKey]);

  if (!video) {
    return null;
  }

  const { snippet } = video;
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

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
  return (
    <>
    <div id='entertainment'>
    <Link to="/controls" className="linkStyle">
          <div className="nav-bar-logo">
            <h1>Back To Loft Controls</h1>
          </div>
        </Link>

      <div className="slider-call-1">
      <iframe
        title={snippet.title}
        width="1050"
        height="600"
        src={videoUrl}
        allowFullScreen
      ></iframe>
      {/* <h2>{snippet.title}</h2>
      <p>{snippet.description}</p> */}
    </div>
    <div onClick={makeTwilioHelpCall} className="call-help-1">
            <PiPhoneCallFill size={70} />
            <h1>Call Support</h1>
          </div>
    </div>
  </>
  );
};

export default Entertainment;