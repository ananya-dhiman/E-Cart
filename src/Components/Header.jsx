import { FaShoppingCart } from "react-icons/fa";
import {useContext} from "react";
import CartContext from "../CartContext";

export function Header(){
    
    const {l,updateList}=useContext(CartContext);
    const style = { color: "white", fontSize: "40px" }
    console.log("header rendering due to changes in list");
    console.log(l);
    
    return (
        <>
        <div className='header'>
            
        
        <h1>E-CART</h1>
        <div className='left'>
        <h1>Home</h1>
    

        
        <FaShoppingCart 
        style={style} />
        
        {l && l.length>0? <div className="count">{l}</div>
         :
        <div className="count">0</div>
        }
       
     
        </div>
        </div>
        
        </>
    
        );

    }