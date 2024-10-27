import React,{ useState, useEffect,createContext } from "react";
import { fetchProducts} from "./Fetch";
import { Info } from "./Components/Info";
import {Loader} from "./Components/Loader";

export const MainContext=createContext([]);

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

  const [list,setList]=useState([]);
    
  useEffect(() => {
    // Create a copy of mlist and wlist and add the count property as cannot modify immutable directly
    const updatedMlist = mprolist.map(item => ({ ...item, count: 0 })); // Copy mlist
    const updatedWlist = wprolist.map(item => ({ ...item, count: 0 })); // Copy wlist

    // Combine the two lists
    const combinedList = [...updatedMlist, ...updatedWlist];

  
    setList(combinedList);
    console.log(list);
    
  }, [mprolist, wprolist]);
  

  return (
    
    <div>
       
        {loading? <Loader />
        :
        <>
        <MainContext.Provider value={list}>
        <Cart/>
      </MainContext.Provider>
         <Info
         mlist={mprolist}
         wlist={wprolist}
         />
         </>
         }
      </div>
        
    
    
  );
};


