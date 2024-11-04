import styles from "./styles/Cart.module.css"
import { useState,useEffect, useContext } from "react";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";



export const NoCart=()=>{
    return(
        <>
         <div>The cart is empty</div>  
         <button> Shop Now </button>
       
   
        
        
    
        </>

    );

};



     

  



/*

        <button onClick={()=> check(avail)} className={styles.check}>Checkout</button> 
*/
 