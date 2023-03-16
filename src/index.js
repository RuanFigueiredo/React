import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'

ReactDOM.render(
    <div>
        <Primeiro/>,
        <ComParametro Titulo="Esse é o titulo" Subtitulo ="Esse é o subtitulo"/>,
        <ComParametro Titulo="Opa" Subtitulo ="Epa kk"/>,
    </div>,
    
    document.getElementById('root')
)
