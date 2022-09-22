import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getNamePokemons } from '../actions'

export default function SearchBar(){
    
    const dispatch = useDispatch()
    const [name , setName] = useState('')
    
    function handleInputChange(e){
        e.prevent.default()
        setName(e.target.value)
    }
    function handleSubmit(e){
        e.prevent.default()
        dispatch(getNamePokemons(name))
        setName('')
    }

    return(
        <div>
            <input
             type="text"
             placeholder='Search...'
             value={name}
             onChange = {(e) => handleInputChange(e)}
            />
            <button type='submit' onClick={(e) => handleSubmit(e)}>Search</button>
        </div>
    )
}