const express = require('express');

const router = express.Router();

//esta ruta va a mostrar la pagina donde estaran las ideas de reciclaje
router.get('/ideasdereciclaje',(req,res)=>{
    res.send('Estas son las ideas de reciclaje')
});








module.exports = router;