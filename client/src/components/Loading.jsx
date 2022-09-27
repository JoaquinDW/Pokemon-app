import React from 'react'
import styles from './styles/Loading.module.css'

export default function Loading(){
    const cards = [1, 2, 3, 4, 5, 6, 7, 8 , 9 ,10 ,11,12]
    
    return(
        <div className={styles.containerAll}>
        <div className={styles.loadingContainer}>     
    
        {
            cards && cards.map(el => {
                return(
                    <div className={styles.loadingCard}> 
           <div className={styles.loadingImg}></div> 
            <h1 className={styles.loadingH1}></h1>
            <p className={styles.loadingP}></p>
        </div>
                )
            })
        }




        </div>
        </div>
    )
}