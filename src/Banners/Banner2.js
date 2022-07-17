import React from 'react';
import data from '../api/data.json'
import styles from "./Banner2.module.css";

const Banner2 = () => {
    
    return (
        <div className={styles.main}>
            <h3>SHOPPING TOOLS</h3>
        <div className="w-50 d-flex flex-row justify-content-center" >
            { 
                data.filter(item => item.id < 4)
                .map(item => { return(
                    <div key={item.id}>
                  <div > 
                  <img src={item.image} />
                  <p >{item.title}</p>
                  </div>
                    </div>
                    )}) 
            }
        </div>
        </div>
    );
};

export default Banner2;