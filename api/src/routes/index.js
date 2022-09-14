const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {PokemonRoutes} = require('./PokemonRoutes')
const {TypesRoutes} = require('./TypesRoutes')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/Pokemon', PokemonRoutes)
router.use('/Types', TypesRoutes)

module.exports = router;
