const mysql = require('mysql');
const conexao = mysql.createPool({
    host: localhost,
    user: root,
    password: "",
    database: bd_portifolio,  
});

module.exports = conexao;

