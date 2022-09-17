
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const PokeRoutes = require('./PokeRoutes')
const TypesRoutes = require('./TypesRoutes')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', PokeRoutes)
router.use('/types', TypesRoutes)

module.exports = router;
