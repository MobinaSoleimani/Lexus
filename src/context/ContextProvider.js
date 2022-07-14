import React, { useState, useEffect, createContext } from 'react';
// import Loading from "../assets/icons/Loading.gif";
// import styles from "./ContextProvider.module.css";
import { getData } from '../api/api';

export const Context = createContext();

const ContextProvider = ({children}) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setItems(await getData());
        }
        fetchAPI();
        console.log(getData())
    }, []);


    return (
        <>
          {/* {!items.length &&
                <div className={styles.main}>
               <img  src={Loading} alt='loading'/>                          
                </div>
            } */}
        <Context.Provider value={items}>
            {children}
        </Context.Provider>
        </>
    );
};

export default ContextProvider;