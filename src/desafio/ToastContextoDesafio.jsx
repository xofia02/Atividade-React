// DESAFIO EXTRA: Gerenciamento de Estado Global com Context API
//
// A lista de toasts fica guardada aqui, em um contexto global.
// Qualquer componente dentro do <ProvedorToastDesafio> pode mostrar um toast
// chamando useToastDesafio(), sem precisar passar props de componente em componente.

import { createContext, useContext, useState, useCallback, useRef } from 'react'
import Toast from '../componentes/Toast/Toast.jsx'
import './ToastContextoDesafio.css'

// 1. Cria o contexto
const ContextoToastDesafio = createContext(null)

// 2. Cria o Provedor: o componente que guarda o state e o compartilha
export function ProvedorToastDesafio({ children }) {
  const [listaDeToasts, setListaDeToasts] = useState([])

  // Contador para dar um id diferente a cada toast
  const proximoId = useRef(1)

  // useCallback mantém a mesma função entre renderizações.
  // Sem isso, o temporizador de cada toast reiniciaria toda vez que a lista mudasse.
  const mostrarToast = useCallback((mensagem, tipo = 'informacao') => {
    const novoToast = { id: proximoId.current, mensagem, tipo }
    proximoId.current = proximoId.current + 1

    setListaDeToasts((listaAnterior) => [...listaAnterior, novoToast])
  }, [])

  const removerToast = useCallback((idDoToast) => {
    setListaDeToasts((listaAnterior) => listaAnterior.filter((toast) => toast.id !== idDoToast))
  }, [])

  return (
    <ContextoToastDesafio.Provider value={{ mostrarToast }}>
      {children}

      {/* aria-live="polite": leitores de tela anunciam os toasts que aparecerem aqui */}
      <div className="toast-container-desafio" aria-live="polite">
        {listaDeToasts.map((toast) => (
          <Toast
            key={toast.id}
            id={toast.id}
            mensagem={toast.mensagem}
            tipo={toast.tipo}
            aoFechar={removerToast}
          />
        ))}
      </div>
    </ContextoToastDesafio.Provider>
  )
}

// 3. Hook para usar o contexto. Exemplo: const { mostrarToast } = useToastDesafio()
export function useToastDesafio() {
  return useContext(ContextoToastDesafio)
}
