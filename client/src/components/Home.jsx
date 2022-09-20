import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPokemons } from '../actions'
import { Link } from 'react-router-dom'
import Card from './Card'

export default function Home(){

    const dispatch = useDispatch() // === mapPropsToState
    const allPokemons = useSelector((state) => state.pokemons) // === mapStateToProps

    useEffect(() =>{
        dispatch(getPokemons())
    },[dispatch])

    function handleClick(e){
        e.preventDefault()
        dispatch(getPokemons())
    }

    return(
        <div>
            <Link to='/pokemon'>Create a pokemon</Link>
            <h1>Pokemon app</h1>
            <button onClick={e => handleClick(e)}>Reload pokemons</button>

            <div>
                <select>
                    <option value="asc">Ascending order</option>
                    <option value="desc">Descending order</option>
                </select>

                <select>
                    <option value="strong">+ Attack</option>
                    <option value="weak">- Attack</option>
                </select>

                <select>
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

                <select>
                    <option value="all">All pokemons</option>
                    <option value="api">Existing</option>
                    <option value="created">Created</option>
                </select>
                
            </div>
            {
                allPokemons && allPokemons.map(el => {
                    return (
                    <Card name={el.name} sprite={el.sprite} types={el.types}/>
                )})
            }

        </div>
    )
}