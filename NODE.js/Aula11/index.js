function cadastrarUsuario(){
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      // lógica para cadastrar o usuário

      var erro = true;

      if(!erro){
        resolve('Sucesso!');
      }else{
        reject('Ocorreu um erro');
      }
    }, 2000)
  });
}


cadastrarUsuario()
.then((mensagem) => {
  console.log(mensagem);
})
.catch((mensagem) => {
  console.log(mensagem);
});