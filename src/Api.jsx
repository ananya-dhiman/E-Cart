import React,{ useState, useEffect,useContext } from "react";
import { fetchProducts} from "./Fetch";
import CartContext from "./CartContext";


export default function Api () { 
  const {universalList,updateList}=useContext(CartContext); //List from the context function
   

  useEffect(()=>{
    async function getProducts(){
    try{
        const menProducts=await fetchProducts("men's clothing");
        const womenProducts = await fetchProducts("women's clothing");
      
        const updatedMlist = menProducts.map(item => ({ ...item, count: 0,added:false })); // Copy mlist
        const updatedWlist = womenProducts.map(item => ({ ...item, count: 0,added:false})); // Copy wlist
    
        // Combine the two lists
        const combinedList = [...updatedMlist, ...updatedWlist];
        
       console.log(combinedList);
       //Updated the universal List
       updateList(combinedList);

      } catch (error) {
        console.error(error);
      }
      
    };
  

    getProducts();
  }, []);



  
  
  

};


