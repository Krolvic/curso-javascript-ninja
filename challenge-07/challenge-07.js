/*
Crie um array com 5 items (tipos variados).
*/
var myarray = ["sla",2,function(){},null,[1,4,5,7],{carro:"foda"}]

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function additem(x) {
myarray.push(x);
return myarray
  
/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
myarray.push(["string",2,null]); {
console.log(myarray[6])

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log("o ultimo elemento do segundo array é "+myarray[6][1])

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O primeiro array tem "+myarray.length+" itens")

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
conssole.log("O segundo array tem "+myarray[6])

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
var pi = 10
while(pi <= 20) {
  pi % 2 === 0 ? console.log(pi) : ""
  pi++;
}
 

console.log( 'Números pares entre 10 e 20:' );
//
/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
// 
  var pe = 9
while(pe < 20) {
pe % 2 === 0 ? "" : console.log(pe)
pe++
}
/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
  for(var prim = 100; prim <= 120; prim++) {
      prim%2=== 0 ? console.log(prim) : "";
}
console.log( 'Números pares entre 100 e 120:' );
  
for(var lep = 111; lep <= 125; lep++) {
  lep%2 === 0 ? "" : console.log(lep);
}

console.log( 'Números ímpares entre 111 e 125:' );
// ?
