import './Paginacao.css'

// Props:
//   totalDePaginas -> quantas páginas existem
//   paginaAtual    -> número da página que está sendo exibida
//   aoMudarPagina  -> função chamada com o número da nova página
//
// Este componente não tem state: quem guarda a página atual é o componente pai (App).
function Paginacao({ totalDePaginas, paginaAtual, aoMudarPagina }) {
  // Cria a lista [1, 2, 3, ...] até o total de páginas
  const numerosDasPaginas = Array.from({ length: totalDePaginas }, (_, indice) => indice + 1)

  const estaNaPrimeiraPagina = paginaAtual === 1
  const estaNaUltimaPagina = paginaAtual === totalDePaginas

  return (
    <nav className="paginacao" aria-label="Paginação">
      <button
        type="button"
        className="paginacao-botao"
        onClick={() => aoMudarPagina(paginaAtual - 1)}
        disabled={estaNaPrimeiraPagina}
      >
        Anterior
      </button>

      <ul className="paginacao-lista">
        {numerosDasPaginas.map((numeroDaPagina) => {
          const ehPaginaAtual = numeroDaPagina === paginaAtual

          return (
            <li key={numeroDaPagina}>
              <button
                type="button"
                className={ehPaginaAtual ? 'paginacao-botao paginacao-botao-ativo' : 'paginacao-botao'}
                aria-label={`Página ${numeroDaPagina}`}
                aria-current={ehPaginaAtual ? 'page' : undefined}
                onClick={() => aoMudarPagina(numeroDaPagina)}
              >
                {numeroDaPagina}
              </button>
            </li>
          )
        })}
      </ul>

      <button
        type="button"
        className="paginacao-botao"
        onClick={() => aoMudarPagina(paginaAtual + 1)}
        disabled={estaNaUltimaPagina}
      >
        Próxima
      </button>
    </nav>
  )
}

export default Paginacao
