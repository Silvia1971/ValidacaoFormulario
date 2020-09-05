function validar() {
    var nome = document.getElementById("nomeUsuario");
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");
    var confirm_senha = document.getElementById("confirm");
    var flag = true;
    console.log(nome);

    var usuario = document.getElementById('nomeUsuario').value;
    console.log(usuario);

    var msgErro = document.getElementById('msg_erro');
    console.log(msgErro);

    if (nome.value === '') {
        nome.value = 'Faltou o nome';
        msgErro.innerHTML = 'Nome é obrigatório';
        nome.focus();
        flag = false;
        return false;
    }

    if (email.value === '') {
        msgErro.innerHTML = 'E-mail é obrigatório';
        email.focus();
        flag = false;
        return false;
    }

    if (senha.value === '') {
      msgErro.innerHTML = 'Senha é obrigatório';
      senha.focus();
      flag = false;
      return false;      
    }

    // corrigir a condição da senha
    if (senha.value.length <= 3) {
      msgErro.innerHTML = 'Números inferiores a 3';
      flag = false;
      return false;
      }
    
    if (confirm_senha.value === '') {
      msgErro.innerHTML = 'ConfirmSenha é obrigatório';
      confirm_senha.focus();
      flag = false;
      return false;
    }    

    if (senha.value !== confirm_senha.value) {
      msgErro.innerHTML = 'Senhas não conferem';
      flag = false;
      return false;
    }

    if(flag == true){
      msgErro.innerHTML = "<p style='color:green;'>Formulário preenchido corretamente</p>";
      return false;
    }
}