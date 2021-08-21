import {selector} from './../index.js'
import {createElement} from './../index.js'
import { selectorAll } from './../index.js';

export const validarEmail = () => {
    let input = selector('#email');
    input.addEventListener('blur', verificarContenxt);
}


function verificarContenxt(e){
    const emailExpreg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let longText = e.target.value.length;
    let styles = e.target.style;
    let type = e.target.type;
    let error = selector('.err')
    let divInputs = selector('.inputs');

    // evalua la longitud de texto que se ingresa en el input
    if(longText <= 0){
        styles.borderBottom = '2px solid #e31111';
        mostrarErr(divInputs);
    }else{
        styles.borderBottom = '2px solid #81B214'
        error.remove();
    }

    // Evalue si el tipo que estamos ingrsando es de type === email
    if(type == 'email'){
        if(emailExpreg.test(e.target.value)){
            styles.borderBottom = '2px solid #81B214'
            error.remove();
        }else{
            styles.borderBottom = '2px solid #e31111';
            mostrarErr(divInputs);
        }
    }
}

function mostrarErr(divInputs){
    let div = createElement('div')
    let err = selectorAll('.err');

    div.classList.add('err');
    div.textContent = 'Ingrese un Email';
    
    // Chequeamos si existe la clase
    if(err.length === 0) divInputs.appendChild(div);
}