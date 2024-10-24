import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Landing}  from './Landing'
import { Product } from './Products'
import { Cart } from './Cart'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <Cart />
    
 
    </>
    
  </StrictMode>,
)
