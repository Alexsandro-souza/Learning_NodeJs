const testModo = require('./CriandoModulos')
testModo.testModulo();

console.log(testModo.age)

/* Basta acessa o módulo (conjunto de {funções, variáveis, objetos etc} guardadas em um arquivo .js) e chamar a função. O Node aceita ()=>{Arrow function}*/

const TestandoModulo = require('./CriandoModulosComClasses.js')
const novaInstancia = new TestandoModulo(); //Assim consigo acessar a classe

novaInstancia.testando(); //Assim consigo acessar o conteúdo que tem dentro da classe


/*! Para o tude funcione conforme esperado o comando node ou nodemon deve rodar na pasta onde se encontra o arquivo que vai rodar a classe importada*/

/*! Outra coisa é que para importar (require) a classe a const deve receber o nome em CascalCase não em camelCase*/
