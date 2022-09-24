import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getDetail } from '../actions'

export default function Detail(props){

    const dispatch = useDispatch()
    const id = props.match.params.id

    useEffect(() => {
        dispatch(getDetail(id))
    }, [dispatch, id])

    const myPokemon = useSelector((state) => state.pokemonDetail)

    return(
        <div>
            {
                myPokemon.length > 0?
                <div>
                    
                    <h1>I'm {myPokemon[0].name}</h1>
                    <img src={myPokemon[0].sprite} alt='Pokemon'/>
                    <h3>Types: {myPokemon[0].types.map(el => el.name)}</h3>
                    <p>Hp: {myPokemon[0].hp}</p>
                    <p>Attack: {myPokemon[0].attack}</p>
                    <p>Defense: {myPokemon[0].defense}</p>
                    <p>Speed: {myPokemon[0].speed}</p>
                    <p>Height: {myPokemon[0].height}</p>
                    <p>Weight: {myPokemon[0].weight}</p>

                </div>
             
             
             
             : <div>Loading... {console.log(myPokemon)}</div>
            } 

            <Link to='/Home'><button>Go Back To Home</button></Link>
        </div>
    )
}