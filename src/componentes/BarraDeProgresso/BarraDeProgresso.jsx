import './BarraDeProgresso.css'

// Props:
//   valor  -> número de 0 a 100
//   rotulo -> texto que descreve a tarefa (ex: "Enviando arquivo")
function BarraDeProgresso({ valor, rotulo }) {
  // Garante que o valor nunca fique abaixo de 0 nem acima de 100
  const valorLimitado = Math.min(Math.max(valor, 0), 100)

  return (
    <div className="barra-de-progresso">
      <div className="barra-de-progresso-cabecalho">
        <span>{rotulo}</span>
        <span className="barra-de-progresso-porcentagem">{valorLimitado}%</span>
      </div>

      <div
        className="barra-de-progresso-trilho"
        role="progressbar"
        aria-label={rotulo}
        aria-valuenow={valorLimitado}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {/* A largura do preenchimento é o próprio valor em porcentagem */}
        <div
          className="barra-de-progresso-preenchimento"
          style={{ width: `${valorLimitado}%` }}
        />
      </div>
    </div>
  )
}

export default BarraDeProgresso
