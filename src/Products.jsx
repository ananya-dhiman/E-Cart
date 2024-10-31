import { useState } from 'react';
import {Api} from './Api';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import {Info} from './Components/Info';
import {Loader} from "./Components/Loader";

export function Product(){
    const [mprolist,wprolist,list]=Api();
    console.log(wprolist);
    console.log(mprolist);
    console.log(list);
    //const [loading,setLoading]=useState(true);
    

    
    return (
        
        <>
   
      <Header/>

 
        <Info
       mlist={mprolist}
       wlist={wprolist}
       />

        
        <Footer />



        
              
        </>
    );
    
  }