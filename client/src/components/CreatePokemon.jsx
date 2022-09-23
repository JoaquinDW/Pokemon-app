import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { getTypes, postPokemon } from '../actions'
import { useDispatch, useSelector} from 'react-redux'

export default function CreatePokemon(){
    
    const dispatch = useDispatch()
    const history = useHistory()
    const types = useSelector((state) => state.types)
    const [err, setErr] = useState({})
    const [input, setInput] = useState({
        name: "",
        hp: "",
        attack: "",
        defense:"" ,
        speed:"" ,
        height:"" ,
        weight:"" ,
        sprite:"" ,
        types: []
    })

    function validate(el) {
        let errors= {}
        if(!el.name) errors.name = 'Name must be completed'
        if(el.types.length === 0 || el.types.length > 2) errors.types = 'Types required'
        if(!el.hp || el.hp <= 0) errors.hp = 'HP required must be > 0'
        
        return errors
      }

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setErr(validate({
            ...input,
            [e.target.name]: e.target.value
          }))
    }

    function handleSelect(e){
        setInput({
            ...input,
            types: [...input.types,e.target.value]
        })
        setErr(validate({ ...input, types: [...input.types, e.target.value] }));
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(postPokemon(input))
        alert("Pokemon has been created successfully")
        setInput({
            name: "",
            hp: "",
            attack: "",
            defense:"" ,
            speed:"" ,
            height:"" ,
            weight:"" ,
            sprite:"" ,
            types: []
        })
        history.push('/home')
    }

    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch])

    return(
        <div>
            <Link to='/home'><button>Back</button></Link>
            <h1>Create your own pokemon!</h1>
            
            <form action="" onSubmit={(e)=> handleSubmit(e)}>
            
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" value={input.name} name="name" onChange={handleChange}/>
                    {err.name && (<p>{err.name}</p> )}
                </div>
                <div>
                    <label htmlFor="">hp</label>
                    <input type="number" value={input.hp} name="hp"onChange={handleChange}/>
                    {err.hp && (<p>{err.hp}</p> )}

                </div>
                <div>
                    <label htmlFor="">attack</label>
                    <input type="number" value={input.attack} name="attack"onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="">defense</label>
                    <input type="number" value={input.defense} name="defense"onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="">speed</label>
                    <input type="number" value={input.speed} name="speed"onChange={handleChange}/>

                </div>
                <div>
                    <label htmlFor="">height</label>
                    <input type="number" value={input.height} name="height"onChange={handleChange}/>

                </div>
                <div>
                    <label htmlFor="">weight</label>
                    <input type="number" value={input.weight} name="weight"onChange={handleChange}/>

                </div>
                <div>
                    <label htmlFor="">image</label>
                    <input type="text" value={input.sprite} name="sprite"onChange={handleChange}/>
                </div>


                <div>
                    <label>Types:</label>

                    <select onChange={(e) => handleSelect(e)}>
                        {types?.map((el) => (
                        <option  value={el.name} key={el.id}> {el.name} </option>
                        ))}
                    </select>
                </div>
                
                <button type='submit' >Create pokemon</button>

            </form>
        </div>
    )
}