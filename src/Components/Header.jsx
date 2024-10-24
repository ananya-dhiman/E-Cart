import { FaShoppingCart } from "react-icons/fa";

export function Header(){
    const style = { color: "white", fontSize: "40px" }

    
    return (
        <>
        <div className='header'>
            
        
        <h1>E-CART</h1>
        <div className='left'>
        <h1>Home</h1>
    

        
        <FaShoppingCart 
        style={style} />

        <div className="count">0</div>
     
        </div>
        </div>
        
        </>
    
        );

    }