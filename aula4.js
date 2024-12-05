// rotas com express
// npm install express --save para instalar o pacote de bibliotecas na pasta

const http = require('http')

const porta = process.env.porta
const servidor=http.createServer((req,res)=>{
res.statusCode=200
res.writeHead(200,{'Content-Type':'text-plain'})
res.end('CFB cursos')
})

servidor.listen(porta || 3000,()=>{console.log('Servidor rodando')})