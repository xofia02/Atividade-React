import { useState } from 'react'
import './Acordeao.css'

// Props:
//   itens -> lista de objetos { titulo, conteudo }
function Acordeao({ itens }) {
  // Guarda o índice do item aberto. null = nenhum item aberto.
  const [indiceDoItemAberto, setIndiceDoItemAberto] = useState(0)

  function alternarItem(indiceClicado) {
    // Se clicar no item que já está aberto, ele fecha. Se não, abre o item clicado.
    if (indiceClicado === indiceDoItemAberto) {
      setIndiceDoItemAberto(null)
    } else {
      setIndiceDoItemAberto(indiceClicado)
    }
  }

  return (
    <div className="acordeao">
      {itens.map((item, indice) => {
        const estaAberto = indice === indiceDoItemAberto
        const idDoBotao = `acordeao-botao-${indice}`
        const idDoConteudo = `acordeao-conteudo-${indice}`

        return (
          <div
            key={item.titulo}
            className={estaAberto ? 'acordeao-item acordeao-item-aberto' : 'acordeao-item'}
          >
            <h3 className="acordeao-titulo">
              <button
                type="button"
                id={idDoBotao}
                className="acordeao-botao"
                aria-expanded={estaAberto}
                aria-controls={idDoConteudo}
                onClick={() => alternarItem(indice)}
              >
                {item.titulo}
                <span className="acordeao-icone" aria-hidden="true">+</span>
              </button>
            </h3>

            <div
              id={idDoConteudo}
              className="acordeao-conteudo"
              role="region"
              aria-labelledby={idDoBotao}
            >
              <div className="acordeao-conteudo-interno">
                <p>{item.conteudo}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Acordeao
