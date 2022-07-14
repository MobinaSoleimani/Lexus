import React from 'react';
import data from './api/data.json'
import styles from "./Banner7.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner7 = () => {
    return (
        <div>
             <div className={styles.container}>
            <h2>DISCOVER LEXUS</h2>
            <div className=" d-flex flex-lg-row flex-md-row flex-sm-column justify-content-around">
             { 
                data.filter(item => item.id > 16 && item.id<20)
                .map(item => { return(
                    <div  key={item.id}>
                  <div className={styles.boxes}> 
                    <div>
                  <img src={item.image} />
                  </div>
                  <h3>{item.title}</h3>
                  <button className={styles.button}>LEARN MORE</button>
                  </div>
                    </div>
                    )}) 
            }
        </div>
        </div>
        </div>
    );
};

export default Banner7;