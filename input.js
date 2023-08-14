const readInput = require('readline');


const interfaceReadInput = readInput.createInterface({
    input : process.stdin,
    output : process.stdout
})

interfaceReadInput.question('Qual o seu nome?', function(name){
    console.log('Seu nome é: '+name)
})

interfaceReadInput.on('close', function(){
    console.log('tchau');
    process.exit(0)
})