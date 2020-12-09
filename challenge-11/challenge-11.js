(function () {
  console.log(// Envolva todo o código desse arquivo em uma IIFE (incluindo esse comentário).

/*
Crie uma variável chamada `once`, que recebe `false` como seu valor.
Crie um loop que execute enquanto essa variável for verdadeira. Dentro do
loop, mostre no console a mensagem:
'Entrou ao menos uma vez!'
Qual loop você deve usar para que essa mensagem seja mostrada no console?
*/
var once = false
do {
console.log("Entrou ae menos uma vez usando o loop do while");    
} while(once === true);


/*
Crie um objeto chamado `person`, que receba as seguintes propriedades:
- 'name', 'age', 'weight' e 'birthday'. Preencha com os valores corretos
para o nome, idade, peso e data de nascimento dessa pessoa.
*/
var person = {name:"carlos", age:18, weight:80, birthday:"21/06/2002"}

/*
Use um loop para percorrer o objeto criado acima, mostrando no console
a frase:
'The [PROPERTY] of person is [VALUE]'
Aproveite e crie uma variável `counter` que vai contar quantas propriedades
esse objeto tem.
Após o loop, mostre a frase:
'The person has [COUNTER] properties'
*/
for(var lop in person)
  console.log('The'+lop+"of person is"+person[lop])
var counter = lop
console.log("the person has"+counter+"properties")


/*
Crie uma função chamada `moreThan`, que vai verificar se a pessoa (objeto
criado acima) é mais velha que a idade passada por parâmetro.
Se verdadeiro, retornar `true`. Senão, retornar false.
Após a função, mostrar a mensagem no console:
'The person has more than 25 years old? [TRUE/FALSE]'
*/
function morethan(x) {
var t1
var t2 =
person.age > x ? t1 = true : t1 = false;
person.age > 25 ? t2 = true : t2 = false; 
console.log(t1+" the person has more than 25 years old? "+t2)
  

/*
Faça um loop de 0 a 20, que adicione cada número como um item de um
array chamado `numbers`. Se o contador for maior que 10, saia do loop.
Mostre no console os números no array.
*/
console.log( 'De 0 a 10:' );
//
var numbers = []
while(0 < 20) {
numbers.push(1)
if(numbers.length==10)
 break
console.log(numbers.length)
  

/*
Faça outro loop de 0 a 20, que adicione a um array chamado `numbers` (já
criado acima, só precisa ser reiniciado) números de 0 a 20, inclusive
esses. Se o número for ímpar, pular para o próximo número.
Mostrar no console os números do array.
*/
var secret = 0 
var numbers = []
while(secret <= 20) {
numbers.push(secret)
if(numbers.length % 2 === 1) {
 continue
if(numbers.length === 20) {
  break
console.log(numbers.length)
console.log( 'Pares de 0 a 20:' );
// ?
