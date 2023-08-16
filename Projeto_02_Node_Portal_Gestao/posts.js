const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postsSchema = new Schema({
    titulo: String,
    image: String,
    categoria: String,
    conteudo : String,
    slug: String
})

const post = mongoose.model('Posts', postsSchema, 'noticias')

module.exports = post