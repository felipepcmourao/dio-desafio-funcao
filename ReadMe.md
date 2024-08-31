# Instruções para entrega
## 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

# Como eu fiz
Realizei duas tentativas para completar o desafio. 

Na primeira tentativa utilizei a função **calcularVitorias** para definir a diferença entre Vitórias e Derrotas do herói, e o retorno foi passado para a variável **resultadoVitorias**. Para definir o nível do herói utilizei o **if** e o **else** contrapondo o total de vitórias com o requerimento de cada nível.

Na segunda tentativa utilizei a função **calcularVitorias**, mas de forma mais curta já fazendo a diferença na linha do **return**. Para definir o nível do herói utilizei a estrutura de controle **switch case** e **default**.

