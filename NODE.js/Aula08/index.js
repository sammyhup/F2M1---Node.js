const fs = require('fs');

fs.readFile('./estados.json', 'utf-8', (err, data) => {

  const json = JSON.parse(data);

  console.log(json.estados[0].nome);
})
