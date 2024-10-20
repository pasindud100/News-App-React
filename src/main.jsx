import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import 'bootstrap/dist/js/bootstrap.bundle.min.js';//
=======
>>>>>>> 895c57a (create responsive navbar)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
