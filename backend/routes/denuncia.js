const express = require ('express');
const router = express.Router();
const conexion = require('../database');
const nodemailer = require('nodemailer');

router.get('/formulariodenuncia',(req,res)=>{
    //mostrar las denuncias
    res.render('Denuncia.hbs');   
});

router.post('/formulariodenuncia',(req,res)=>{
    const{nombre,apellidopaterno,apellidomaterno,email,texto} = req.body;
    const nuevaDenuncia = {
        nombre,
        apellidopaterno,
        apellidomaterno,
        email,
        texto
    };


    conexion.query('INSERT INTO denuncia set ?',[nuevaDenuncia]);
    
    res.send('denuncia agregada');

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
        to: 'denunciasealife@outlook.com',
        subject:'Participacion voluntariado',
        text:`Se recibe esta denuncia con lo siguiente: ${texto}`
    };

    transporter.sendMail(mailOptions,function(err,info){
        if(err){
            return console.log(err);
        }

        console.log('Message id',info.messageId);
    });
    
    res.render('exito.hbs');


})

module.exports = router;