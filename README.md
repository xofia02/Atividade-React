# Atividade React – Componentes

Aplicação web responsiva com 6 componentes React. Cada componente explica o próprio conceito.

## Como rodar

```bash
npm install
npm run dev
```

## Estrutura

```
src/
├── main.jsx                  → ponto de entrada (envolve o App com o Provedor do desafio)
├── App.jsx                   → componente principal, organiza todos os outros
├── App.css / index.css       → layout, temas e responsividade
├── dados/conteudo.js         → textos exibidos na página
├── componentes/
│   ├── Abas/
│   ├── Acordeao/
│   ├── BarraDeProgresso/
│   ├── MenuSuspenso/
│   ├── Paginacao/
│   └── Toast/
└── desafio/
    └── ToastContextoDesafio.jsx  → desafio extra: estado global com Context API
```
