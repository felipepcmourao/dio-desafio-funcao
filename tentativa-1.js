//Calcular Vitoria
let resultadoVitorias = calcularVitorias (350,310)

function calcularVitorias (vitorias, derrotas){
    calculo = vitorias-derrotas
    return calculo
}

//Definir nivel do heroi
let nivel = definirNivel (resultadoVitorias)

function definirNivel (i){
    if (i < 10){
        return "Ferro"
    }
    if (i <= 20){
        return "Bronze"
    }
    if (i <=50){
        return "Prata"
    }
    if (i <=80){
        return "Ouro"
    }
    if (i <=90){
        return "Diamante"
    }
    if (i <=100){
        return "Lendário"
    }
    else {
        return "Imortal"
    }
}

//Saída
console.log (`O herói tem saldo de ${resultadoVitorias} e está no nível de ${nivel} `)