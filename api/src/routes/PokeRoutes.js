const { Router } = require("express");
const axios = require("axios")
const {Pokemon, Types} = require("../db")
const {
    getAllPokemon
} = require('../functions/index');

const router = Router()

router.get('/', async(req,res) =>{
    try{
        const name = req.query.name
        const infoApi = await getAllPokemon()
        if(name){
            const filteredName = infoApi.filter((el) => el.name.toLowerCase() === name.toLocaleLowerCase())
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

module.exports = router;
