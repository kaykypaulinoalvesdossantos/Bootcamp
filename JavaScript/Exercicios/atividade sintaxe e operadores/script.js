function compararNumeros(num1, num2){
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2){
    let primeiraFrase = `Os números ${num1} e ${num2}`;
    let simNao = 'não';

    if (num1 === num2){
        simNao = '';
    }

    return `${primeiraFrase} ${simNao} são iguais`;
}

function criaSegundaFrase(num1, num2){
    const soma = num1 + num2;
    let compararDez = 'menor';
    let comparaVinte = 'menor';

    if (soma > 10){
        compararDez = 'maior';
    }


    if(soma > 20){
        comparaVinte = 'meior';
    }

    return `Sua soma é ${soma} , que é ${compararDez} do que 10 e ${compararVinte} do que 20.`;
}

console.log(compararNumeros(10, 10));