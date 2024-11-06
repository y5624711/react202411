import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MyApp2 from "./apps/MyApp3.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp3 />
  </StrictMode>,
)
