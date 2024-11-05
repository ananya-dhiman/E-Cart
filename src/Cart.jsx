import styles from "./styles/Cart.module.css"
import { FaMinus,  FaPlus } from "react-icons/fa";
import { useState, useContext } from "react";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import {Loader} from "./Components/Loader";
import CartContext from "./Functions/CartContext";
import Api from "./Functions/Api"
import {Product} from "./Products"
import { Link } from 'react-router-dom';
import { Checkout } from "./Checkout";
import nothingImage from "./assets/nothing.png"


export function Cart(){
  
   const {universalList,updateList,checkCount}=useContext(CartContext);
   const [loader,setLoader]=useState(true);
   console.log(universalList);
   const temp=universalList.filter(product =>product.count>0);
 
    
    function totalPrice()
    {
        var price=0;
        universalList.map(item=>{
            if(item.count>0){
                price=price+(item.price*item.count)

            }
        }
        )
        
        return price;

    }       

    const addition=(id)=>{
        const temp=universalList.map(item=>{
            if(item.id==id){
                return{
                    ...item,
                    count:item.count+1
                }
            }
            return item;
        })

        updateList(temp);
    }    

    const sub=(id)=>{
        const temp=universalList.map(item=>{
            if(item.id==id){
                return{
                    ...item,
                    count:item.count-1
                }
            }
            return item;
        })
        updateList(temp);
    } 

    const done=()=>{
        Api();

    }


 
    
    return(
        <>
       
   
        <Header/>
        <h1 className={styles.heading}>CART</h1>
    

    {temp && checkCount()>0?(
    <>
    {temp.map(avail=>(
    <li key={avail.id}>
    <div className={styles.item}>
    <img className={styles.i} src={avail.image} alt={avail.title} />
    <div className={styles.detail}>
    
    <a className={styles.name}>{avail.title}</a>
    <a className={styles.price}>${avail.price}</a>
    </div>
    <div className={styles.count}>
    <FaMinus onClick={()=> sub(avail.id)} className={styles.sub}>-</FaMinus>
  
    <div className={styles.c}>{avail.count}</div>
    <FaPlus onClick={()=> addition(avail.id)} className={styles.add}>+</FaPlus>
    
    </div>
    </div>
    
   
    </li>


    
    ))}
    
    <div className={styles.final}>
    <div className={styles.Tprice}>Total Price ${totalPrice()}</div>
    <Link className={styles.Link} to="/checkout">
    <button onClick={()=> done()} className={styles.check}>CHECKOUT</button>
    </Link>
    </div>
    </>
    
    )
    :

    <div>
        <img className={styles.back} src={nothingImage} alt="Background" />

        <div className={styles.message}>The cart is empty</div> 
        <Link className={styles.Link} to="/product">
        <button className={styles.check}> Shop Now </button>
        </Link> 
       
    </div>   
    
    }
  
        
        
    
        
            <Footer/>
    
        </>

    );

};



     

  


