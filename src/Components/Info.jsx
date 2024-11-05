import styles from "../styles/Info.module.css"
import { useState,useEffect,createContext} from "react";
import Api  from "../Functions/Api";
import {Cart} from "../Cart";

export const MainContext=createContext([]);


export function Info({infoList,addToCart}){
  console.log("Info renders");
  const OnStyle={backgroundColor:"rgb(1, 79, 1)"};
  const OffStyle={backgroundColor:"#6f0606"};
  console.log("Info still running")
  console.log(infoList);


    
   
    

return(
<div>
  
 
   
      <h2 className={styles.heading}>MEN'S PRODUCTS</h2>
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

      <h2 className={styles.heading}>WOMENS'S PRODUCTS</h2>
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
