// Todo o texto exibido na página fica aqui, separado dos componentes.
// Assim os componentes só cuidam do comportamento, e o conteúdo chega até eles via props.

// Conteúdo das ABAS: uma aba para cada componente da página
export const abasDosComponentes = [
  {
    titulo: 'Acordeão',
    conteudo:
      'Organiza o conteúdo em seções que se expandem e se recolhem ao clicar no título. Como só uma seção fica aberta por vez, a página fica mais limpa. Exemplo de uso: perguntas frequentes (FAQ).',
  },
  {
    titulo: 'Paginação',
    conteudo:
      'Divide uma lista longa em páginas menores e oferece botões para navegar entre elas. Deixa a página mais leve e mostra ao usuário onde ele está. Exemplo de uso: listas de produtos e resultados de busca.',
  },
  {
    titulo: 'Progresso',
    conteudo:
      'Mostra visualmente quanto de uma tarefa já foi concluído, de 0% a 100%. Deixa claro para quem espera que algo está acontecendo. Exemplo de uso: envio de arquivos e carregamento de dados.',
  },
  {
    titulo: 'Abas',
    conteudo:
      'Separa conteúdos relacionados em painéis, e só o painel da aba selecionada aparece. Este próprio quadro é um exemplo: cada aba apresenta um dos componentes da página. Exemplo de uso: perfil de usuário e detalhes de produto.',
  },
  {
    titulo: 'Menu',
    conteudo:
      'Um botão que, ao ser clicado, revela uma lista de opções. O menu fecha ao escolher uma opção ou ao clicar fora dele. Exemplo de uso: filtros e seleção de idioma ou de tema.',
  },
  {
    titulo: 'Toast',
    conteudo:
      'Uma mensagem curta que aparece no canto da tela e some sozinha depois de alguns segundos. Dá um retorno rápido, como "salvo com sucesso" ou "erro ao salvar", sem interromper o usuário.',
  },
]

// Conteúdo do ACORDEÃO: perguntas sobre o próprio acordeão
export const itensDoAcordeao = [
  {
    titulo: 'O que é um acordeão?',
    conteudo:
      'É um componente com vários títulos clicáveis. Ao clicar em um título, o conteúdo dele se expande. Ao clicar de novo, ele se recolhe.',
  },
  {
    titulo: 'Por que esse nome?',
    conteudo:
      'O nome vem do instrumento musical. O fole do acordeão abre e fecha, do mesmo jeito que as seções deste componente se expandem e se recolhem.',
  },
  {
    titulo: 'Quando usar?',
    conteudo:
      'Quando existe muito conteúdo e o usuário só precisa ler uma parte dele, como em perguntas frequentes, regulamentos ou páginas de configurações.',
  },
  {
    titulo: 'Por que só um item abre por vez?',
    conteudo:
      'Abrir um item fecha o anterior. Assim a página continua curta e o usuário foca em uma resposta de cada vez.',
  },
  {
    titulo: 'E a acessibilidade?',
    conteudo:
      'Cada título é um botão com o atributo aria-expanded, que informa aos leitores de tela se a seção está aberta ou fechada.',
  },
]

// Conteúdo da PAGINAÇÃO: curiosidades sobre a própria paginação
export const curiosidadesDaPaginacao = [
  {
    titulo: 'De onde vem o nome?',
    texto:
      'Paginação vem de "página", palavra herdada do latim pagina. Antes da web, já era o nome da numeração das folhas de um livro.',
  },
  {
    titulo: 'Por que dividir em páginas?',
    texto:
      'Carregar 10 itens é bem mais rápido do que carregar 10 mil de uma vez. A paginação deixa o site leve e a lista fácil de percorrer.',
  },
  {
    titulo: 'O "Gooooogle"',
    texto:
      'A paginação de resultados do Google ficou famosa por esticar o logotipo: cada letra "o" era um link para uma página de resultados.',
  },
  {
    titulo: 'Rolagem infinita',
    texto:
      'Uma alternativa à paginação é a rolagem infinita, em que novos itens aparecem quando você chega ao fim da página, como nas redes sociais.',
  },
  {
    titulo: 'Botões desabilitados',
    texto:
      'Na primeira página não existe "anterior" e na última não existe "próxima". Por isso esses botões ficam desabilitados, como você pode ver aqui.',
  },
  {
    titulo: 'Onde estou?',
    texto:
      'A página atual fica destacada e recebe o atributo aria-current="page", que informa aos leitores de tela em qual página o usuário está.',
  },
]
