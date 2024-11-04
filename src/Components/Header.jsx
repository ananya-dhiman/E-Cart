import { FaShoppingCart } from "react-icons/fa";
import {useContext, useEffect} from "react";
import CartContext from "../CartContext";
import { Link } from 'react-router-dom';

export function Header(){
    console.log("Header Component Renders")
    
    const {universalList,updateList,checkCount}=useContext(CartContext);
    const style = { color: "white", fontSize: "40px" }
    
    console.log("Updating count value(Header)");
   
   
       
   

    
    
    return (
        <>
        <div className='header'>
            
        
        <h1>E-CART</h1>
        <div className='left'>
        <h1>Home</h1>
    

        <Link to="/cart">
        <FaShoppingCart 
        style={style} />
        
         <div className="count">{checkCount()}</div>
        </Link>
        
       
     
        </div>
        </div>
        
        </>
    
        );

    }