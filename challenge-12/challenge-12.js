/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
var person = {name:"joao",last:"lima",age:16}
console.log( 'Propriedades de "person":' );

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
Object.keys(person)

/*
Crie um array vazio chamado `books`.
*/
var books = []

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
books.push({livro1:{name:"cirandinha",pages:33}})
books.push({livro2:{name:"anoes",pages:32}})
books.push({livro3:{name:"neve",pages:31}})
console.log( '\nLista de livros:' );

/*
Mostre no console todos os livros.
*/
console.log(books)

console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/
console.log(books.pop())

console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
console.log(books)
/*
Converta os objetos que ficaram em `books` para strings.
*/
console.log( '\nLivros em formato string:' );
json.stringfy(books)

/*
Mostre os livros nesse formato no console:
*/
console.log(JSON.stringify(books))

/*
Converta os livros novamente para objeto.
*/
console.log( '\nAgora os livros são objetos novamente:' );
JSON.parse(books)
/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
console.log(books)

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
// ?
console.log( '\nMeu nome é:' );
var myname = ["n","a","t","h","a","n"]

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
// 
console.log( 'Meu nome:' +myname.join(""));
myname.join("")

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
myname.reverse()

console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
myname.sort()
