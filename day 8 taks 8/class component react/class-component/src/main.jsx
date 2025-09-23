import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Counter from './component/Counter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counter/>
  </StrictMode>,
)
