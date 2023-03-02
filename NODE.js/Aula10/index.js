function cadastrarUsuario(callback){
  setTimeout(() => {
    //lógica de cadastro de usuário...

    callback();
  }, 2000);
}



cadastrarUsuario((erro) => {

  if(erro){
    return console.log('Ocorre um erro: '+ erro.message);
  }

  console.log('Usuário registrado com sucesso');
});