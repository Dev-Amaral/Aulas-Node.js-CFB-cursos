const express = require('express')
const app = express()
const porta = process.env.PORT

app.get('/',(req,res)=>{
    res.send('sejm bem vindo')
})
app.get('/canal',(req,res)=>{
    res.send('CFB cursos')
})
app.get('/curso',(req,res)=>{
    res.send('cursos node')
})

app.listen(porta || 3000, ()=>{console.log('Servidor rodando')})