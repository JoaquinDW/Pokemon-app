import React from 'react'

export default function Paginado({pokemonsPP, allPokemons, paginado}){
    const pageNumbers = []

    for(let i = 0; i<= Math.ceil(allPokemons/pokemonsPP); i++){
        pageNumbers.push(i+1)
    }

    return(
        <nav>
            <ul>
                {
                    pageNumbers && 
                    pageNumbers.map(number => {
                        return(
                        <li key={number}>
                            <button onClick={()=> paginado(number)} >
                                {number}
                            </button>
                        </li>
                    )
                })
                }
            </ul>
        </nav>
    )
}