import React from 'react'
import styles from './styles/Card.module.css'

export default function Card({name, sprite, types}){
    return(
        <div className={styles.card}>

            <div className={styles.card_img}>
                <img src={sprite} alt="" width='150px'/>
            </div>

            <div className={styles.card_info}>
                <p className={styles.title}>
                {name.toUpperCase()}
                </p>
                {types.map((el) => 
                 <p key={el.name} className={styles.subtitle}>{el.name}</p>)}
            </div>
        </div>
    )
}
