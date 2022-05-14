const express = require ('express');
const router = express.Router();

//ruta que va a mostrar la vista donde va a estar el formulario
router.get('/formularioregistro',(req,res)=>{
    res.send('Este es el registro')
});


//ruta que va a mandar los datos a la base de datos 
router.post('/formularioregistro',);

module.exports = router;