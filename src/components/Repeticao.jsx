import React from 'react'

import produtos from  '../data/produtos'

export default props => {

    function getProdutosListItem(){
        return produtos.map()
    }


    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                <li></li>
            </ul>
        </div>
    )
}