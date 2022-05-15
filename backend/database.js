const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    /*host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE*/
    host:'localhost',
    user:'root',
    password:'admin',
    database:'seallife'
});

connection.connect((err)=>{
    if(err){ console.log(err)};
    console.log("Base de datos conectada");
});

module.exports = connection;