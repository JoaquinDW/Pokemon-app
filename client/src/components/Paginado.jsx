import React from 'react'
import styles from './styles/Paginado.module.css'

export default function Paginado({pokemonsPP, allPokemons, paginado}){
    const pageNumbers = []

    for(let i = 1; i<= Math.ceil(allPokemons/pokemonsPP); i++){
        pageNumbers.push(i)
    }

    return(
        <nav>
            <ul className={styles.ul}>
                {
                    pageNumbers && 
                    pageNumbers.map(number => {
                        return(
                        <li key={number} >
                            <button onClick={()=> paginado(number)} className={styles.button} >
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