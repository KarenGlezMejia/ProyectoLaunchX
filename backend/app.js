const express = require('express');
const paginaPrincipal = require('./routes/paginaprincipal');
const registro = require('./routes/registro');
const reciclaje = require('./routes/reciclaje');
const denuncia = require('./routes/denuncia');
const path = require('path');
//import { engine } from 'express-handlebars';
//const handlebars = require('express-handlebars');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');

const { create } = require("express-handlebars");


const app = express();

app.set('port',3000 || process.env.PORT);
app.set('views',path.join(__dirname,'views'));

const hbs = create({
    layoutsDir: `${__dirname}/views/layouts`,
    extname: `hbs`,
    defaultLayout: '',
    partialsDir: `${__dirname}/views/partials`
});

app.engine('hbs', hbs.engine);

/*
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set('view engine', 'hbs');


app.engine('.hbs',handlebars({
    defaultLayout:'main',
    layoutsDir:path.join(app.get('views'),'layouts'),
    partialsDir:path.join(app.get('views'),'partials'),
    extname:'.hbs'
}));
app.set('view engine','hbs');
*/
app.listen(app.get('port'),()=>{
    console.log("Inicializando servidor")
})

app.use(express.static(path.join(__dirname,'public')));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(paginaPrincipal);
app.use(registro);
app.use(reciclaje);
app.use(denuncia);