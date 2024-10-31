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
    
    return(
        <CartContext.Provider value={{universalList,updateList}}>
            {children}
        </CartContext.Provider>
    )


    
} 