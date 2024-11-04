import { useEffect, useState,useContext} from 'react';
import Api from './Api';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import {Info} from './Components/Info';
import {Loader} from "./Components/Loader";
import CartContext from "./CartContext";

export function Product(){
  console.log("Product Page renders");
  const [loading,setLoading]=useState(true);
  const {universalList,updateList}=useContext(CartContext);
  
    //Running api to get the final list which is updated to universal list
     
    Api();
 

    useEffect(() => {
      if (universalList) {
        setLoading(false);
      }
      console.log("Final log");
      console.log(universalList);

    }, [universalList]);
    


    //Add to cart function(Is kept here to keep the hooks in higher hierarchy or parent to child )
    const [add,setAdd]=useState(false);
    function addToCart(productId){
      console.log("Running add to cart")
      const temp=universalList.map(item=>{
        //Checking for the product Id and updating its count value 
        if (item.id === productId) {
          return {
            ...item,
            count: item.added ? item.count - 1 : item.count + 1,
            added: !item.added
          };
        }
        return item;
      });
       
        setAdd(prevadd=>!prevadd);
        updateList(temp);  
        

      };
 


    
    
    return (
        
        <>
   
      <Header/>
      {loading? <Loader/>
      :
      <Info
      infoList={universalList}
      addToCart={addToCart}
      
      />

      }

 
       

        
        <Footer />



        
              
        </>
    );
    
  }