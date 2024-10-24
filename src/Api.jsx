import React,{ useState, useEffect } from "react";
import { fetchProducts} from "./Fetch";
import { Info } from "./Components/Info";
import {Loader} from "./Components/Loader"

export const Api = () => { 
  const [mprolist,setMprolist]=useState([]);
  const [wprolist,setWprolist]=useState([]);
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    async function getProducts(){
    try{
        const menProducts=await fetchProducts("men's clothing");
        setMprolist(menProducts);
        
        const womenProducts = await fetchProducts("women's clothing");
        setWprolist(womenProducts);
      } catch (error) {
        console.error(error);
      }
      finally{
        setLoading(false);
      };
    };
  

    getProducts();
  }, []);

  return (
    
    <div>
        {loading? <Loader />
        :
         <Info
         mlist={mprolist}
         wlist={wprolist}
         />
         }
      </div>
        
    
    
  );
};


