/*
Envolva todo o código desse desafio em uma IIFE.
*/

/*
Crie um array e mostre no console a representação em String desse array,
usando o método visto na aula 13.
*/
console.log( 'O array em formato de string é:' );
var aro = [1,2,3,4,5]
aro.toString()

/*
Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
Cada array deve conter os estados dessa região.
*/
var sul = ["rj","sp","mg","es"]
var sudeste = ["rs","sc","Pr"]

/*
Crie uma variável chamada `brasil`, que irá receber as duas regiões
concatenadas. Mostre o `brasil` no console.
*/
var brasil = []
console.log( '\nAlguns Estados do Brasil:'+brasil.concat(sul,sudeste));
brasil = brasil.concat(sul,sudeste)


/*
Adicione 3 novos estados da região Norte no início do array e mostre no console.
*/
console.log( '\nMais estados adicionados:' );
var norte = ["tc","mp","ro"]
brasil.unshift("tc","mp","ro")

/*
Remova o primeiro estado do array `brasil` e mostre-o no console.
*/
console.log( '\nEstado removido:'+brasil.shift() );
// ?

/*
Crie um novo array chamado `newSul`, que receba somente os estados do sul,
pegando do array `brasil`. Não remova esses itens de `brasil`.
*/
var newsul = []
newsul = brasil.slice(7,10)

/*
Mostre no console os estados que estão em `newSul`.
*/
console.log( '\nEstados do Sul do Brasil:'+newsul);
// ?

/*
Mostre no console todos os estados que estão em `brasil`.
*/
console.log( '\nAlguns Estados do Brasil:'+brasil);
// ?

/*
Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
*/

                var nordeste = ["ma","pi","ce"]
/*
Mostre no console os estados do nordeste.
*/
console.log( '\nEstados do Nordeste:'+nordeste);
// 

/*
Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável
chamada `newSudeste`.
*/
newsudeste = brasil.slice(3,7)
/*
Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
ficar no mesmo nível que os estados já existentes, não em um array separado.
*/
brasil.push(nordeste[0])
brasil.push(nordeste[1])
brasil.push(nordeste[2])
/*
Mostre no console os estados em `newSudeste`.
*/
console.log( '\nEstados em newSudeste:'+newsudeste);
// ?

/*
Mostre no console os estados do `brasil`.
*/
console.log( '\nAlguns estados do Brasil:'+brasil);
// ?

/*
usando forEach, percorra o array `brasil` e gere um novo array chamado
`newBrasil`. Esse array deve ter cada item como um objeto, com as
propriedades:
- `id`: que será o índice do array `brasil`,
- `estado`: que será o estado do array `brasil`.
*/
var newbrasil = brasil.forEach(function(item,index) {
 console.log(index,item)
});



/*
Mostre o array `newBrasil` no console
*/
console.log( '\nnewBrasil:',+newbrasil);
// ?

/*
Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
- "Sim, todos os estados tem mais de 7 letras!"
Senão, mostre no console:
- "Nem todos os estados tem mais de 7 letras!"
*/
brasao = brasil.some(function(item) {
  return item > 7   ;
})
var real
brasao === true ? real = "Sim, todos os estados tem mais de 7 letras!" : real = "Nem todos os estados tem mais de 7 letras!";
console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?'+real);


/*
Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
resultado à uma variável. Se esse estado existir no array, mostrar a frase no
console:
- "Ceará está incluído!"
Senão, mostrar a frase:
- "Ceará não foi incluído :("
*/
var cent = brasil.some(function (item) {
return item == "ce" 
})
var fodase
cent === true ? fodase = "Ceará está incluído!" : fodase = "Ceará não foi incluído :("; 
                        
console.log( '\nCeará está incluído em `brasil`?'+fodase );


/*
Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
objeto desse array, e adicione a frase abaixo na propriedade `estado`:
- "[ESTADO] pertence ao Brasil."
Atribua o novo array a uma variável chamada `map`.
*/
var mape = newbrasil.map(function (index,item) {
return 
})

/*
Mostre no console o array criado acima:
*/
console.log( '\nnewBrasil agora com mais informações:' );
// ?

/*
Filtre o array criado acima, retornando somente os estados que tiverem
ID par. Atribua o valor à uma variável chamada `filter`.
*/
// ?

/*
Mostre o array filtrado acima no console.
*/
console.log( '\nEstados com ID par:' );
// ?
