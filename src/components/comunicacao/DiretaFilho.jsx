import React from 'react';

const DiretaFilho = (props) => { 
  return ( 
     <div>
        <span> { props.texto }  </span>
        <span><strong>{ props.numero } </strong></span>
        <span> { props.nerd ? 'Verdadeiro' : 'Falso' }!</span>
     </div>
  )
}

export default DiretaFilho;

