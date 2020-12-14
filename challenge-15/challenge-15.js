(function() {/*
Envolva todo o código desse desafio em uma IIFE.
Crie um arquivo chamado index.html e adicione esse script ao HTML.
*/
/*
Crie uma função construtora chamada "Person". Esse construtor deve ter
as seguintes características:
- Deve receber 3 parâmetros: `name`, `lastName` e `age`;
- Deverá ter 3 propriedades:
  - `name` - que receberá o valor do parâmetro `name`;
  - `lastName` - que receberá o valor do parâmetro `lastName`;
  - `age` - que receberá o valor do parâmetro `age`;
- Deverá ter 3 métodos:
  - `getFullName` - que deve retornar o nome completo do objeto criado,
  no formato:
    - "[NAME] [LASTNAME]"
  - `getAge` - que deverá retornar a idade (age);
  - `addAge` - esse método não deverá ter nenhum parâmetro, mas ao invocá-lo
  iremos passar um único argumento, que é a quantidade de anos que devem ser
  adicionados à idade original (age). Esse método deverá retornar o objeto
  que será instanciado.
*/
 function person (name,last,age) {
 this.nome = name;
 this.lastname = last;
 this.age = age;
 this.getfullname = function() {
 return name+" "+last;  
 }
 this.getage = age
 this.addage = function() {
 this.age = this.age + 1
 }
 

/*
Crie 3 novos objetos usando o construtor acima. Os objetos serão novas
pessoas. As variáveis deverão ser o primeiro nome da pessoa. Passe os
parâmetros corretamente para o construtor para criar as novas pessoas.
Mostre as 3 novas pessoas criadas no console (Um console.log por pessoa).
*/
console.log( 'Novas pessoas criadas à partir de Person:' );
var pessoa1 = new person("Robinho","Silva",17)
var pessoa2 = new person("julia","Sovla",18)
var pessoa3 = new person("robero","Selva",40)
/*
Mostre no console o nome completo de cada pessoa.
*/
console.log( '\nNomes das pessoas:'+pessoa1.getfullname()+pessoa2.getfullname()+pessoa3.getfullname());


/*
Mostre no console as idades de cada pessoa, com a frase:
- "[NOME COMPLETO] tem [IDADE] anos."
*/
console.log( '\nIdade das pessoas:' );
console.log(pessoa1.getfullname()+"tem"+pessoa1.age)
console.log(pessoa2.getfullname()+"tem"+pessoa2.age)
   console.log(pessoa3.getfullname()+"tem"+pessoa3.age)
/*
Adicione alguns anos à cada pessoa, e mostre no console a nova idade de
cada um. A frase deverá ser no formato:
- "[NOME COMPLETO] agora tem [NOVA IDADE] anos."
*/
console.log( '\nNova idade das pessoas:' );

console.log(pessoa1.getfullname()+" agora tem "+pessoa1.age)
console.log(pessoa2.getfullname()+" agora tem "+pessoa2.age)
   console.log(pessoa3.getfullname()+" agora tem "+pessoa3.age)
   
});()
