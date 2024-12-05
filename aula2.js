const http = require('http');

http.createServer((request, resposta) =>{
    resposta.writeHead(200,{'Content-Type':'text/plain'});
    resposta.write('CFB cursos\n')
    resposta.end();

}).listen(1337);