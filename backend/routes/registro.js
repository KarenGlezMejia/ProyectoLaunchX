const express = require ('express');
const router = express.Router();
const conexion = require('../database');

//ruta que va a mostrar la vista donde va a estar el formulario
router.get('/formularioregistro',(req,res)=>{
    conexion.query('SELECT * FROM participante',(err,rows,fields)=>{
        if(err){
            console.log(err);
        }
        res.json(rows);
    })
});


//ruta que va a mandar los datos a la base de datos 
router.post('/formularioregistro', (req,res)=>{
    const{nombre,apellidopaterno,apellidomaterno,email} = req.body;
    const nuevoParticipante = {
        nombre,
        apellidopaterno,
        apellidomaterno,
        email
    };

    contentHTML = `
        <h1>Hola ${nombre}</h1>
        <p>Que tal muchas gracias por tu interes te enviaremos mas información a tu correo ${email}</p>

    `
    console.log(contentHTML);
    conexion.query('INSERT INTO participante set ?',[nuevoParticipante]);
    res.send('recibido');
});

module.exports = router;