var string = 'Esta é uma string';
            //0123456789...
console.log(string.length);

console.log(string[0]);

console.log(string[string.length - 1]);

console.log(string.toUpperCase());

console.log(string.toLowerCase());

console.log(string.replace('uma', 'minha'));

if(string.endsWith('ing')){
  console.log('Frase termina com a letra ing');
}

if(string.startsWith('e')){
  console.log('Frase começa com a letra E');
}

console.log(string.split('m'));

console.log(string.trimStart());

if(string.includes('uma')){
  console.log('Frase possui a palavra "uma"');
}

