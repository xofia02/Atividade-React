import { useState } from 'react'
import './Abas.css'

// Props:
//   abas -> lista de objetos { titulo, conteudo }
function Abas({ abas }) {
  // Guarda o índice da aba selecionada. Começa na primeira (0).
  const [indiceDaAbaAtiva, setIndiceDaAbaAtiva] = useState(0)

  const abaAtiva = abas[indiceDaAbaAtiva]

  return (
    <div className="abas">
      <div className="abas-lista" role="tablist" aria-label="Componentes da página">
        {abas.map((aba, indice) => {
          const estaAtiva = indice === indiceDaAbaAtiva

          return (
            <button
              key={aba.titulo}
              type="button"
              role="tab"
              id={`aba-${indice}`}
              className={estaAtiva ? 'abas-botao abas-botao-ativa' : 'abas-botao'}
              aria-selected={estaAtiva}
              aria-controls={`painel-da-aba-${indice}`}
              onClick={() => setIndiceDaAbaAtiva(indice)}
            >
              {aba.titulo}
            </button>
          )
        })}
      </div>

      {/* Só o conteúdo da aba ativa é mostrado */}
      <div
        className="abas-painel"
        role="tabpanel"
        id={`painel-da-aba-${indiceDaAbaAtiva}`}
        aria-labelledby={`aba-${indiceDaAbaAtiva}`}
      >
        <h3>{abaAtiva.titulo}</h3>
        <p>{abaAtiva.conteudo}</p>
      </div>
    </div>
  )
}

export default Abas
