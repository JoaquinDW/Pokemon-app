const { Router } = require("express");
const axios = require("axios")
const {Pokemon, Type} = require("../db")

const router = Router()

router.get('/', async(req, res) => {
    
    const infoTypes = await axios.get("https://pokeapi.co/api/v2/type")
    const totalInfo = infoTypes.data.results;
    
    totalInfo.forEach((el) => {
        Type.findOrCreate({
            where:{
                name: el.name
            }
        })
    })
    const infoTypeDb = await Type.findAll()
    console.log(infoTypeDb)
    res.status(200).json(infoTypeDb)
    
})

module.exports = router;