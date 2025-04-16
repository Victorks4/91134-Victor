
function validateForm(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    let errorMessage = document.getElementById('error-message');

    errorMessage.textContent='';

    if(name === ''){
        errorMessage.textContent = 'Por favor, insira seu nome.';
        return false;
    }

    if(password ===''){
        //Exibe uma mensagem de erro e interrompe o envio do formulário
        errorMessage.textContent = 'Por favor, insira sua senha.';
        return false;
    }

    //Verifica se o campo "Confirmar Senha" corresponde á senha
    if(password !== confirmPassword){
        errorMessage.textContent = 'As senhas não conferem.';
        return false;
    }

    return true;//

}