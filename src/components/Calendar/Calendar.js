
import './calendar.css'
import React from 'react'
import {Link} from 'react-router-dom';
import pic1 from './calendar-gf3.png';



const Calendar = () => {

  // handle Help Button

  return (
    <Link to="/" className="linkStyle"><div id="calendar">
      <img src={pic1} alt="" /></div></Link>
     
  )
}

export default Calendar