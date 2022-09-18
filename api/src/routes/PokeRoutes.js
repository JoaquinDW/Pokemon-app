const { Router } = require("express");
const axios = require("axios")
const { Pokemon, Type } = require('../db')
const {
    getAllPokemon
} = require('../functions/index');

const router = Router()

router.get('/', async(req,res) =>{
    try{
        const name = req.query.name
        const infoApi = await getAllPokemon()
        if(name){
            const filteredName = infoApi.filter((el) => el.name.toLowerCase().includes(name.toLocaleLowerCase()))
            if(filteredName.length === 0){
                res.status(404).send('No se encontro el pokemon')
            } else{
                res.status(200).json(filteredName)
            }
        }
        else{
            res.status(200).json(infoApi)
        }
    }
    catch(err){
        console.log(err)
    }
})

router.post('/' ,async(req,res) => {
    const {
        name,
        imageCard,
        imageDetail,
        height,
        weight,
        baseExp,
        hp,
        attack,
        defense,
        speed,
        created,
        types
      } = req.body;
    
    let pokemonCreated = await Pokemon.create({
        name,
        imageCard,
        imageDetail,
        height,
        weight,
        baseExp,
        hp,
        attack,
        defense,
        speed,
        created
    })
    let TypeDb = await Type.FindAll({
        where: {name: types}
    })
    const TypeMap = TypeDb.map((e) => e.dataValues.id)
    pokemonCreated.addType(TypeMap)
    res.status(200).send("Pokemon creado con exito")
})

router.get('/:id', async(req, res) => {
    let {id} = req.params
    const allPokemons = await getAllPokemon()
    if(id){
        let pokemonfiltered = await allPokemons.filter(el => el.id == id)
        pokemonfiltered.length?
        res.status(200).json(pokemonfiltered) :
        res.status(404).send('cant find this pokemon')
    }
})


module.exports = router;
