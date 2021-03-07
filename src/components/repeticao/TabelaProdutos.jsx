import './TabelaProdutos.css';
import React from "react";
import produtos from '../../data/produtos'

const TabelaProdutos = (props) => {

  function getlinhas() {
    return produtos.map((produto, i) => {
      return (
        <tr key={ produto.id } className={ i % 2 === 0 ? 'Par' : ''}>
          <td>{produto.id}</td>
          <td>{produto.nome}</td>
          <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
        </tr>
      )
    })
  }

  return (
    <div className="TabelaProdutos">

      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {getlinhas()}
        </tbody>
      </table>

    </div>
  )
}

export default TabelaProdutos;