import './App.css'
import React from 'react'

import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/Repeticao'

export default (props) => (
<div className="App">
    <Card titulo="#04 Repeticao">    
        <Repeticao>

        </Repeticao>
    </Card>
    <Card titulo="#03 Componente com filhos">    
        <ComFilhos>
            <ul>
                <li>João Benedito</li>
                <li>Maria das Graças</li>
                <li>Jébio</li>
                <li>Cássio</li>
            </ul>
        </ComFilhos>
    </Card>
    <Card titulo="#02 Componente com parâmetro">
            <ComParametro Titulo="Esse é o titulo" Subtitulo ="Esse é o subtitulo"/>,
    </Card>
    <Card titulo="#01 Primeiro componente">
            <Primeiro/>
    </Card>
        
        {/*  */}
        {/* <Primeiro/>,
        
        <ComParametro Titulo="Opa" Subtitulo ="Epa"/>, */}
    </div>    
);