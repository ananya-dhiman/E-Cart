import React,{ useState, useEffect,useContext } from "react";
import { fetchProducts} from "./Fetch";
import CartContext from "./CartContext";


export const Api = () => { 
  const [mprolist,setMprolist]=useState([]);
  const [wprolist,setWprolist]=useState([]);
  const {universalList,updateList}=useContext(CartContext); //List from the context function
   

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
      
    };
  

    getProducts();
  }, []);

  const [list,setList]=useState([]);
    
  useEffect(() => {
  
    const updatedMlist = mprolist.map(item => ({ ...item, count: 0 })); // Copy mlist
    const updatedWlist = wprolist.map(item => ({ ...item, count: 0 })); // Copy wlist

    // Combine the two lists
    const combinedList = [...updatedMlist, ...updatedWlist];

  
    setList(combinedList);
    console.log("List Made...")
    console.log(list);

    
  }, [mprolist, wprolist]);
  useEffect(()=>{
    if(list && list.length==10){
      updateList(list);  //Giving the newmade list for the first time to the updateList function so that it can update the universal list
      console.log("Universal List is updated: ",universalList);
      setList(universalList); //set list here to the the universal list l 

    }
  

  },[]);
  return [mprolist,wprolist,list];
  

};


