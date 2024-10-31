import styles from "./styles/Cart.module.css"
import { useState,useEffect, useContext } from "react";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import {Loader} from "./Components/Loader";
import CartContext from "./CartContext";


export function Cart(){
   const {universalList,updateList}=useContext(CartContext);
   const [loader,setLoader]=useState(true);
   console.log(universalList);

  
    useEffect(()=>{
       
        if(universalList){

        setLoader(false);
        console.log("List is : ",universalList);
        
    
        }
    
     },[]);
    
    updateList(["List is updated across pages"]);
    console.log(universalList);

    const addition=(p)=>{
     p.count=p.count+1;
    }    

    const sub=(p)=>{
        p.count=p.count-1;
    }    


 
    
    return(
        <>
       
   
        <Header/>
        {loader?  <Loader/>:
        <div>{universalList}</div>        
        }
        
    
        
            <Footer/>
    
        </>

    );

};
    
// {list.filter(product =>product.count>0).map(avail=>(
//     <li key={avail.id}>
//     <div className={styles.item}>
//     <img className={styles.i} src={avail.image} alt={avail.title} />
//     <a className={styles.name}>{avail.title}</a>
//     <a className={styles.price}>${avail.price}</a>
//     <button onClick={()=> addition(avail)} className={styles.add}>+</button>
//     <div className={styles.c}>{avail.count}</div>
//     <button onClick={()=> sub(avail)} className={styles.sub}>-</button>

//     </div>
//     <button onClick={()=> check(avail)} className={styles.check}>Checkout</button>
    
   
//     </li>
    

     

  



/*
 <div>The cart is empty</div>  
        <button> Shop Now </button>
        <button onClick={()=> check(avail)} className={styles.check}>Checkout</button> 
*/
 