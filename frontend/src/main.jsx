import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MyRouter from './routing/Router.jsx'
import BookContextProvider from './context/Book.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookContextProvider>
      <MyRouter />
    </BookContextProvider>
  </StrictMode>,
)
