import { FaShoppingCart } from "react-icons/fa";
import {useContext, useEffect} from "react";
import CartContext from "../CartContext";

export function Header(){
    console.log("Header Component Renders")
    
    const {universalList,updateList,c}=useContext(CartContext);
    const style = { color: "white", fontSize: "40px" }
    
    console.log("Updating count value(Header)");
   
   
       
   

    
    
    return (
        <>
        <div className='header'>
            
        
        <h1>E-CART</h1>
        <div className='left'>
        <h1>Home</h1>
    

        
        <FaShoppingCart 
        style={style} />
        
         <div className="count">{c}</div>
       
        
       
     
        </div>
        </div>
        
        </>
    
        );

    }