import styles from "../styles/Info.module.css"
import { useState,useEffect,createContext} from "react";
import Api  from "../Functions/Api";
import {Cart} from "../Cart";

export const MainContext=createContext([]);


export function Info({infoList,addToCart}){
  console.log("Info renders");
  const OnStyle={backgroundColor:"green"};
  const OffStyle={backgroundColor:"red"};
  console.log("Info still running")
  console.log(infoList);


    
   
    

return(
<div>
  
 
   
      <h2 className="heading">Men's Products</h2>
      <ul>
        {infoList.map(product => ( product.category=="men's clothing"?
          
          
          <li key={product.id}>
            <div className={styles.card}>
            
              <img className={styles.i} src={product.image} alt={product.title} />
              <div className={styles.relate}>
              <div className={styles.text}>
              <a className={styles.name}>{product.title}</a>
              <a className={styles.price}>${product.price}</a>
              <button className={styles.add} style={product.added? OnStyle: OffStyle} onClick={()=>{addToCart(product.id)}}>
              {product.added? "Added": "Add To Cart"}
                </button>
              </div>
              </div>
            
            </div>
          </li>
        :null

        ))}
      </ul>

      <h2 className="heading">Women's Products</h2>
      <ul>
      {infoList.map(product => ( product.category=="women's clothing"?
          
          
          <li key={product.id}>
            <div className={styles.card}>
            
              <img className={styles.i} src={product.image} alt={product.title} />
              <div className={styles.relate}>
              <div className={styles.text}>
              <a className={styles.name}>{product.title}</a>
              <a className={styles.price}>${product.price}</a>
              <button className={styles.add} style={product.added? OnStyle: OffStyle} onClick={()=>{addToCart(product.id)}}>
              {product.added? "Added": "Add To Cart"}
                </button>
              </div>
              </div>
            
            </div>
          </li>
        :null

        ))}
      </ul>
    </div>
  );
        }
