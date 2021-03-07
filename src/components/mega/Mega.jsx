import './Mega.css';
import React, { useState } from 'react';

const Mega = (props) =>{
  let item=[];

  const [qtd, setQtd] = useState(6);
  const [valor, setValor] = useState(Array(props.qtd || 6).fill(0));

  function queroMudar(e){
    setQtd(+e.target.value)
  }

  function leftPad(value, totalWidth, paddingChar) {
    var length = totalWidth - value.toString().length + 1;
    return Array(length).join(paddingChar || '0') + value;
  };

  function gerarNumeros(qtd) {
    item.length = 0;
    for (let i = 0; i < qtd; i++) {
      let itens = (parseInt(Math.random() * (60 - 1)) + 1);
      console.log("Item => " + itens)

      if(!item.includes(itens)){
        let v = leftPad(itens,2);
        item.push(v)
        console.log("Item.push => " + item)
      }

    }

    item = item.sort((n1,n2) => n1 - n2).join(' ')  // tirar .join(' ')  para tirar os espaços 
    item = String(item);                            // entre os numeros e colocar a virgula
    setValor(item);
    console.log("setValor => " + item);
  }
  return (
    <div className="Mega">
      <h3>{valor}</h3>
      <div>
        <label>Qtd números</label>
        <input 
          min="6"
          max="15"
          type="number" 
          value={ props.qtd } 
          onChange={(e) => {
            gerarNumeros(qtd)
            queroMudar(e)
          }}
        /> 
      </div>
      <button onClick={e => gerarNumeros(qtd)}>Gerar</button>      
    </div>
    
    )
}

export default Mega;