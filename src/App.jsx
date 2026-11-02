import { useState, useEffect } from 'react'

import Abas from './componentes/Abas/Abas.jsx'
import Acordeao from './componentes/Acordeao/Acordeao.jsx'
import Paginacao from './componentes/Paginacao/Paginacao.jsx'
import BarraDeProgresso from './componentes/BarraDeProgresso/BarraDeProgresso.jsx'
import MenuSuspenso from './componentes/MenuSuspenso/MenuSuspenso.jsx'
import { useToastDesafio } from './desafio/ToastContextoDesafio.jsx'

import { abasDosComponentes, itensDoAcordeao, curiosidadesDaPaginacao } from './dados/conteudo.js'
import './App.css'

const ITENS_POR_PAGINA = 2

// Componente principal: guarda os states da página e entrega os dados aos componentes via props
function App() {
  // DESAFIO: pega a função mostrarToast do contexto global
  const { mostrarToast } = useToastDesafio()

  // ---------- MENU SUSPENSO: tema da página ----------
  const [tema, setTema] = useState('claro')

  function trocarTema(novoTema) {
    setTema(novoTema)
    mostrarToast(`Modo ${novoTema} ativado.`, 'informacao')
  }

  const opcoesDeTema = [
    { rotulo: 'Modo claro', aoSelecionar: () => trocarTema('claro') },
    { rotulo: 'Modo escuro', aoSelecionar: () => trocarTema('escuro') },
  ]

  // ---------- PAGINAÇÃO ----------
  const [paginaAtual, setPaginaAtual] = useState(1)

  const totalDePaginas = Math.ceil(curiosidadesDaPaginacao.length / ITENS_POR_PAGINA)
  const indiceInicial = (paginaAtual - 1) * ITENS_POR_PAGINA
  const curiosidadesDaPaginaAtual = curiosidadesDaPaginacao.slice(
    indiceInicial,
    indiceInicial + ITENS_POR_PAGINA
  )

  // ---------- BARRA DE PROGRESSO: simulação de envio de arquivo ----------
  const [progresso, setProgresso] = useState(0)
  const [estaCarregando, setEstaCarregando] = useState(false)

  function iniciarCarregamento() {
    setProgresso(0)
    setEstaCarregando(true)
  }

  // Enquanto estaCarregando for true, aumenta o progresso em 10% a cada 0,4 segundo
  useEffect(() => {
    if (!estaCarregando) return

    const intervalo = setInterval(() => {
      setProgresso((valorAnterior) => Math.min(valorAnterior + 10, 100))
    }, 400)

    return () => clearInterval(intervalo)
  }, [estaCarregando])

  // Quando o progresso chega a 100%, para o carregamento e avisa com um toast
  useEffect(() => {
    if (progresso === 100) {
      setEstaCarregando(false)
      mostrarToast('Arquivo enviado com sucesso!', 'sucesso')
    }
  }, [progresso, mostrarToast])

  return (
    <div className={`app tema-${tema}`}>
      <header className="cabecalho">
        <h1>Componentes React</h1>
        <p>Cada quadro desta página é um componente e explica o próprio conceito.</p>
      </header>

      <main className="grade-de-componentes">
        {/* ABAS */}
        <section className="cartao cartao-largo" aria-labelledby="titulo-abas">
          <h2 id="titulo-abas">Abas</h2>
          <p className="cartao-descricao">Cada aba apresenta um dos seis componentes desta página.</p>
          <Abas abas={abasDosComponentes} />
        </section>

        {/* ACORDEÃO */}
        <section className="cartao cartao-largo" aria-labelledby="titulo-acordeao">
          <h2 id="titulo-acordeao">Acordeão</h2>
          <p className="cartao-descricao">Clique em uma pergunta para abrir a resposta.</p>
          <Acordeao itens={itensDoAcordeao} />
        </section>

        {/* PAGINAÇÃO */}
        <section className="cartao" aria-labelledby="titulo-paginacao">
          <h2 id="titulo-paginacao">Paginação</h2>
          <p className="cartao-descricao">Curiosidades sobre paginação, divididas em páginas.</p>

          <ul className="lista-de-curiosidades">
            {curiosidadesDaPaginaAtual.map((curiosidade) => (
              <li key={curiosidade.titulo}>
                <h3>{curiosidade.titulo}</h3>
                <p>{curiosidade.texto}</p>
              </li>
            ))}
          </ul>

          <Paginacao
            totalDePaginas={totalDePaginas}
            paginaAtual={paginaAtual}
            aoMudarPagina={setPaginaAtual}
          />
        </section>

        {/* BARRA DE PROGRESSO */}
        <section className="cartao" aria-labelledby="titulo-barra">
          <h2 id="titulo-barra">Barra de Progresso</h2>
          <p className="cartao-descricao">
            Indica o andamento de uma tarefa. Clique no botão para simular o envio de um arquivo.
          </p>

          <BarraDeProgresso valor={progresso} rotulo="Enviando arquivo" />

          <button
            type="button"
            className="botao botao-principal"
            onClick={iniciarCarregamento}
            disabled={estaCarregando}
          >
            {estaCarregando ? 'Enviando...' : 'Iniciar envio'}
          </button>
        </section>

        {/* MENU SUSPENSO */}
        <section className="cartao" aria-labelledby="titulo-menu">
          <h2 id="titulo-menu">Menu Suspenso</h2>
          <p className="cartao-descricao">
            Abra o menu e escolha o tema da página. Ele fecha ao escolher uma opção ou ao clicar fora.
          </p>

          <MenuSuspenso
            rotuloDoBotao={tema === 'claro' ? 'Tema: claro' : 'Tema: escuro'}
            opcoes={opcoesDeTema}
          />
        </section>

        {/* NOTIFICAÇÃO TOAST */}
        <section className="cartao" aria-labelledby="titulo-toast">
          <h2 id="titulo-toast">Notificação Toast</h2>
          <p className="cartao-descricao">
            Mensagens rápidas que somem sozinhas. Clique para ver cada tipo.
          </p>

          <div className="grupo-de-botoes">
            <button
              type="button"
              className="botao"
              onClick={() => mostrarToast('Suas alterações foram salvas.', 'sucesso')}
            >
              Sucesso
            </button>
            <button
              type="button"
              className="botao"
              onClick={() => mostrarToast('Não foi possível salvar. Tente novamente.', 'erro')}
            >
              Erro
            </button>
            <button
              type="button"
              className="botao"
              onClick={() => mostrarToast('Toasts somem sozinhos após 4 segundos.', 'informacao')}
            >
              Informação
            </button>
          </div>
        </section>
      </main>

      <footer className="rodape">
        <p>Atividade ReactJS · Engenharia de Software · UCSal</p>
      </footer>
    </div>
  )
}

export default App
