const express = require('express'); // Chamando express
const path = require('path');
const bodyParse = require('body-parser');


/*As linhas 3, 4 a 6 estou apenas criando o server em express*/
const app = express(); 
app.listen('3000',()=>{
    console.log('server rodando...')
})

let tarefas = ['Arrumar quarto', 'Lavar louça', 'Lavar carro'];

//Criando as rotas para haver o funcionanmento do projeto

app.get('/',(require, response)=>{
    // response.send('Você está rodando em express')
    
    response.render('index',{tarefasLista : tarefas}) //Esse segundo parametro só aceita objeto
})

/* As linhas 17 a 20 são praticamente uma receita de bolo para iniciar um app Node|Express*/

app.engine('html', require('ejs').renderFile); //
app.set('view engine', 'html'); //
app.use('/public', express.static(path.join(__dirname, 'public'))); //
app.set('views', path.join(__dirname, '/views')); //

// Adicionando body-parser para conseguir capturar informações do formulário
app.use( bodyParse.json() );
app.use(bodyParse.urlencoded({extended: true}));






app.get('/deletar/:id',(require, response)=>{
    
    tarefas =  tarefas.filter((item, index)=>{
        if(index !== parseInt(require.params.id)){
            return item
        }        
    })
    response.render('index',{tarefasLista : tarefas})
   
})

app.post('/',(require, response)=>{
    tarefas.push(require.body.nova);
    response.redirect('/'); // Após enviar a informação do formulário é necessário direcionar o usuário para algum lugar no caso o a tela inicial.
})