const express = require ('express');
const router = express.Router();
const conexion = require('../database');
const nodemailer = require('nodemailer');


//ruta que va a mostrar la vista donde va a estar el formulario
router.get('/formularioregistro',(req,res)=>{
    //aqui va la vista a la pagina
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


    conexion.query('INSERT INTO participante set ?',[nuevoParticipante]);
    res.send('usuario agregado');

    contentHTML = `
        <h1>Hola ${nombre}</h1>
        <p>Que tal muchas gracias por tu interes te enviaremos mas información a tu correo ${email}</p>
    `

    const transporter = nodemailer.createTransport({
        host:"smtp-mail.outlook.com",
        secureConnection: false,
        port:587,
        tls:{
            ciphers:'SSLv3'
        },
        auth:{
            user:'limpiandolaplaya.sealife@outlook.com',
            pass:'playalimpia123'    
        }
    });


    const mailOptions = {
        from:'"SEA LIFE" <limpiandolaplaya.sealife@outlook.com>',
        to: `${email}`,
        subject:'Participacion voluntariado',
        text:'Hola somos de SEA LIFE'
    };

    transporter.sendMail(mailOptions,function(err,info){
        if(err){
            return console.log(err);
        }

        console.log('Message id',info.messageId);
    });
    
    res.send('Mensje enviado')


    console.log(contentHTML);
    
});

module.exports = router;