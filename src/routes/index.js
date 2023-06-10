const express = require('express');
const routerGenre = require('./genre.router');
const routerMovie = require('./movie.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/genres',routerGenre)
router.use('/movies',routerMovie)


module.exports = router;