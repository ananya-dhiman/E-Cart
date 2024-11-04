import styles from "./styles/Cart.module.css"
import { useState, useContext } from "react";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import {Loader} from "./Components/Loader";
import CartContext from "./Functions/CartContext";
import Api from "./Functions/Api"
import {Product} from "./Products"
import { Link } from 'react-router-dom';
import { Checkout } from "./Checkout";


export function Cart(){
  
   const {universalList,updateList,checkCount}=useContext(CartContext);
   const [loader,setLoader]=useState(true);
   console.log(universalList);
   const temp=universalList.filter(product =>product.count>0);

       

    const addition=(p)=>{
     p.count=p.count+1;
    }    

    const sub=(p)=>{
        p.count=p.count-1;
    }    
    const done=()=>{
        Api();

    }


 
    
    return(
        <>
       
   
        <Header/>
        <div>CART</div>
    {}

    {temp && checkCount()>0?temp.map(avail=>(
    <li key={avail.id}>
    <div className={styles.item}>
    <img className={styles.i} src={avail.image} alt={avail.title} />
    <a className={styles.name}>{avail.title}</a>
    <a className={styles.price}>${avail.price}</a>
    <button onClick={()=> addition(avail)} className={styles.add}>+</button>
    <div className={styles.c}>{avail.count}</div>
    <button onClick={()=> sub(avail)} className={styles.sub}>-</button>

    </div>
    <Link to="/checkout">
    <button onClick={()=> done()} className={styles.check}>Checkout</button>
    </Link>
   
    </li>
    ))
    :

    <div>
        <div>The cart is empty</div> 
        <Link to="/product">
        <button> Shop Now </button>
        </Link> 
       
    </div>   
    
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
 