import { FaShoppingCart } from "react-icons/fa";
import {useContext, useEffect} from "react";
import CartContext from "../Functions/CartContext";
import { Link } from 'react-router-dom';
import styles from "../styles/Header.module.css"

export function Header(){
    console.log("Header Component Renders")
    
    const {universalList,updateList,checkCount}=useContext(CartContext);
    const style = { color: "white", fontSize: "40px" }
    
    console.log("Updating count value(Header)");
   
   
       
   

    
    
    return (
        <>
        <div className={styles.header} >
            
        
        <h1 className={styles.heading}>E-CART</h1>
        <div className={styles.left}>
        <Link to="/">
        <h1 className={styles.h1}>Home</h1>
        </Link>
        <Link to="/product">
        <h1 className={styles.h1}>Products</h1>
        </Link>

        <Link to="/cart" className={styles.shopping}>
        <FaShoppingCart 
        style={style} />
        
         <div className={styles.count}>{checkCount()}</div>
        </Link>
        
       
     
        </div>
        </div>
        
        </>
    
        );

    }