import { useState } from "react";
import Slider from "react-slick";
import { FaUserAlt } from "react-icons/fa";
import Modal from 'react-modal';
import {Link} from 'react-router-dom';
import { PiPhoneCallFill } from "react-icons/pi";
import './contacts.css'
import {
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";

const navbar = [
  {
    id: 1,
    name: "John",
    pathway:"/home",
    number: +4031235678,
    icon: <FaUserAlt size={230} className="nav-icon" />,
  },
  {
    id: 2,
    name: "Matthew",
    pathway:"/iotControls",
    number: +4031235678,
    icon: <FaUserAlt size={230} className="nav-icon"/>,
  },
  {
    id: 3,
    name: "Son",
    pathway:"/entertainment",
    number: +4031235678,
    icon: <FaUserAlt size={230} className="nav-icon"/>,
  },
  {
    id: 4,
    name: "Daughter",
    pathway:"/calendar",
    number: +4031235678,
    icon: <FaUserAlt size={230} className="nav-icon"/>,
  },
  {
    id: 5,
    name: "Lucy",
    pathway:"/calendar",
    number: +4031235678,
    icon: <FaUserAlt size={230} className="nav-icon"/>,
  },

];
// Custom hook for handling the modal
const useContactModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const openModal = (contact) => {
    setSelectedContact(contact);
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  return {
    modalIsOpen,
    selectedContact,
    openModal,
    closeModal,
  };
};

function Contacts() {

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


  const { modalIsOpen, selectedContact, openModal, closeModal } = useContactModal();
  const [cardIndex, setCardIndex] = useState(0);
//call using window
  const contactCall = () => {
   if (selectedContact) {
      const phoneNumber = '+1234556778';
      window.location.href = `tel:${phoneNumber}`;
      closeModal(); // Close the modal after initiating the call
    }
  };
//   const userChoice = window.confirm('Do you want to call or send an SMS?');
  
  // if (userChoice) {
  //   window.location.href = `tel:${phoneNumber}`;
  // } else {
  //   window.location.href = `sms:${phoneNumber}`;
  // }
  //   const telUrl = `tel:${phoneNumber}`;
  //   window.location.href = telUrl;
  // };

  
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
//slides effect
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
    <div id="lights" className="settings">
      <Link to="/" className="linkStyle" ><div className="nav-bar-logo">
        <h1>Back To Menu</h1>
      </div></Link>
      <div className="slider-call-1">
      <div className="slider">
      <Slider className="linkStyle"  {...slidesSettings}>
        {navbar.map((card, idx) => (
          <div key={card.id} onClick={() => openModal(card)} className={idx === cardIndex ? "slide activeSlide" : "slide"}   >
             <h1>{card.name}</h1>
            {card.icon}
             </div>
        ))} 
      </Slider>
      </div>
      <div onClick={handleHelpClick} className="call-help-1">
            <PiPhoneCallFill size={70} />
            <h1>Call Support</h1>
          </div>
      </div>
    </div>
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Call Modal"
        className="custom-modal centered-modal"
      >
        {selectedContact && (
          <div>
            <h2>{`Do you want to call ${selectedContact.name}?`}</h2>
            <button onClick={contactCall}>Yes</button>
            <button onClick={closeModal}>No</button>
          </div>
        )}
      </Modal>
       </>
  );
};

export default  Contacts;