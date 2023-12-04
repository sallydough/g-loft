// Nav.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import {
  FaAddressBook,
  FaCalendarAlt,
  FaCog,
  FaTv,
} from 'react-icons/fa';
import { MdOutlineDevicesOther } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoIosArrowDown, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";



import './nav.css';

const navbar = [
 
  {
    id: '1',
    name: 'Loft Controls',
    pathway: '/controls',
    icon: <MdOutlineDevicesOther size={300} className="nav-icon" />,
  },
  {
    id: '2',
    name: 'Watch TV',
    pathway: '/entertainment',
    icon: <FaTv size={230} className="nav-icon" />,
  },
  {
    id: '3',
    name: 'Calendar',
    pathway: '/calendar',
    icon: <FaCalendarAlt size={230} className="nav-icon" />,
  },
  {
    id: '4',
    name: 'Contacts',
    pathway: '/contacts',
    icon: <FaAddressBook size={230} className="nav-icon" />,
  },
  {
    id: '5',
    name: 'Settings',
    pathway: '/settings',
    icon: <FaCog size={230} className="nav-icon" />,
  },
  {
    id: '6',
    name: 'Gallery',
    pathway: '/home',
    icon: <svg width="300" height="305" viewBox="0 0 600 603" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="603" fill="#48CCAC"/>
    <rect x="54" y="492" width="500" height="58" fill="#F3B718"/>
    <rect x="496" y="518" width="414" height="58" transform="rotate(-90 496 518)" fill="#F3B718"/>
    <rect x="149.855" y="235.322" width="432.644" height="58" transform="rotate(-30 149.855 235.322)" fill="#F3B718"/>
    <rect x="54" y="500" width="128" height="72" transform="rotate(-90 54 500)" fill="#F3B718"/>
    <path d="M93.1818 399.636C86.9091 399.636 81.5303 398.773 77.0455 397.045C72.5909 395.348 69.0455 393.03 66.4091 390.091C63.7727 387.152 62.0606 383.848 61.2727 380.182L79.1818 377.773C79.7273 379.167 80.5909 380.47 81.7727 381.682C82.9545 382.894 84.5152 383.864 86.4545 384.591C88.4242 385.348 90.8182 385.727 93.6364 385.727C97.8485 385.727 101.318 384.697 104.045 382.636C106.803 380.606 108.182 377.197 108.182 372.409V359.636H107.364C106.515 361.576 105.242 363.409 103.545 365.136C101.848 366.864 99.6667 368.273 97 369.364C94.3333 370.455 91.1515 371 87.4545 371C82.2121 371 77.4394 369.788 73.1364 367.364C68.8636 364.909 65.4545 361.167 62.9091 356.136C60.3939 351.076 59.1364 344.682 59.1364 336.955C59.1364 329.045 60.4242 322.439 63 317.136C65.5758 311.833 69 307.864 73.2727 305.227C77.5758 302.591 82.2879 301.273 87.4091 301.273C91.3182 301.273 94.5909 301.939 97.2273 303.273C99.8636 304.576 101.985 306.212 103.591 308.182C105.227 310.121 106.485 312.03 107.364 313.909H108.091V302.182H127.318V372.682C127.318 378.621 125.864 383.591 122.955 387.591C120.045 391.591 116.015 394.591 110.864 396.591C105.742 398.621 99.8485 399.636 93.1818 399.636ZM93.5909 356.455C96.7121 356.455 99.3485 355.682 101.5 354.136C103.682 352.561 105.348 350.318 106.5 347.409C107.682 344.47 108.273 340.955 108.273 336.864C108.273 332.773 107.697 329.227 106.545 326.227C105.394 323.197 103.727 320.848 101.545 319.182C99.3636 317.515 96.7121 316.682 93.5909 316.682C90.4091 316.682 87.7273 317.545 85.5455 319.273C83.3636 320.97 81.7121 323.333 80.5909 326.364C79.4697 329.394 78.9091 332.894 78.9091 336.864C78.9091 340.894 79.4697 344.379 80.5909 347.318C81.7424 350.227 83.3939 352.485 85.5455 354.091C87.7273 355.667 90.4091 356.455 93.5909 356.455ZM162.636 373.318C158.182 373.318 154.212 372.545 150.727 371C147.242 369.424 144.485 367.106 142.455 364.045C140.455 360.955 139.455 357.106 139.455 352.5C139.455 348.621 140.167 345.364 141.591 342.727C143.015 340.091 144.955 337.97 147.409 336.364C149.864 334.758 152.652 333.545 155.773 332.727C158.924 331.909 162.227 331.333 165.682 331C169.742 330.576 173.015 330.182 175.5 329.818C177.985 329.424 179.788 328.848 180.909 328.091C182.03 327.333 182.591 326.212 182.591 324.727V324.455C182.591 321.576 181.682 319.348 179.864 317.773C178.076 316.197 175.53 315.409 172.227 315.409C168.742 315.409 165.97 316.182 163.909 317.727C161.848 319.242 160.485 321.152 159.818 323.455L141.909 322C142.818 317.758 144.606 314.091 147.273 311C149.939 307.879 153.379 305.485 157.591 303.818C161.833 302.121 166.742 301.273 172.318 301.273C176.197 301.273 179.909 301.727 183.455 302.636C187.03 303.545 190.197 304.955 192.955 306.864C195.742 308.773 197.939 311.227 199.545 314.227C201.152 317.197 201.955 320.758 201.955 324.909V372H183.591V362.318H183.045C181.924 364.5 180.424 366.424 178.545 368.091C176.667 369.727 174.409 371.015 171.773 371.955C169.136 372.864 166.091 373.318 162.636 373.318ZM168.182 359.955C171.03 359.955 173.545 359.394 175.727 358.273C177.909 357.121 179.621 355.576 180.864 353.636C182.106 351.697 182.727 349.5 182.727 347.045V339.636C182.121 340.03 181.288 340.394 180.227 340.727C179.197 341.03 178.03 341.318 176.727 341.591C175.424 341.833 174.121 342.061 172.818 342.273C171.515 342.455 170.333 342.621 169.273 342.773C167 343.106 165.015 343.636 163.318 344.364C161.621 345.091 160.303 346.076 159.364 347.318C158.424 348.53 157.955 350.045 157.955 351.864C157.955 354.5 158.909 356.515 160.818 357.909C162.758 359.273 165.212 359.955 168.182 359.955ZM216.977 372V302.182H235.75V314.364H236.477C237.75 310.03 239.886 306.758 242.886 304.545C245.886 302.303 249.341 301.182 253.25 301.182C254.22 301.182 255.265 301.242 256.386 301.364C257.508 301.485 258.492 301.652 259.341 301.864V319.045C258.432 318.773 257.174 318.53 255.568 318.318C253.962 318.106 252.492 318 251.159 318C248.311 318 245.765 318.621 243.523 319.864C241.311 321.076 239.553 322.773 238.25 324.955C236.977 327.136 236.341 329.652 236.341 332.5V372H216.977ZM291.83 373.136C286.527 373.136 281.723 371.773 277.42 369.045C273.148 366.288 269.754 362.242 267.239 356.909C264.754 351.545 263.511 344.97 263.511 337.182C263.511 329.182 264.799 322.53 267.375 317.227C269.951 311.894 273.375 307.909 277.648 305.273C281.951 302.606 286.663 301.273 291.784 301.273C295.693 301.273 298.951 301.939 301.557 303.273C304.193 304.576 306.314 306.212 307.92 308.182C309.557 310.121 310.799 312.03 311.648 313.909H312.239V278.909H331.557V372H312.466V360.818H311.648C310.739 362.758 309.451 364.682 307.784 366.591C306.148 368.47 304.011 370.03 301.375 371.273C298.769 372.515 295.587 373.136 291.83 373.136ZM297.966 357.727C301.087 357.727 303.723 356.879 305.875 355.182C308.057 353.455 309.723 351.045 310.875 347.955C312.057 344.864 312.648 341.242 312.648 337.091C312.648 332.939 312.072 329.333 310.92 326.273C309.769 323.212 308.102 320.848 305.92 319.182C303.739 317.515 301.087 316.682 297.966 316.682C294.784 316.682 292.102 317.545 289.92 319.273C287.739 321 286.087 323.394 284.966 326.455C283.845 329.515 283.284 333.061 283.284 337.091C283.284 341.152 283.845 344.742 284.966 347.864C286.117 350.955 287.769 353.379 289.92 355.136C292.102 356.864 294.784 357.727 297.966 357.727ZM379.295 373.364C372.114 373.364 365.932 371.909 360.75 369C355.598 366.061 351.629 361.909 348.841 356.545C346.053 351.152 344.659 344.773 344.659 337.409C344.659 330.227 346.053 323.924 348.841 318.5C351.629 313.076 355.553 308.848 360.614 305.818C365.705 302.788 371.674 301.273 378.523 301.273C383.129 301.273 387.417 302.015 391.386 303.5C395.386 304.955 398.871 307.152 401.841 310.091C404.841 313.03 407.174 316.727 408.841 321.182C410.508 325.606 411.341 330.788 411.341 336.727V342.045H352.386V330.045H393.114C393.114 327.258 392.508 324.788 391.295 322.636C390.083 320.485 388.402 318.803 386.25 317.591C384.129 316.348 381.659 315.727 378.841 315.727C375.902 315.727 373.295 316.409 371.023 317.773C368.78 319.106 367.023 320.909 365.75 323.182C364.477 325.424 363.826 327.924 363.795 330.682V342.091C363.795 345.545 364.432 348.53 365.705 351.045C367.008 353.561 368.841 355.5 371.205 356.864C373.568 358.227 376.371 358.909 379.614 358.909C381.765 358.909 383.735 358.606 385.523 358C387.311 357.394 388.841 356.485 390.114 355.273C391.386 354.061 392.356 352.576 393.023 350.818L410.932 352C410.023 356.303 408.159 360.061 405.341 363.273C402.553 366.455 398.947 368.939 394.523 370.727C390.129 372.485 385.053 373.364 379.295 373.364ZM443.341 331.636V372H423.977V302.182H442.432V314.5H443.25C444.795 310.439 447.386 307.227 451.023 304.864C454.659 302.47 459.068 301.273 464.25 301.273C469.098 301.273 473.326 302.333 476.932 304.455C480.538 306.576 483.341 309.606 485.341 313.545C487.341 317.455 488.341 322.121 488.341 327.545V372H468.977V331C469.008 326.727 467.917 323.394 465.705 321C463.492 318.576 460.447 317.364 456.568 317.364C453.962 317.364 451.659 317.924 449.659 319.045C447.689 320.167 446.144 321.803 445.023 323.955C443.932 326.076 443.371 328.636 443.341 331.636Z" fill="#0F0F0F"/>
    <path d="M310.456 392.091V483H291.546V392.091H310.456ZM356.41 484.332C349.515 484.332 343.552 482.867 338.521 479.937C333.52 476.978 329.658 472.864 326.935 467.597C324.213 462.3 322.852 456.159 322.852 449.175C322.852 442.132 324.213 435.977 326.935 430.71C329.658 425.412 333.52 421.299 338.521 418.369C343.552 415.41 349.515 413.93 356.41 413.93C363.305 413.93 369.253 415.41 374.254 418.369C379.285 421.299 383.162 425.412 385.884 430.71C388.607 435.977 389.968 442.132 389.968 449.175C389.968 456.159 388.607 462.3 385.884 467.597C383.162 472.864 379.285 476.978 374.254 479.937C369.253 482.867 363.305 484.332 356.41 484.332ZM356.499 469.683C359.636 469.683 362.254 468.795 364.356 467.02C366.457 465.215 368.04 462.759 369.105 459.651C370.2 456.544 370.748 453.008 370.748 449.042C370.748 445.077 370.2 441.54 369.105 438.433C368.04 435.326 366.457 432.87 364.356 431.065C362.254 429.259 359.636 428.357 356.499 428.357C353.332 428.357 350.669 429.259 348.509 431.065C346.378 432.87 344.765 435.326 343.67 438.433C342.605 441.54 342.072 445.077 342.072 449.042C342.072 453.008 342.605 456.544 343.67 459.651C344.765 462.759 346.378 465.215 348.509 467.02C350.669 468.795 353.332 469.683 356.499 469.683ZM438.929 414.818V429.023H396.848V414.818H438.929ZM406.481 483V409.891C406.481 404.949 407.443 400.85 409.366 397.595C411.319 394.34 413.983 391.899 417.356 390.271C420.73 388.643 424.562 387.83 428.853 387.83C431.753 387.83 434.402 388.051 436.799 388.495C439.225 388.939 441.031 389.339 442.214 389.694L438.841 403.898C438.101 403.662 437.183 403.44 436.089 403.233C435.023 403.025 433.928 402.922 432.804 402.922C430.022 402.922 428.084 403.573 426.989 404.875C425.894 406.147 425.346 407.938 425.346 410.246V483H406.481ZM486.748 414.818V429.023H445.688V414.818H486.748ZM455.009 398.483H473.919V462.048C473.919 463.794 474.186 465.156 474.718 466.132C475.251 467.079 475.991 467.745 476.938 468.13C477.914 468.514 479.039 468.707 480.311 468.707C481.199 468.707 482.087 468.633 482.975 468.485C483.862 468.307 484.543 468.174 485.017 468.085L487.991 482.157C487.044 482.453 485.712 482.793 483.996 483.178C482.279 483.592 480.193 483.843 477.737 483.932C473.179 484.11 469.184 483.503 465.752 482.112C462.348 480.721 459.7 478.561 457.806 475.631C455.912 472.702 454.98 469.003 455.009 464.534V398.483Z" fill="#0F0F0F"/>
    </svg>
  
  }
];

function Nav() {

// handle Help Button

const handleHelpClick = () => {
  const phoneNumber = '+1234556778';
  const userChoice = window.confirm('Do you want to call or send an SMS?');

if (userChoice) {
  window.location.href = `tel:${phoneNumber}`;
} else {
  window.location.href = `sms:${phoneNumber}`;
}
  const telUrl = `tel:${phoneNumber}`;
  window.location.href = telUrl;
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

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setCardIndex(next),
  };

  return (
    <section id="App">
      <div className="home-logo">
      <svg width="200" height="200" viewBox="0 0 600 603" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="603" fill="#161818"/>
<rect x="54" y="492" width="500" height="58" fill="#F3B718"/>
<rect x="496" y="518" width="414" height="58" transform="rotate(-90 496 518)" fill="#F3B718"/>
<rect x="149.854" y="235.322" width="432.644" height="58" transform="rotate(-30 149.854 235.322)" fill="#F3B718"/>
<rect x="54" y="500" width="128" height="72" transform="rotate(-90 54 500)" fill="#F3B718"/>
<path d="M93.1818 399.636C86.9091 399.636 81.5303 398.773 77.0455 397.045C72.5909 395.348 69.0455 393.03 66.4091 390.091C63.7727 387.152 62.0606 383.848 61.2727 380.182L79.1818 377.773C79.7273 379.167 80.5909 380.47 81.7727 381.682C82.9545 382.894 84.5152 383.864 86.4545 384.591C88.4242 385.348 90.8182 385.727 93.6364 385.727C97.8485 385.727 101.318 384.697 104.045 382.636C106.803 380.606 108.182 377.197 108.182 372.409V359.636H107.364C106.515 361.576 105.242 363.409 103.545 365.136C101.848 366.864 99.6667 368.273 97 369.364C94.3333 370.455 91.1515 371 87.4545 371C82.2121 371 77.4394 369.788 73.1364 367.364C68.8636 364.909 65.4545 361.167 62.9091 356.136C60.3939 351.076 59.1364 344.682 59.1364 336.955C59.1364 329.045 60.4242 322.439 63 317.136C65.5758 311.833 69 307.864 73.2727 305.227C77.5758 302.591 82.2879 301.273 87.4091 301.273C91.3182 301.273 94.5909 301.939 97.2273 303.273C99.8636 304.576 101.985 306.212 103.591 308.182C105.227 310.121 106.485 312.03 107.364 313.909H108.091V302.182H127.318V372.682C127.318 378.621 125.864 383.591 122.955 387.591C120.045 391.591 116.015 394.591 110.864 396.591C105.742 398.621 99.8485 399.636 93.1818 399.636ZM93.5909 356.455C96.7121 356.455 99.3485 355.682 101.5 354.136C103.682 352.561 105.348 350.318 106.5 347.409C107.682 344.47 108.273 340.955 108.273 336.864C108.273 332.773 107.697 329.227 106.545 326.227C105.394 323.197 103.727 320.848 101.545 319.182C99.3636 317.515 96.7121 316.682 93.5909 316.682C90.4091 316.682 87.7273 317.545 85.5455 319.273C83.3636 320.97 81.7121 323.333 80.5909 326.364C79.4697 329.394 78.9091 332.894 78.9091 336.864C78.9091 340.894 79.4697 344.379 80.5909 347.318C81.7424 350.227 83.3939 352.485 85.5455 354.091C87.7273 355.667 90.4091 356.455 93.5909 356.455ZM162.636 373.318C158.182 373.318 154.212 372.545 150.727 371C147.242 369.424 144.485 367.106 142.455 364.045C140.455 360.955 139.455 357.106 139.455 352.5C139.455 348.621 140.167 345.364 141.591 342.727C143.015 340.091 144.955 337.97 147.409 336.364C149.864 334.758 152.652 333.545 155.773 332.727C158.924 331.909 162.227 331.333 165.682 331C169.742 330.576 173.015 330.182 175.5 329.818C177.985 329.424 179.788 328.848 180.909 328.091C182.03 327.333 182.591 326.212 182.591 324.727V324.455C182.591 321.576 181.682 319.348 179.864 317.773C178.076 316.197 175.53 315.409 172.227 315.409C168.742 315.409 165.97 316.182 163.909 317.727C161.848 319.242 160.485 321.152 159.818 323.455L141.909 322C142.818 317.758 144.606 314.091 147.273 311C149.939 307.879 153.379 305.485 157.591 303.818C161.833 302.121 166.742 301.273 172.318 301.273C176.197 301.273 179.909 301.727 183.455 302.636C187.03 303.545 190.197 304.955 192.955 306.864C195.742 308.773 197.939 311.227 199.545 314.227C201.152 317.197 201.955 320.758 201.955 324.909V372H183.591V362.318H183.045C181.924 364.5 180.424 366.424 178.545 368.091C176.667 369.727 174.409 371.015 171.773 371.955C169.136 372.864 166.091 373.318 162.636 373.318ZM168.182 359.955C171.03 359.955 173.545 359.394 175.727 358.273C177.909 357.121 179.621 355.576 180.864 353.636C182.106 351.697 182.727 349.5 182.727 347.045V339.636C182.121 340.03 181.288 340.394 180.227 340.727C179.197 341.03 178.03 341.318 176.727 341.591C175.424 341.833 174.121 342.061 172.818 342.273C171.515 342.455 170.333 342.621 169.273 342.773C167 343.106 165.015 343.636 163.318 344.364C161.621 345.091 160.303 346.076 159.364 347.318C158.424 348.53 157.955 350.045 157.955 351.864C157.955 354.5 158.909 356.515 160.818 357.909C162.758 359.273 165.212 359.955 168.182 359.955ZM216.977 372V302.182H235.75V314.364H236.477C237.75 310.03 239.886 306.758 242.886 304.545C245.886 302.303 249.341 301.182 253.25 301.182C254.22 301.182 255.265 301.242 256.386 301.364C257.508 301.485 258.492 301.652 259.341 301.864V319.045C258.432 318.773 257.174 318.53 255.568 318.318C253.962 318.106 252.492 318 251.159 318C248.311 318 245.765 318.621 243.523 319.864C241.311 321.076 239.553 322.773 238.25 324.955C236.977 327.136 236.341 329.652 236.341 332.5V372H216.977ZM291.83 373.136C286.527 373.136 281.723 371.773 277.42 369.045C273.148 366.288 269.754 362.242 267.239 356.909C264.754 351.545 263.511 344.97 263.511 337.182C263.511 329.182 264.799 322.53 267.375 317.227C269.951 311.894 273.375 307.909 277.648 305.273C281.951 302.606 286.663 301.273 291.784 301.273C295.693 301.273 298.951 301.939 301.557 303.273C304.193 304.576 306.314 306.212 307.92 308.182C309.557 310.121 310.799 312.03 311.648 313.909H312.239V278.909H331.557V372H312.466V360.818H311.648C310.739 362.758 309.451 364.682 307.784 366.591C306.148 368.47 304.011 370.03 301.375 371.273C298.769 372.515 295.587 373.136 291.83 373.136ZM297.966 357.727C301.087 357.727 303.723 356.879 305.875 355.182C308.057 353.455 309.723 351.045 310.875 347.955C312.057 344.864 312.648 341.242 312.648 337.091C312.648 332.939 312.072 329.333 310.92 326.273C309.769 323.212 308.102 320.848 305.92 319.182C303.739 317.515 301.087 316.682 297.966 316.682C294.784 316.682 292.102 317.545 289.92 319.273C287.739 321 286.087 323.394 284.966 326.455C283.845 329.515 283.284 333.061 283.284 337.091C283.284 341.152 283.845 344.742 284.966 347.864C286.117 350.955 287.769 353.379 289.92 355.136C292.102 356.864 294.784 357.727 297.966 357.727ZM379.295 373.364C372.114 373.364 365.932 371.909 360.75 369C355.598 366.061 351.629 361.909 348.841 356.545C346.053 351.152 344.659 344.773 344.659 337.409C344.659 330.227 346.053 323.924 348.841 318.5C351.629 313.076 355.553 308.848 360.614 305.818C365.705 302.788 371.674 301.273 378.523 301.273C383.129 301.273 387.417 302.015 391.386 303.5C395.386 304.955 398.871 307.152 401.841 310.091C404.841 313.03 407.174 316.727 408.841 321.182C410.508 325.606 411.341 330.788 411.341 336.727V342.045H352.386V330.045H393.114C393.114 327.258 392.508 324.788 391.295 322.636C390.083 320.485 388.402 318.803 386.25 317.591C384.129 316.348 381.659 315.727 378.841 315.727C375.902 315.727 373.295 316.409 371.023 317.773C368.78 319.106 367.023 320.909 365.75 323.182C364.477 325.424 363.826 327.924 363.795 330.682V342.091C363.795 345.545 364.432 348.53 365.705 351.045C367.008 353.561 368.841 355.5 371.205 356.864C373.568 358.227 376.371 358.909 379.614 358.909C381.765 358.909 383.735 358.606 385.523 358C387.311 357.394 388.841 356.485 390.114 355.273C391.386 354.061 392.356 352.576 393.023 350.818L410.932 352C410.023 356.303 408.159 360.061 405.341 363.273C402.553 366.455 398.947 368.939 394.523 370.727C390.129 372.485 385.053 373.364 379.295 373.364ZM443.341 331.636V372H423.977V302.182H442.432V314.5H443.25C444.795 310.439 447.386 307.227 451.023 304.864C454.659 302.47 459.068 301.273 464.25 301.273C469.098 301.273 473.326 302.333 476.932 304.455C480.538 306.576 483.341 309.606 485.341 313.545C487.341 317.455 488.341 322.121 488.341 327.545V372H468.977V331C469.008 326.727 467.917 323.394 465.705 321C463.492 318.576 460.447 317.364 456.568 317.364C453.962 317.364 451.659 317.924 449.659 319.045C447.689 320.167 446.144 321.803 445.023 323.955C443.932 326.076 443.371 328.636 443.341 331.636Z" fill="white"/>
<path d="M310.456 392.091V483H291.546V392.091H310.456ZM356.41 484.332C349.515 484.332 343.552 482.867 338.521 479.937C333.52 476.978 329.658 472.864 326.935 467.597C324.213 462.3 322.852 456.159 322.852 449.175C322.852 442.132 324.213 435.977 326.935 430.71C329.658 425.412 333.52 421.299 338.521 418.369C343.552 415.41 349.515 413.93 356.41 413.93C363.305 413.93 369.253 415.41 374.254 418.369C379.285 421.299 383.162 425.412 385.884 430.71C388.607 435.977 389.968 442.132 389.968 449.175C389.968 456.159 388.607 462.3 385.884 467.597C383.162 472.864 379.285 476.978 374.254 479.937C369.253 482.867 363.305 484.332 356.41 484.332ZM356.499 469.683C359.636 469.683 362.254 468.795 364.356 467.02C366.457 465.215 368.04 462.759 369.105 459.651C370.2 456.544 370.748 453.008 370.748 449.042C370.748 445.077 370.2 441.54 369.105 438.433C368.04 435.326 366.457 432.87 364.356 431.065C362.254 429.259 359.636 428.357 356.499 428.357C353.332 428.357 350.669 429.259 348.509 431.065C346.378 432.87 344.765 435.326 343.67 438.433C342.605 441.54 342.072 445.077 342.072 449.042C342.072 453.008 342.605 456.544 343.67 459.651C344.765 462.759 346.378 465.215 348.509 467.02C350.669 468.795 353.332 469.683 356.499 469.683ZM438.929 414.818V429.023H396.848V414.818H438.929ZM406.481 483V409.891C406.481 404.949 407.443 400.85 409.366 397.595C411.319 394.34 413.983 391.899 417.356 390.271C420.73 388.643 424.562 387.83 428.853 387.83C431.753 387.83 434.402 388.051 436.799 388.495C439.225 388.939 441.031 389.339 442.214 389.694L438.841 403.898C438.101 403.662 437.183 403.44 436.089 403.233C435.023 403.025 433.928 402.922 432.804 402.922C430.022 402.922 428.084 403.573 426.989 404.875C425.894 406.147 425.346 407.938 425.346 410.246V483H406.481ZM486.748 414.818V429.023H445.688V414.818H486.748ZM455.009 398.483H473.919V462.048C473.919 463.794 474.186 465.156 474.718 466.132C475.251 467.079 475.991 467.745 476.938 468.13C477.914 468.514 479.039 468.707 480.311 468.707C481.199 468.707 482.087 468.633 482.975 468.485C483.862 468.307 484.543 468.174 485.017 468.085L487.991 482.157C487.044 482.453 485.712 482.793 483.996 483.178C482.279 483.592 480.193 483.843 477.737 483.932C473.179 484.11 469.184 483.503 465.752 482.112C462.348 480.721 459.7 478.561 457.806 475.631C455.912 472.702 454.98 469.003 455.009 464.534V398.483Z" fill="white"/>
</svg>
      </div>
      <div className="slider-call">
      <Slider {...settings}>
        {navbar.map((card, idx) => (
          <Link to={card.pathway} className="linkStyle" key={card.id}>
            <div
              id={card.id}
              className={idx === cardIndex ? 'slide activeSlide' : 'slide'}
            >
              {card.icon}
              <h1>{card.name}</h1>
            </div>
          </Link>
        ))}
      </Slider>
      <div className="arrow-down">
      <IoIosArrowDown size={90} className="arrow-down-gf" color="white" />
      
      <div onClick={handleHelpClick} className='call-help'>
        <PiPhoneCallFill size={70}  />
        <h1>Call Support</h1>
        </div></div>
      </div>
    </section>
  );
}

export default Nav;