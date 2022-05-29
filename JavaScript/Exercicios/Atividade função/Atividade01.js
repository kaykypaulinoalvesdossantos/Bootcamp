const alunos =  [
    {
        nome : "ana",
        nota : 3,
        turma : "1B"
    },
    {
        nome : "Julia",
        nota : 8,
        turma : "1B"
    },
    {
        nome : "Paulo",
        nota : 6,
        turma : "1B"
    },
    {
        nome : "roberto",
        nota : 4,
        turma : "1B"
    },
    {
        nome : "Guilerme",
        nota : 7,
        turma : "1B"
    }
];

function anlunosAprovados(arr, media){
    let aprovados = [];
    for (let i = 0; i < arr.length; i++){

        const {nota, nome} = arr[i];

        if(nota >= media){
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(anlunosAprovados(alunos, 5))