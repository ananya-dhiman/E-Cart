import {createContext,useState} from "react";


const CartContext = createContext([]);


export default CartContext;
var c=0;
export const CartProvider=({children})=>{
    
    const [universalList,setUniversalList]=useState([]);
    function updateList(incomingList){
        console.log("Updating...");
        setUniversalList(incomingList);
        console.log("Update List-",universalList); 
        c=0;
        universalList.map(item=>{
            c=c+item.count
        })
        console.log("Count checked: ",c);
       
    

    };
    
    return(
        <CartContext.Provider value={{universalList,updateList,c}}>
            {children}
        </CartContext.Provider>
    )


    
} 