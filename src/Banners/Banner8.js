import React from 'react';
import  "./Banner6.css";//6 & 8
import img20 from "../images/img/img20.png";
import img21 from "../images/img/img21.png";
import img22 from "../images/img/img22.png";
import img23 from "../images/img/img23.png";
const Banner8 = () => {
    return (
            <div className='main'>
             
             <h3>LEXUS OWNERSHIP</h3>
            <div className="row ">
            <div className="col-lg-4 col-md-8 col-sm-8 boxes1">
             <img className='img' src={img20} alt='img20'/>
             <p>THE 2022 LC CONVERTIBLE INSPIRATION SERIES</p>            
            <button className='buttons'>LEARN MORE</button>
            </div>
            
            <div className="col-lg-4 col-md-8 col-sm-8 ">
             <div className='boxes2'>
                 <img className='w-100' src={img21} alt='img21'/>
             <p>THE 2022 RC F FUJI SPEEDWAY</p>
           <button className='buttons'>LEARN MORE</button>
             </div>
             <div className='boxes2'>
             <img className='w-100' src={img22} alt='img22'/>
             <p>THE 2022 LC BESPOKE BUILD</p>
             <button className='buttons'>LEARN MORE</button>
             </div>
            </div>
            <div className="col-lg-4 col-md-8 col-sm-8 boxes1">
             <img className='img' src={img23} alt='img23'/>
             <p>THE 2022 GX BLACK LINE SPECIAL EDITION</p>
            <button className='buttons'>LEARN MORE</button>
            </div>
         </div> 
         </div>
    );
};

export default Banner8;