import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Productcard from './components/Productcard'
import './index.css'
import Calculator from './components/Calculator'
import Word_count from './components/Word_count'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Word_count/>
    <Productcard/>
    <Calculator/>
  </StrictMode>,
)
