import React, { useState } from 'react';

import axios from 'axios';
import './App.css';

function App() {

const handleHelpClick = async () => {
    try {
      const twilioSid = 'AC2fb69e8e2d9680ecff0ed479789fdb24';
      const twilioAuthToken = 'ae881f35968a2ad0450750fa1aad8e2f';
      const destinationPhoneNumber = '+4036901549';
      const twilioPhoneNumber = '+18624374931'; // Replace with your Twilio phone number

      const apiEndpoint = `https://api.twilio.com/2010-04-01/Accounts/${twilioSid}/Messages.json`;

      const response = await axios.post(
        apiEndpoint,
        new URLSearchParams({
          To: destinationPhoneNumber,
          From: twilioPhoneNumber,
          Body: 'Emergency SMS: Help is needed!',
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          auth: {
            username: twilioSid,
            password: twilioAuthToken,
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };



  //   try {
  //     // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint provided by the service
  //     const apiEndpoint = '1039182824d0a142618a64a28d80ab8d';
      
  //     // Replace 'YOUR_API_KEY' with the actual API key or credentials provided by the service
  //     const apiKey = 'ACce42bd61f141d7138d52e101b621555b';

  //     const response = await axios.post(apiEndpoint, {
  //       apiKey: apiKey,
  //       // Additional parameters as required by the API
  //     });

  //     // Handle the response as needed
  //     console.log(response.data);
  //   } catch (error) {
  //     // Handle errors
  //     console.error(error);
  //   }
  // };

  // const handleHelpClick = () => {
  //   const phoneNumber = '+1234556778';
  //   const userChoice = window.confirm('Do you want to call or send an SMS?');

  // if (userChoice) {
  //   window.location.href = `tel:${phoneNumber}`;
  // } else {
  //   window.location.href = `sms:${phoneNumber}`;
  // }
  //   const telUrl = `tel:${phoneNumber}`;
  //   window.location.href = telUrl;
  //   alert('Help button clicked!');
  // };


  return (
    <>
      
      <div>
        <button onClick={handleHelpClick}>Get Help</button>
      </div>
    </>
  );
  }
export default App;
