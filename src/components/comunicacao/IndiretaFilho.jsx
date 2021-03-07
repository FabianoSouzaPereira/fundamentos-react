import React from 'react';

const IndiretaFilho = (props) => { 
  const max = 70;
  const min = 50;
  const gerarIdade = () => parseInt(Math.random() * (max - min)) + min
  const gerarNerd = () => Math.random() > 0.5;
  return ( 
    <div>
        <div>Filho</div>
        <button onClick={
          function(e){
            props.quandoClicar('João', gerarIdade(), gerarNerd)
          }
        }>
          Fornecer Informaçẽos
        </button>
    </div>
  )
}

export default IndiretaFilho;
