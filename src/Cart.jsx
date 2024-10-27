import styles from "./styles/Cart.module.css"
import { useState,useContext,useEffect } from "react";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { MainContext } from "./Components/Api";
import {Loader} from "./Components/Loader";


export function Cart(){
   
    const list=useContext(MainContext);

    const [loader,setLoader]=useState(true);
    useEffect(()=>{
       
        if(list.length>0){

        setLoader(false);
             console.log("List is : ",list);
    
         }
    
     },[list]);
  
  
    const addition=(p)=>{
     p.count=p.count+1;
     }    
    const sub=(p)=>{
        p.count=p.count-1;
    }    


 
    
    return(
        <>
       
   
         <Header/>
         
        

        {list.filter(product =>product.count>0).map(avail=>(
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
 