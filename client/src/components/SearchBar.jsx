import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getNamePokemons } from '../actions'
import styles from './styles/SearchBar.module.css'

export default function SearchBar(){

    const [currentPage, setCurrentPage] = useState(1)
    const dispatch = useDispatch()
    const [name , setName] = useState('')
    
    function handleInputChange(e){
        console.log(e.target.value)
        e.preventDefault()
        setName(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        dispatch(getNamePokemons(name))
        setName('')
        setCurrentPage(1)
    }

    return(
        <div className={styles.search} >
            <input
            className={styles.search__input}
             type="text"
             placeholder='Search...'
             value={name}
             onChange = {(e) => handleInputChange(e)}
            />
            <button className={styles.search__button} onClick={(e) => handleSubmit(e)}>
                <svg className={styles.search__icon} aria-hidden="true" viewBox="0 0 24 24">
                    <g>
                        <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                    </g>
                </svg>
            </button>
        </div>
    )
}