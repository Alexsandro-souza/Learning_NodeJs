// require('alguma função : http, fs ...') é nativo do node
const http = require('http'); /* Essa função permite criar um server*/
const fs = require('fs'); /* Essa função com parametro 'fs' permite manipular arquivos*/
const hostname = "127.0.0.1";
const port = 3000;


const server = http.createServer((require, response)=>{
    //Testando a inicialização do server
    // response.statusCode = 200;
    // response.setHeader('content-type','text/plain');
    // response.end("Olá Alexsandro");
    
    if(require.url == '/node'){ /* Aqui foi add um condicional onde só mostrará o conteúdo do arquivo se for igual a /node*/
        fs.readFile('index.html',(err,data)=>{
            response.writeHead(200,{'content-type' : 'text/html'});
            response.write(data);
            return response.end();
        })
    }else{
        return response.end("Esse diretório não existe!");
    }

        
    // fs.unlink('test.txt',(err)=>{console.log('deletado')})  Deletando um arquivo
    // fs.rename('test.txt',(err)=>{console.log('deletado')})  Renomeando um arquivo

});

// VARIÁVEL + .listen é uma função expecífica do nodejs
server.listen(port, hostname, ()=>{
    console.log("Servidor rodando");
});
