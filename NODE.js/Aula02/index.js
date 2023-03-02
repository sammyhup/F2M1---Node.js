const prompt = require('prompt-sync')();
const calc = require('./calculadora.js');

/*var nome = entrada('Qual é o seu nome ');

var idade = entrada('Qual é a sua idade? ');

if(idade > 18){
  console.log(nome + ' tem ' + idade + ' anos e é maior de idade');
}else{
  console.log(nome + ' tem ' + idade + ' anos e é menor de idade');
}*/

var num1 = Number(prompt('Digite o primeiro número: '));
var num2 = Number(prompt('Digite o segundo número: '));

console.log('A soma entre ' + num1 + ' e '+ num2 + ' é: ', calc.adicao(num1, num2));

console.log('A diferença entre ' + num1 + ' e '+ num2 + ' é: ', calc.subtracao(num1, num2));

console.log('O produto entre ' + num1 + ' e '+ num2 + ' é: ', calc.mult(num1, num2));

console.log('O resultado da divisão entre ' + num1 + ' e '+ num2 + ' é: ', calc.div(num1, num2));