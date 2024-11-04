
import backImage from './assets/back2.jpeg';
import style from "./styles/Landing.module.css";
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';

export function Landing(){
    return (
        <>
        
        <Header />


    <div className={style.space}>
    <img className={style.back} src={backImage} alt="Background" />
    <div className={style.overlay}></div>
    <a className={style.a1}>DISCOVER</a>
    <a className={style.a2}>EXPERIENCE</a>
    <a className={style.a3}>INSPIRE</a>
    <button className={style.shop}>Shop Now</button>
</div>

        
        <Footer />



        
              
        </>
    )
    
  }