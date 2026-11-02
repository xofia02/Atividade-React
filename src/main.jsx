import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ProvedorToastDesafio } from './desafio/ToastContextoDesafio.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* DESAFIO: o Provedor envolve o App inteiro, então qualquer componente pode mostrar um toast */}
    <ProvedorToastDesafio>
      <App />
    </ProvedorToastDesafio>
  </StrictMode>
)
