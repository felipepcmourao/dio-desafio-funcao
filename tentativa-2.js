//Calcular Vitorias
let vitoriaLiquida = calcularVitorias (78, 10)

function calcularVitorias (vitorias, derrotas) {
    return vitorias - derrotas
}

//Definir Nivel
let nivel = definirNivel(vitoriaLiquida)

function definirNivel (i){
    switch (true) {
        case i < 10:
            return "Ferro"
        case i <= 20:
            return "Bronze"
        case i <= 50:
            return "Prata"
        case i <= 80:
            return "Ouro"
        case i <= 90:
            return "Diamante"
        case i <= 100:
            return "Lendário"
        default:
            return "Imortal"
    }
}

//Saida
console.log(`O herói tem saldo de ${vitoriaLiquida} e está no nível de ${nivel} `)