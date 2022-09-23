import React from 'react'


export default function Card({name, sprite, types}){
    return(
        <div>
            <div>
                <h3>{name}</h3>
            </div>
            <div>
                <img src={sprite} alt="" width='150px'/>
            </div>
            <div>
                {types.map((el) => 
                 <h5 key={el.name}>{el.name}</h5>)}
            </div>
        </div>
    )
}