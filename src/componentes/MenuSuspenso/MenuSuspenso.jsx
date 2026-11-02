import { useState, useEffect, useRef } from 'react'
import './MenuSuspenso.css'

// Props:
//   rotuloDoBotao -> texto do botão que abre o menu
//   opcoes        -> lista de objetos { rotulo, aoSelecionar }
//                    aoSelecionar é a função (callback) executada ao clicar na opção
function MenuSuspenso({ rotuloDoBotao, opcoes }) {
  // Guarda se a lista de opções está visível
  const [estaAberto, setEstaAberto] = useState(false)

  // Referência para a <div> do menu, usada para saber se o clique foi dentro ou fora dele
  const referenciaDoMenu = useRef(null)

  // Enquanto o menu está aberto, "escuta" cliques na página inteira e a tecla Esc
  useEffect(() => {
    if (!estaAberto) return

    function fecharAoClicarFora(evento) {
      const clicouFora = !referenciaDoMenu.current.contains(evento.target)
      if (clicouFora) {
        setEstaAberto(false)
      }
    }

    function fecharAoApertarEsc(evento) {
      if (evento.key === 'Escape') {
        setEstaAberto(false)
      }
    }

    document.addEventListener('click', fecharAoClicarFora)
    document.addEventListener('keydown', fecharAoApertarEsc)

    // Limpeza: remove os "ouvintes" quando o menu fecha
    return () => {
      document.removeEventListener('click', fecharAoClicarFora)
      document.removeEventListener('keydown', fecharAoApertarEsc)
    }
  }, [estaAberto])

  function selecionarOpcao(opcao) {
    opcao.aoSelecionar()
    setEstaAberto(false)
  }

  return (
    <div className="menu-suspenso" ref={referenciaDoMenu}>
      <button
        type="button"
        className="menu-suspenso-botao"
        aria-haspopup="menu"
        aria-expanded={estaAberto}
        onClick={() => setEstaAberto(!estaAberto)}
      >
        {rotuloDoBotao}
        <span className="menu-suspenso-seta" aria-hidden="true">▾</span>
      </button>

      {/* A lista só é desenhada quando estaAberto é true */}
      {estaAberto && (
        <ul className="menu-suspenso-lista" role="menu">
          {opcoes.map((opcao) => (
            <li key={opcao.rotulo} role="none">
              <button
                type="button"
                role="menuitem"
                className="menu-suspenso-opcao"
                onClick={() => selecionarOpcao(opcao)}
              >
                {opcao.rotulo}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default MenuSuspenso
