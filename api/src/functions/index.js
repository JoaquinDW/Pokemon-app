const axios = require('axios')
const {Pokemon, Type} = require('../db')


 const getApiInfo = async() =>{
    const apiUrl = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40')
    const infoApiPokemons = await apiUrl.data.results
    let subReq = infoApiPokemons.map((el) => axios.get(el.url))
    let pokemonsApi = await Promise.all(subReq)

    let apiPokemons = pokemonsApi.map((el) =>{

        const obj = {
            id: el.data.id,
            name: el.data.name,
            hp: el.data.stats[0].base_stat,
            attack: el.data.stats[1].base_stat,
            defense: el.data.stats[2].base_stat,
            speed: el.data.stats[5].base_stat,
            height: el.data.height,
            weight: el.data.weight,
            sprite: el.data.sprites.other["official-artwork"].front_default,
            types: el.data.types.map(el => {return {name:el.type.name}}),//es para tener un objeto y acceder al name desde el front 
        }
        return obj
    })
    return apiPokemons
}

 const getDbInfo = async () => {
     const pokemonDB = await Pokemon.findAll({
     include: {
         model: Type,
        attributes: ['name'],
        }
    })
    return pokemonDB
}

 const getAllPokemon = async () => {
    const apiInfo = await getApiInfo()
    const dbInfo = await getDbInfo()
    const allInfo = apiInfo.concat(dbInfo)
    return allInfo
}

module.exports = { getAllPokemon}
