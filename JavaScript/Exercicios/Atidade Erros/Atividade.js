function validacaoErros(arr, num){
    try {
        if (!arr && !num ) throw new ReferenceError('errinho')
    
        if (typeof arr !== 'object') throw new TypeError('O arr informado não e um array')

        if (typeof num !== 'number') throw new TypeError('O Num informado não e um numero')

        if (arr.length !== num) throw new RangeError('O tamnho do array e diferente do numero informado')
    
        return arr;
    } catch (error) {
        if(error instanceof ReferenceError){
            console.log("esse erro é um ReferenceError")
            console.log(error.message)
        }else if(error instanceof TypeError){
            console.log("esse erro é um TypeError")
            console.log(error.message)
        }else if(error instanceof RangeError){
            console.log("esse erro é um RangeError")
            console.log(error.message)
        }else{
            console.log('Tipo de erro não esperado:' + error);
        }
    }
}


console.log(validacaoErros([1,2,3,5],5))
