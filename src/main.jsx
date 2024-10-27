import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {Landing}  from './Landing'
import { Product } from './Products'
import { Cart } from './Cart'

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
 

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <RouterProvider router={router} />
   
    
 
    </>
    
  </StrictMode>,
)
