const express = require('express'); // Chamando express
const path = require('path')


/*As linhas 3, 4 a 6 estou apenas criando o server em express*/
const app = express(); 
app.listen('3000',()=>{
    console.log('server rodando...')
})

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




let tarefas = ['Arrumar quarto', 'Lavar louça', 'Lavar carro'];

app.get('/deletar/:id',(require, response)=>{
    
    tarefas =  tarefas.filter((item, index)=>{
        if(index !== parseInt(require.params.id)){
            return item
        }        
    })
    response.render('index',{tarefasLista : tarefas})
   
})