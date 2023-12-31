const express = require('express'); // Chamando express
const app = express(); 
const path = require('path');
const bodyParse = require('body-parser');
const mongoose = require('mongoose');
const post = require('./posts');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/pages'));

app.use( bodyParse.json() );
app.use(bodyParse.urlencoded({extended: true}));


//Inciando server

app.listen('3000',()=>{
    console.log('server rodando...')
});

//Conectando com o banco de dados mongo
const dataBase = 'Estudo_DB';

mongoose.connect( `mongodb+srv://root:senhamongo1@cluster0.7tyxizl.mongodb.net/${dataBase}?retryWrites=true&w=majority`,
    {useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{
    console.log('Sucesso na conexão com o DB!')
}).catch((err)=>{
    console.log(err.message)
})




//Criando rotas

app.get('/',async (req,res)=>{  

    if(req.query.search == null){   
        let dataPost;     
        try{
            const data = await post.find({}).sort({_id: -1}).exec();
            dataPost = data.map((item)=>{
                return{
                    titulo: item.titulo,
                    image: item.image,
                    categoria: item.categoria,
                    conteudo : item.conteudo ,
                    descricaoCurta : item.conteudo.substring(0,150),
                    slug: item.slug
                }
            })

        }catch(err){
            console.log(err.message)
        }  
        res.render('home',{post:dataPost});
      
    }else{
        try {
            const filteredData = await post.find({ titulo: { $regex: req.query.search, $options: 'i' } }).exec();
            res.render('busca', { post: filteredData, contagem: filteredData.length  });
        } catch (err) {
            console.error(err.message);
            res.render('busca', {});
        }
        
    }
  
}); 

app.get('/:slug',(req,res)=>{
    //res.send(req.params.slug);
    res.render('single',{});
})

app.get('/',(req, res)=>{    

})



app.get('/deletar/:id',(req, res)=>{
    
   
})

app.post('/',(req, res)=>{

})
