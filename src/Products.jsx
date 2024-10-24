import { useImmer } from 'use-immer';
import {Api} from './Api';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';

export function Product(){

    
    return (
        <>
        
        <Header />
        <div className='products'>
            <Api />
            
            
            
        </div>
        
        
        
        <Footer />



        
              
        </>
    )
    
  }