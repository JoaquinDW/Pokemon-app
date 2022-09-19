import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPokemons } from '../actions'

export default function Home(){

    const dispatch = useDispatch()
    const allPokemons = useSelector((state) => state.pokemons)

    useEffect(() =>{
        dispatch(getPokemons())
    })

    return(
        <div>
            
        </div>
    )
}