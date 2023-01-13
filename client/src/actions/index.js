import axios from 'axios';

export function getPokemons(){
    return async function(dispatch){
        var json = await axios.get("/pokemons")

        return dispatch({
            type: 'GET_POKEMONS',
            payload: json.data
        })
    }
}
export function getNamePokemons(payload){
        return{ 
            type: 'GET_POKEMONS_NAME',
            payload: payload
        }
    }
    

export function filterByType(payload){
    return{
        type: 'FILTER_TYPES',
        payload
    }
}
export function filterCreated(payload){
    return{
        type: 'FILTER_CREATED',
        payload
    }
}
export function orderByName(payload){
    return{
        type: 'ORDER_BY_NAME',
        payload
    }
}
export function orderByAttack(payload){
    return{
        type: 'ORDER_BY_ATTACK',
        payload
    }
}
export function getTypes(){
    return async function(dispatch){
        var json = await axios.get("/types")

        return dispatch({
            type: 'GET_TYPES',
            payload: json.data
        })
    }
}
export function postPokemon(payload){
    return async function(dispatch){
        const data = await axios.post('/pokemons', payload)
         dispatch({
            type: 'POST_POKEMON',
            payload
        })
        return data
    }
}
export function getDetail(id){
    return async function(dispatch){
        try{
        const json = await axios.get(`/pokemons/${id}`)
            return dispatch({
                type: 'GET_DETAIL',
                payload: json.data
            })
        } catch(err){
            console.log(err)
        }
    }
}