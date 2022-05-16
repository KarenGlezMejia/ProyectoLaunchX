const express = require('express');

const router = express.Router();

//esta ruta va a mostrar la pagina donde estaran las ideas de reciclaje
router.get('/exito',(req,res)=>{
    res.render('exito.hbs')
});








module.exports = router;