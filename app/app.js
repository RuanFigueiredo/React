const express = require('express');

let app= express();

app.get('/', (req, res)=>res.send( "olá mundo"));
app.get('/contatos', (req,res)=>res.send("pagina contatos"));
app.get('/produtos/:id', (req,res)=>{
    let {id}= req.params;
    res.send("eu tenho um produto com id:"+ id)
})
//criando servidor
app.listen(3001, ()=>console.log("servidor rodando na porta 3000"))