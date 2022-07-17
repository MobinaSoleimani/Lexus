import React from 'react';
import styles from "./Banner1.module.css";
import video from "../videos/first.mp4";
const Banner1 = () => {
    return (
        <div className={styles.main}>
            <video className={styles.video} src={video} autoPlay />
            <div className={styles.details}>
            <p><u>THE ALL-NEW 2023 RX</u></p>
          
            <h3>FOR THOSE WHO REFUSE TO SETTLE, THIS IS THE NEXT GENERATION OF LEXUS</h3>
            <button>EXPLORE</button>
            </div>         
        </div>
    );
};

export default Banner1;