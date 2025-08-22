function calculate(){
    const display = document.getElementById('display');
    try {
        const resultado = eval(display.value);
        if(isNaN(resultado) || !isFinite(resultado)){
            display.value = 'Erro';
        } else {
            display.value = resultado;
        }
    } catch (error) {
        display.value = 'Erro';
    }
}

function clearDisplay(){
    const display = document.getElementById('display');
    display.value = '0';
}

function deleteLastChar(){
    const display = document.getElementById('display');
    if(display.value === 'Erro' || display.value === '0'){
        display.value = '0';
    } else {
        display.value = display.value.slice(0, -1);
        if(display.value === ''){
            display.value = '0';
        }
    }
}

function addToDisplay(valor){
    const display = document.getElementById('display');
    
    if(display.value === 'Erro'){
        display.value = '';
    }
    
    if(display.value === '0' && valor !== '.' && valor !== '+' && valor !== '-' && valor !== '*' && valor !== '/'){
        display.value = valor;
    } else {
        display.value += valor;
    }
}

   