import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles/Landing.module.css'
import icon from './styles/images/pokemon-13.svg'

export default function LandingPage(){
    return(
        
            <div className={styles.container}>
                <div>
                    <img src={icon} alt="Pokemon" className={styles.img}/> 
                </div>

                <div className={styles.info}>
                <h1 className={styles.title}>The easiest <br /> place to invest  <br /> pokemons</h1>
                <Link to='/Home'>
                    <button className={styles.button}>Get started!</button>
                </Link>
                </div>
                
            </div>

    )
}