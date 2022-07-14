import React,{useReducer} from 'react';
import styles from "./Banner5.module.css";
import video from "./videos/Homepage.mp4";
import white from "./images/white.png";
import iridium from "./images/iridium.png";
import silver from "./images/silver.png";
import gray from "./images/gray.png";
import caviar from "./images/caviar.png";
import red from "./images/red.png";
import blue from "./images/blue.png";
import whitecar from "./images/whitecar.png";
import iridiumcar from "./images/iridiumcar.png";
import silvercar from "./images/silvercar.png";
import graycar from "./images/graycar.png";
import caviarcar from "./images/caviarcar.png";
import redcar from "./images/redcar.png";
import bluecar from "./images/bluecar.png";



const initialState={showWhite:true,showIridium:true,showSilver:true,showGray:true,showCaviarc:true,showRed:true,showBlue:true};
const reducer=(state,action)=>{
    switch(action){
        case "white":
            return {showWhite:!state.showWhite}
        case "iridium":
            return {showIridium:!state.showIridium}
        case "silver":
            return {showSilver:!state.showSilver}
        case "gray":
            return {showGray:!state.showGray}
        case "caviar":
            return {showCaviar:!state.showCaviar}
        case "red":
            return {showRed:!state.showRed}
        case "blue":
            return {showBlue:!state.showBlue}  
        default:
            return state.showWhite    
    }
}

const Banner5 = () => {

   const[click,dispatch]= useReducer(reducer,initialState)


    return (
        <div>
             <div className={styles.mainCar}>
            <video src={video} type="video/mp4" autoPlay/>
            <div className={styles.details}>
            <h3>THE 2022</h3>
            <u><h1>IS</h1></u>
            <p>STARTING AT</p>
            <h2>$40,200*</h2>
            <button>EXPLORE</button>
            <button>BUILD</button>
            </div>
            <img className={click.showWhite ? styles.show :styles.hide} src={whitecar} alt='white' />
            <img className={click.showIridium ? styles.show :styles.hide} src={iridiumcar} alt='iridium' />
            <img className={click.showSilver ? styles.show :styles.hide} src={silvercar} alt='silver' />
            <img className={click.showGray ? styles.show :styles.hide} src={graycar} alt='gray' />
            <img className={click.showCaviar ? styles.show :styles.hide} src={caviarcar} alt='caviar' />
            <img className={click.showRed ? styles.show :styles.hide} src={redcar} alt='red' />
            <img className={click.showBlue ? styles.show :styles.hide} src={bluecar} alt='blue' />
            </div>
            <div className={styles.images_div}>
            <button onClick={()=> dispatch("white")}><img className={styles.images} src={white} alt='white' /></button>
            <button onClick={()=> dispatch("iridium")} ><img className={styles.images} src={iridium} alt='iridium'/></button>
            <button onClick={()=> dispatch("silver")}><img className={styles.images} src={silver} alt='silver'/></button>
            <button onClick={()=> dispatch("gray")}><img className={styles.images} src={gray} alt='gray'/></button>
            <button onClick={()=> dispatch("caviar")}><img className={styles.images} src={caviar} alt='caviar'/></button>
            <button onClick={()=> dispatch("red")}><img className={styles.images} src={red} alt='red'/></button>
            <button onClick={()=> dispatch("blue")}><img className={styles.images} src={blue} alt='blue'/></button>
            </div>
        </div>
    );
};

export default Banner5;