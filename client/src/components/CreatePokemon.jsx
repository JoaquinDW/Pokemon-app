import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { getPokemons, getTypes, postPokemon } from '../actions'
import { useDispatch, useSelector} from 'react-redux'
import styles from './styles/CreatePokemon.module.css'

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

    function handleDelete(e){
        setInput({
            ...input,
            types: input.types.filter((el) => el !== e)
        })
    }

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
        if(err.name || err.type || err.hp || input.name === "" || input.hp.length === 0){
            alert("Cant create pokemon without data")
        } else{
        if(!input.sprite){
            return input.sprite = "https://i.pinimg.com/236x/bb/65/ac/bb65acb8eced7c4a1fbce90916211e80--sticker-vinyl-car-decals.jpg"
        }
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
    }

    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch])

    return(
        <div className={styles.container}>
            <Link to='/home'><button>Back</button></Link>
            <h1>Create your own pokemon!</h1>
            
            <form action="" onSubmit={(e)=> handleSubmit(e)} >
            <div className={styles.formContainer} >

                <div className={styles.inputGroup}>
                    <label htmlFor="name" for="name" className={styles.label}>Name</label>
                    <input type="text" value={input.name} name="name" onChange={handleChange} className={styles.input}/>
                    {err.name && (<p className={styles.err}>{err.name}</p> )}
                </div>
                
                <div>
                    <label htmlFor=""className={styles.label}>hp</label>
                    <input type="number" value={input.hp} name="hp"onChange={handleChange}className={styles.input}/>
                    {err.hp && (<p className={styles.err}>{err.hp}</p> )}

                </div>
                <div>
                    <label htmlFor=""className={styles.label}>attack</label>
                    <input type="number" value={input.attack} name="attack"onChange={handleChange}className={styles.input}/>
                </div>
                <div>
                    <label htmlFor=""className={styles.label}>defense</label>
                    <input type="number" value={input.defense} name="defense"onChange={handleChange}className={styles.input}/>
                </div>
                <div>
                    <label htmlFor=""className={styles.label}>speed</label>
                    <input type="number" value={input.speed} name="speed"onChange={handleChange}className={styles.input}/>

                </div>
                <div>
                    <label htmlFor=""className={styles.label}>height</label>
                    <input type="number" value={input.height} name="height"onChange={handleChange}className={styles.input}/>

                </div>
                <div>
                    <label htmlFor=""className={styles.label}>weight</label>
                    <input type="number" value={input.weight} name="weight"onChange={handleChange}className={styles.input}/>

                </div>
                <div>
                    <label htmlFor=""className={styles.label}>image</label>
                    <input type="text" value={input.sprite} name="sprite"onChange={handleChange} className={styles.input}/>
                </div>
                </div>

                <div>
                    <label className={styles.label}>Types:</label>
                    <div className={styles.selectContainer}>
                    <select onChange={(e) => handleSelect(e)} className={styles.select}>
                        {types?.map((el) => (
                        <option  value={el.name} key={el.id}> {el.name} </option>
                        ))}
                    </select>
                    </div>
                </div>
                {err.type && (<p>{err.type}</p>)}
                {input.types?.map((el) => (
              <div className={styles.cp_types}>
                <div className={styles.innerTypes}>
                  <button onClick={() => handleDelete(el)} > x </button>
                    <p className={styles.pTypes}>{el}</p>
                </div>
              </div>
            ))}
                
                <button type='submit' >Create pokemon</button>

            </form>
        </div>
    )
}