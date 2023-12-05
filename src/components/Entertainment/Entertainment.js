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
    <div onClick={handleHelpClick} className="call-help-1">
            <PiPhoneCallFill size={70} />
            <h1>Call Support</h1>
          </div>
    </div>
  </>
  );
};

export default Entertainment;