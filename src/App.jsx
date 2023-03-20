import './App.css'
import React from 'react'

import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'

export default (props) => (
<div className="App">
    <Card titulo="Componente com parâmetro">    
        <ComFilhos>
            <ul>
                <li>João Benedito</li>
                <li>Maria das Graças</li>
                <li>Jébio</li>
                <li>Cássio</li>
            </ul>
        </ComFilhos>
    </Card>
    <Card titulo="Componente com parâmetro">
            <ComParametro Titulo="Esse é o titulo" Subtitulo ="Esse é o subtitulo"/>,
    </Card>
    <Card titulo="Primeiro componente">
            <Primeiro/>
    </Card>
        
        {/*  */}
        {/* <Primeiro/>,
        
        <ComParametro Titulo="Opa" Subtitulo ="Epa"/>, */}
    </div>    
);