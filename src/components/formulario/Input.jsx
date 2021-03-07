import './Input.css';
import React, { useState } from 'react';

const Input = () => { 
  const [valor, setValor] = useState('Inicial');

  function queroMudar(e){
    setValor(e.target.value)

  }

  return ( 
    <div>
      <h2>{valor}</h2>
      <div className="Input">
           <input value={valor} onChange={queroMudar}/> {/*componente controlado */}
          <input value={valor} readOnly />              {/*componente controlado */}
          <input value={undefined} />                   {/*componente não controlado */}
      </div>
    </div>
  )
}

export default Input;
