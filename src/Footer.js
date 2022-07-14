import React from 'react';
import styles from "./Footer.module.css";
import facebook from "./images/facebook.png"
import twitter from "./images/twitter.png"
import youtube from "./images/youtube.png"
import instagram from "./images/Instagram.png"
import tiktok from "./images/tiktok.svg"
import pinterest from "./images/pinterest.png"
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <a href='#'>DO NOT SELL MY PERSONAL INFORMATION</a>
        <div>
            <div className={styles.main}> 
            <div>
                <div className={styles.part}>
                    <div><a href='#' >ABOUT</a></div>
                    <div><a href='#' >CONTACT US</a></div>
                    <div><a href='#' >ACCESSIBILITY</a></div>
                    <div><a href='#' >CAREERS</a></div>
                    <div><a href='#' >REQUEST BROCHURE</a></div>
                    <div><a href='#' >NEWSLETTER SIGNUP</a></div>
                    <div><a href='#' >PRESS RELEASES</a></div>
                    <div><a href='#' >PRIVACY</a></div>
                    <div><a href='#' >CALIFORNIA PRIVACY</a></div>
                    <div><a href='#' >LEGAL</a></div>
                    <div><a href='#' >COOKIE CONSENT OPTIONS</a></div>
                    <div><a href='#' >MANAGE PREFERENCES</a></div>
                </div>
                <div>
                <a href='#' ><img className={styles.image_footer} src={facebook} alt='facebook'/></a>
                <a href='#' ><img className={styles.image_footer}src={twitter} alt='twitter'/></a>
                <a href='#' ><img className={styles.image_footer} src={youtube} alt='youtube'/></a>
                <a href='#' ><img className={styles.image_footer} src={instagram} alt='Instagram'/></a>
                <a href='#' ><img className={styles.image_footer} src={pinterest} alt='pinterest'/></a>
                <a href='#' ><img className={styles.image_footer} src={tiktok} alt='tiktok'/></a>
                </div>
            </div>

            <div>
                <div>
                <h3>LEASING & FINANCE</h3>
                <div><a href='#'>APPLY FOR CREDIT</a></div>
                <div><a href='#'>REWARD & FINANCE PROGRAMS</a></div>
                <div><a href='#'>END OF LEASE OPTIONS</a></div>
                <div><a href='#'>BUY OR LEASE QUIZ</a></div>
                </div>
                <div>
                <h3>HELP & SUPPORT</h3>
                <div><a href='#'>CONNECTED TECHNOLOGY</a></div>
                <div><a href='#'>ROADSIDE ASSISTANCE</a></div>
                <div><a href='#'>BLUETOOTH</a></div>
                <div><a href='#'>NAVIGATION</a></div>
                <div><a href='#'>MAINTENANCE</a></div>
                <div><a href='#'>SAFETY FAQ</a></div>
                <div><a href='#'>WARRANTY</a></div>
                <div><a href='#'>FAQ</a></div>
                </div>
            </div>

            <div>
                <div>
                <h3>OWNERS</h3>
                <div><a href='#'>OWNER BENEFITS</a></div>
                <div><a href='#'>MOBILE PHONE APPS</a></div>
                <div><a href='#'>PAY MY BILL</a></div>
                <div><a href='#'>DRIVERS WEBSITE</a></div>
                <div><a href='#'>SHOP ACCESSORIES</a></div>
                <div><a href='#'>SHOP PARTS</a></div>
                </div>
                <div>
                <h3>BRAND & LIFESTYLE</h3>
                <div><a href='#'>LEXUS PERFORMANCE</a></div>
                <div><a href='#'>MOTORSPORTS</a></div>
                <div><a href='#'>SAFETY TECHNOLOGY</a></div>
                <div><a href='#'>LEXUS HYBRID & ELECTRIC</a></div>
                <div><a href='#'>LEXUS ELECTRIFIED</a></div>
                <div><a href='#'>LEXUS MERCHANDISE</a></div>
                </div>
            </div>

            <div>
                <div>
                <h3>SERVICE & WARRANTY</h3>
                <div><a href='#'>MAINTENANCE SCHEDULE</a></div>
                <div><a href='#'>FIND A DEALER</a></div>
                <div><a href='#'>WARRANTY COVERAGE</a></div>
                <div><a href='#'>SERVICE BY LEXUS</a></div>
                <div><a href='#'>LEXUS TIRE CENTER</a></div>
                </div>              
            </div>
        </div>
 
        <div className={styles.bottom}>
            <a href='#'>Safety, Recalls & Service Campaigns</a>
            <p>©2006-2022 Lexus, a Division of Toyota Motor Sales, U.S.A., Inc. All information contained herein applies to U.S. vehicles only.</p>
        </div>
        </div>
        </div>
    );
};

export default Footer;