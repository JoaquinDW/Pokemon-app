import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPokemons, filterByType, filterCreated, orderByName, orderByAttack} from '../actions'
import { Link } from 'react-router-dom'
import Card from './Card'
import Paginado from './Paginado'
import SearchBar from './SearchBar'
import Detail from './Detail'

export default function Home(){

    const dispatch = useDispatch() // === mapPropsToState
    const allPokemons = useSelector((state) => state.pokemons) // === mapStateToProps
    const [currentPage , setCurrentPage] = useState(1)
    const [order, setOrder] = useState('')
    const [orderAttack, setOrderAttack] = useState('')
    const [pokemonsPP, setPokemonsPP] = useState(12)
    const lastPokemonIndex = currentPage * pokemonsPP
    const firstPokemonIndex = lastPokemonIndex - pokemonsPP
    const currentPokemons = allPokemons.slice(firstPokemonIndex, lastPokemonIndex)


    const paginado = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }

    useEffect(() =>{
        dispatch(getPokemons())
    },[dispatch])

    function handleClick(e){
        e.preventDefault()
        dispatch(getPokemons())
    }

    function handleFilterType(e){
        e.preventDefault()
        dispatch(filterByType(e.target.value))
    }

    function handleFilterCreated(e){
        e.preventDefault()
        dispatch(filterCreated(e.target.value))
        setCurrentPage(1)
    }
    function handleFilterOrder(e){
        e.preventDefault()
        dispatch(orderByName(e.target.value))
        setCurrentPage(1)
        setOrder(`Ordered ${e.target.value}`)
    }
    function handleFilterAttack(e){
        e.preventDefault()
        dispatch(orderByAttack(e.target.value))
        setCurrentPage(1)
        setOrderAttack(`Ordered ${e.target.value}`)
    }

    return(
        <div>
            <Link to='/pokemon'>Create a pokemon</Link>
            <h1>Pokemon app</h1>
            <button onClick={e => handleClick(e)}>Reload pokemons</button>

            <div>
                <select onChange={e => handleFilterOrder(e)}>
                    <option value="asc">Ascending order</option>
                    <option value="desc">Descending order</option>
                </select>

                <select onChange={e => handleFilterAttack(e)}>
                    <option value="strong">+ Attack</option>
                    <option value="weak">- Attack</option>
                </select>

                <select onChange={e => handleFilterType(e)}>
                    <option value='all'>All types</option>
                    <option value='normal'>Normal</option>
                    <option value='fighting'>Fighting</option>
                    <option value='flying'>Flying</option>
                    <option value='poison'>Poison</option>
                    <option value='ground'>Ground</option>
                    <option value='rock'>Rock</option>
                    <option value='bug'>Bug</option>
                    <option value='ghost'>Ghost</option>
                    <option value='steel'>Steel</option>
                    <option value='fire'>Fire</option>
                    <option value='water'>Water</option>
                    <option value='grass'>Grass</option>
                    <option value='electric'>Electric</option>
                    <option value='psychic'>Psychic</option>
                    <option value='ice'>Ice</option>
                    <option value='dragon'>Dragon</option>
                    <option value='dark'>Dark</option>
                    <option value='fairy'>Fairy</option>
                    <option value='unknown'>Unknown</option>
                    <option value='shadow'>Shadow</option>
                </select>

                <select onChange={e => handleFilterCreated(e)}>
                    <option value="all">All pokemons</option>
                    <option value="api">Existing</option>
                    <option value="created">Created</option>
                </select>
                
            </div>

            <Paginado
            pokemonsPP={pokemonsPP}
            allPokemons={allPokemons.length}
            paginado={paginado}
            />

            <SearchBar/>
            {
                currentPokemons && currentPokemons.map(el => {
                    return (
                    <Link to={`/pokemons/${el.id}`}  >
                    <Card name={el.name} sprite={el.sprite} types={el.types} key={el.id}/>
                    </Link>
                )})
                // sprite ={ el.sprite ? el.sprite : <img src ="url por default"/> }
            }

        </div>
    )
}