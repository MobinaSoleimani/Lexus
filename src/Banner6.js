import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  "./Banner6.css";
import img13 from "./images/img/img13.jpg";
import img14 from "./images/img/img14.png";
import img15 from "./images/img/img15.jpg";
import img16 from "./images/img/img16.png";

const Banner6 = () => {
    return (
        <div className='main'>
             
            <h3>LIMITED EDITION MODELS</h3>
           <div className="row ">
           <div className="col-lg-4  col-md-8 col-sm-8 boxes1">
            <img className='img' src={img13} alt='img13'/>
            <p>THE 2022 LC CONVERTIBLE INSPIRATION SERIES</p>            
           <button className='buttons'>LEARN MORE</button>
           </div>
           
           <div className="col-lg-4 col-md82 col-sm-8 ">
            <div className='boxes2'>
                <img className='w-100' src={img14} alt='img14'/>
            <p>THE 2022 RC F FUJI SPEEDWAY</p>
          <button className='buttons'>LEARN MORE</button>
            </div>
            <div className='boxes2'>
                <img className='w-100' src={img15} alt='img15'/>
            <p>THE 2022 LC BESPOKE BUILD</p>
            <button className='buttons'>LEARN MORE</button>
            </div>
           </div>
           <div className="col-lg-4 col-md-8 col-sm-8 boxes1">
            <img className='img' src={img16} alt='img16'/>
            <p>THE 2022 GX BLACK LINE SPECIAL EDITION</p>
           <button className='buttons'>LEARN MORE</button>
           </div>
        </div> 

        </div>
    );
};

export default Banner6;