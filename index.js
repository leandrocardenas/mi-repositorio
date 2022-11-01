const suma =(parametro1,parametro2)=> {
    resultado = parametro1 + parametro2;
    return resultado;
}

const resta =(parametro1,parametro2)=> {
    resultado = parametro1 - parametro2;
    return resultado;
}

const mult =(parametro1,parametro2)=> {
    resultado = parametro1 * parametro2;
    return resultado;
}

const div =(parametro1,parametro2)=> {
    resultado = parametro1 / parametro2;
    return resultado;
}

const poten =(parametro1,parametro2)=> {
    resultado = parametro1 ** parametro2;
    return resultado;
}


const calculadora =(parametro1,parametro2,operacion)=>{
    let resultado
    if(operacion === 'suma'){
        resultado = suma(parametro1,parametro2);
    }
    else if (operacion === 'resta'){
        resultado = resta(parametro1,parametro2); 
    }
    else if (operacion === 'mult'){
        resultado = mult(parametro1,parametro2);
    }
    else if (operacion === 'div'){
        resultado = div(parametro1,parametro2);
    }

    else if (operacion === 'poten'){
        resultado = poten(parametro1,parametro2);
    }


    return resultado;

}

const numero1 = parseInt(prompt('ingresa un numero'));
const numero2 = parseInt(prompt('ingresa otro numero'));
const oper = prompt('escribe la operacion que quieras realizar: suma, resta, mult, div o poten');

const resultadoCalculadora = calculadora(numero1,numero2,oper);
alert(`el resultado es ${resultadoCalculadora}`);