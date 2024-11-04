import {createContext,useState} from "react";


const CartContext = createContext([]);


export default CartContext;

export const CartProvider=({children})=>{
    
    const [universalList,setUniversalList]=useState([]);
    function updateList(incomingList){
        console.log("Updating...");
        setUniversalList(incomingList);
        console.log("Update List-",universalList); 
   
       
    

    };
    function checkCount(){
        var c=0;
        universalList.map(item=>{
            c=c+item.count
        })
        return c;
    }
    
    return(
        <CartContext.Provider value={{universalList,updateList,checkCount}}>
            {children}
        </CartContext.Provider>
    )


    
} 