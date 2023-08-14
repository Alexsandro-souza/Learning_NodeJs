const express = require('express'); // Chamando express
const path = require('path');
const bodyParse = require('body-parser');


/*As linhas 3, 4 a 6 estou apenas criando o server em express*/
const app = express(); 
app.listen('3000',()=>{console.log('server rodando...')})
app.engine('html', require('ejs').renderFile); //
app.set('view engine', 'html'); //
app.use('/public', express.static(path.join(__dirname, 'public'))); //
app.set('views', path.join(__dirname, '/views')); //
app.use( bodyParse.json() );
app.use(bodyParse.urlencoded({extended: true}));


app.get('/',(require, response)=>{
  
})


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