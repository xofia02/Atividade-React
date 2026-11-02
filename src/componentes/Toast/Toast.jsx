import { useEffect } from 'react'
import './Toast.css'

const TEMPO_PARA_SUMIR_EM_MS = 4000

const tituloPorTipo = {
  sucesso: 'Sucesso',
  erro: 'Erro',
  informacao: 'Informação',
}

// Props:
//   id       -> identificador do toast
//   mensagem -> texto exibido
//   tipo     -> 'sucesso' | 'erro' | 'informacao'
//   aoFechar -> função que remove o toast da tela
function Toast({ id, mensagem, tipo, aoFechar }) {
  // Assim que o toast aparece, começa a contagem para ele sumir sozinho
  useEffect(() => {
    const temporizador = setTimeout(() => aoFechar(id), TEMPO_PARA_SUMIR_EM_MS)

    // Limpeza: cancela a contagem se o usuário fechar o toast antes
    return () => clearTimeout(temporizador)
  }, [id, aoFechar])

  return (
    <div className={`toast toast-${tipo}`}>
      <div className="toast-texto">
        <strong>{tituloPorTipo[tipo]}</strong>
        <p>{mensagem}</p>
      </div>

      <button
        type="button"
        className="toast-botao-fechar"
        aria-label="Fechar notificação"
        onClick={() => aoFechar(id)}
      >
        ×
      </button>
    </div>
  )
}

export default Toast
