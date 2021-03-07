import './App.css'
import React from 'react'

import Mega from './components/mega/Mega'
import Contador from './components/contador/Contador'
import Input from './components/formulario/Input'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from "./components/condicional/UsuarioInfo"
import ParOuImpar from "./components/condicional/ParOuImpar"
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos';
import Familia from './components/basicos/Familia';
import Aleatorio from './components/basicos/Aleatorio'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParamentro'
import Fragmento from './components/basicos/Fragmento'
import Card from './components/layout/Card'
import FamiliaMembro from "./components/basicos/FamiliaMembro"

const App = () => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="Cards">
        
        <Card titulo="#13- Mega" color="#FF4C65">
            <Mega  />
        </Card>

        <Card titulo="#12- Componente controlado (Input)" color="#424242">
            <Contador numeroInicial={100}/>
        </Card>

        <Card titulo="#11- Componente controlado (Input)" color="#E45F56">
            <Input />
        </Card>

        <Card titulo="#10- Comunicação indireta" color="#FF4C65">
            <IndiretaPai />
        </Card>

        <Card titulo="#09- Comunicação Direta" color="#F1C181">
            <DiretaPai />
        </Card>

        <Card titulo="#08- Rendereização Condicional" color="#982395">
            <ParOuImpar numero={21}></ParOuImpar>
            <UsuarioInfo usuario={{ nome: 'Ferando' }}/>

        </Card>

        <Card titulo="#07- Tabela de Produtos" color="#F1C181">
            <TabelaProdutos></TabelaProdutos>
        </Card>

        <Card titulo="#06 - lista de Alunos" color="#FF4C65">
            <ListaAlunos></ListaAlunos>
        </Card>

        <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
          <Familia sobrenome="Ferreira" >
            <FamiliaMembro nome="Pedro"  />
            <FamiliaMembro nome="Ana" />
            <FamiliaMembro nome="Gustavo" sobrenome="Silva" />
          </Familia>
        </Card>

        <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
          <Aleatorio min={1} max={60} />
        </Card>

        <Card titulo="#03 - Fragmento" color="#E94C6F">
          <Fragmento />
        </Card>

        <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
          <ComParametro
            titulo="Segundo Componente"
            subtitulo="Muito Legal" />
        </Card>

        <Card titulo="#01 - Primeiro" color="#588C73">
          <Primeiro></Primeiro>
        </Card>

      </div>
    </div>
  )
}

export default App;