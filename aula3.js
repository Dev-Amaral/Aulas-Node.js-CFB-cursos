// aula de rotas
// rota cursos, canal, rota sobre

const http = require('http');

const port = 1000;
const host = '127.0.0.1';

const servidor = http.createServer((req, res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})

    if(req.url=='/'){
        res.write('<h1>Seja bem vindo</h1>');
    } else if(req.url=='/canal'){
        res.write('<h1>CFB CURSOS</h1>');
    } else if(req.url=='/curso'){
        res.write('<h1>curso de node</h1>');
    } else 
    res.end();
});

servidor.listen(port, host,()=>{console.log('Servidor rodando')});