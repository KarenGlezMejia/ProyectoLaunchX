const express = require('express');
const paginaPrincipal = require('./routes/paginaprincipal');
const registro = require('./routes/registro');
const reciclaje = require('./routes/reciclaje');

const app = express();

app.set('port',3000 || process.env.PORT);


app.listen(app.get('port'),()=>{
    console.log("Inicializando servidor")
})

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(paginaPrincipal);
app.use(registro);
app.use(reciclaje);
