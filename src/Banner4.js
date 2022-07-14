import React from 'react';
import data from './api/data.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Banner4.module.css";

const Banner4 = () => {
    return (
                  <div className={styles.main}>
             <h2>EXPLORE YOUR LEXUS</h2>
             <div className={styles.divContainer}>
              { 
                data.filter(item => item.id > 6 && item.id<13)
                .map(item => { return(
                    <div  key={item.id}>
                  <div > 
                  <img src={item.image} />
                  <h3>{item.title}</h3>
                  </div>
                    </div>
                    )}) 
            }
         </div>
         </div>
    );
};

export default Banner4;