/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
//
var arei =[1,2,3,4,5]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// function seatle(arei) {
return arei
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// seatle(arei)[1]

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
//function dahora(arg,x) {
return arg[x]; 

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// var array01 = [false, true,1,"string",undefined]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// dahora(array01,0)
dahora(array01,1)
dahora(array01,2)
dahora(array01,3)
dahora(array01,4)

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// function book(x) {
livro = {bela:"bela",neve:"neve",peter:"peter"}
livro.nomes = {bela:"bela",neve:"neve",peter:"peter"}
livro.bela = {Quantidadepaginas:5,autor:"carlos",editora:"posilixo"}
livro.neve = {Quantidadepaginas:2,autor:"andressa",editora:"posilixo"}
livro.peter = {Quantidadepaginas:3,autor:"amilton",editora:"posilixo"}
if(x==="bela") {
  return livro.bela;
} else if(x==="neve") {
  return livro.neve;
} else if(x==="peter"){
  return livro.peter;
} else {
  return livro
          
          
          

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
//book()

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
//"O livro"+livro.nomes.bela+" "+"tem "+livro.bela.Quantidadepaginas+"paginas"
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
//"O autor do livro"+livro.nomes.bela+" e "+livro.bela.autor

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
//"O livro"+livro.nomes.bela+"foi publicado pela editora"+livro.bela.editora
