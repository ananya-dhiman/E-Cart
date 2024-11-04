import { StrictMode,useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {Landing}  from './Landing'
import { Product } from './Products'
import { Cart } from './Cart'
import { CartProvider } from './Functions/CartContext';
import Api from './Functions/Api';
import { Checkout } from './Checkout';
const router=createBrowserRouter([
  {
    path:"/",
    element:<Landing/>
  },
  {
    path:"/product",
    element:<Product/>
  },
  {
    path:"/cart",
    element:<Cart/>
  },
  {
    path:"/checkout",
    element:<Checkout/>
  }
 
]);


  



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
   
    
 
    </>
    
  </StrictMode>,
)
