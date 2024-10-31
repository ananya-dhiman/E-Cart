
import backImage from './assets/back.png';
import "./styles/input.css";
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';

export function Landing(){
    return (
        <>
        
        <Header />


        <div className='space'>
            <img className="back" src={backImage}></img>
            <a className='a1'>DISCOVER</a>
            <a className='a2'>EXPERIENCE</a>
            <a className='a3'>INSPIRE</a>
            <button>Shop Now</button>
            
           
            
        </div>
        
        <Footer />



        
              
        </>
    )
    
  }