const express = require('express');
const ruta = express.Router();

ruta.get('/index', (req, res)=> {
    res.json({score: '852'});
})

ruta.post('/usuarioDatos', (req, res)=> {
    let usuario = req.body;
    console.log(usuario.nombre);
    console.log(usuario.password);

    res.json({success: 'gracias'})
})

module.exports = ruta;