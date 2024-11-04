import styles from "./styles/Cart.module.css"
import { useState,useEffect, useContext } from "react";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import {Loader} from "./Components/Loader";
import CartContext from "./CartContext";
import Api from "./Api"


export function Cart(){
    Api();
   const {universalList,updateList}=useContext(CartContext);
   const [loader,setLoader]=useState(true);
   console.log(universalList);
   const temp=universalList.filter(product =>product.count>0);

       

    const addition=(p)=>{
     p.count=p.count+1;
    }    

    const sub=(p)=>{
        p.count=p.count-1;
    }    


 
    
    return(
        <>
       
   
        <Header/>
        <div>CART</div>
    
    {temp?temp.map(avail=>(
    <li key={avail.id}>
    <div className={styles.item}>
    <img className={styles.i} src={avail.image} alt={avail.title} />
    <a className={styles.name}>{avail.title}</a>
    <a className={styles.price}>${avail.price}</a>
    <button onClick={()=> addition(avail)} className={styles.add}>+</button>
    <div className={styles.c}>{avail.count}</div>
    <button onClick={()=> sub(avail)} className={styles.sub}>-</button>

    </div>
    <button onClick={()=> check(avail)} className={styles.check}>Checkout</button>
    
   
    </li>
    ))
    :null
    }
  
        
        
    
        
            <Footer/>
    
        </>

    );

};



     

  



/*
 <div>The cart is empty</div>  
        <button> Shop Now </button>
        <button onClick={()=> check(avail)} className={styles.check}>Checkout</button> 
*/
 