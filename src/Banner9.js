import React from 'react';
import { Carousel } from "react-bootstrap";
import  "./Banner9.css"; 
import img24 from "./images/img/img24.png";
import img25 from "./images/img/img25.png";
import img26 from "./images/img/img26.jpg";
import img27 from "./images/img/img27.jpg";

const Banner9 = () => {
    return (
        <div  className='text-center slides'>
            <h3>EXPERIENCE AMAZING</h3>
     
    <Carousel>
      <Carousel.Item>
      <img
          className="d-inline w-25"
          src={img24}
          alt="Second slide"
  
        /> 
      <img
          className="d-inline w-25"
          src={img25}
          alt="Second slide"
        /> 
        <img
        className="d-inline w-25"
        src={img26}
        alt="Second slide"
      />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-inline w-25"
          src={img25}
          alt="Second slide"
        /> 
        <img
        className="d-inline w-25"
        src={img26}
        alt="Second slide"
      />
      <img
          className="d-inline w-25"
          src={img27}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>

      <div className='texts'>
        <h5>YOUR SAFETY IS A TOP PRIORITY FOR LEXUS. VIEW INFORMATION ON SAFETY RECALLS AND FIND OUT IF YOUR LEXUS IS AFFECTED.</h5>
        <u>RECALL INFORMATION</u>
      </div>

        </div>
    );
};

export default Banner9;