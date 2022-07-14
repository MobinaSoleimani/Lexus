import React from 'react';
import data from './api/data.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import  "./Banner3.css";

const Banner3 = () => {
    return (
        <div className='container'>
            <h2>VEHICLES AND CURRENT OFFERS</h2>
            <div className="boxes">
             { 
                data.filter(item => item.id > 3 && item.id<7)
                .map(item => { return(
                    <div key={item.id}>
                  <div > 
                    <div>
                  <img src={item.image} />
                  </div>
                  <h3>{item.title}</h3>
                  <button className='button'>LEARN MORE</button>
                  </div>
                    </div>
                    )}) 
            }
        </div>
        </div>
    );
};

export default Banner3;