
import backImage from './assets/back1.jpeg';
import style from "./styles/Landing.module.css";
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import {Link} from "react-router-dom"

export function Landing(){
    return (
        <>
        
        <Header />


    <div className={style.space}>
    <img className={style.back} src={backImage} alt="Background" />
    <div className={style.overlay}></div>
    <a className={style.a}>
    <a className={style.a1}>DISCOVER</a>
    <a className={style.a2}>EXPERIENCE</a>
    <a className={style.a3}>INSPIRE</a>
    </a>
    <Link to="/product">
    <button className={style.shop}>Shop Now</button>
    </Link>
</div>


        
        <Footer />



        
              
        </>
    )
    
  }