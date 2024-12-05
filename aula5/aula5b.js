const http = require('http')
const fs = require ('fs')

const porta = process.env.porta

const server = http.createServer((req,res)=>{
    fs.appendFile('teste.txt','criando arquivo txt com appendFile',(err)=>{
        if(err) throw err
        console.log('Arquivo criado')
    })
})

server.listen(3000, ()=>{console.log('ROdando')})