import styles from "../styles/Info.module.css"
import { useState,useEffect,createContext} from "react";
import { Api } from "../Api";
import {Cart} from "../Cart";

export const MainContext=createContext([]);


export function Info({mlist,wlist}){
  
    
   
    

return(
<div>
  
 
   
      <h2 className="heading">Men's Products</h2>
      <ul>
        {mlist.map(product => (
          
          <li key={product.id}>
            <div className={styles.card}>
            
              <img className={styles.i} src={product.image} alt={product.title} />
              <div className={styles.relate}>
              <div className={styles.text}>
              <a className={styles.name}>{product.title}</a>
              <a className={styles.price}>${product.price}</a>
              <button className={styles.add}>Add to cart</button>
              </div>
              </div>
            
            </div>
          </li>
        ))}
      </ul>

      <h2 className="heading">Women's Products</h2>
      <ul>
        {wlist.map(product => (
          <li key={product.id}>
            <div className={styles.card}>
              <img className={styles.i} src={product.image} alt={product.title} />
              <div className={styles.relate}>
              <div className={styles.text}>
              <a className={styles.name}>{product.title}</a>
              <a className={styles.price}>${product.price}</a>
              <button className={styles.add}>Add to cart</button>
              </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
        }
