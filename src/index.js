import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

//import Primeiro from './components/Primeiro'
//import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'

ReactDOM.render(
    <div>
        <ComFilhos>
            <ul>
                <li>João Benedito</li>
                <li>Maria das Graças</li>
                <li>Jébio</li>
                <li>Cássio</li>
            </ul>
        </ComFilhos>
        {/* <Primeiro/>,
        <ComParametro Titulo="Esse é o titulo" Subtitulo ="Esse é o subtitulo"/>,
        <ComParametro Titulo="Opa" Subtitulo ="Epa"/>, */}
    </div>,
    
    document.getElementById('root')
)
