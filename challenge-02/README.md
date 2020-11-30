# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x,y) {
...return x+y;
...}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var numqualquer
function soma(x,y) {
... return numqualquer=x+y+5;
}
// Qual o valor atualizado dessa variável?
declarando a varialvel sem valor e apenas usando a funçao acima soma(0,0)
a variavel fica 5

// Declare uma nova variável, sem valor.
var semvalor

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
var msg01 ="O valor da variável agora é "
function soma (x) {
... return semvalor=msg01+x;
...}

// Invoque a função criada acima.
soma(8)

// Qual o retorno da função? (Use comentários de bloco).
/* O valor da variável agora é 8 */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
var msg = "Preencha todos os valores corretamente"
function multi (x,y,z) {
if(x===undefined) {
return msg;
} else if(y===undefined) {
return msg;
} else if(z===undefined) {
return msg;
}
return x*y*z+2
}

}
// Invoque a função criada acima, passando só dois números como argumento.
multi(6,8)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//Apresentou a messagem Preencha todos os valores corretamente

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
colocando multi(0,0,0) deu 0 

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//apresentou corretamente a multiplicaçao q e 0

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
funcition soma(x,y,z) {
if(x != undefined && y===undefined && z===undefined) {
return x;
} else if(x != undefined && y != undefined && z===undefined) {
return x+y;
} else if(x != undefined && y != undefined && z != undefined) {
return x+y/z;
} else if(x===undefined && y===undefined && z===undefined) {
return false;
}
else {
return null;
}
}


// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
?
soma()//false
soma(1)//1
soma(1,1)//2
soma(1,1,5)//1.2
