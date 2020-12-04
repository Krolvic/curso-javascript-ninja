/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
//var championship = "copa"

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
// var teams =["flu","pr","fla","mg","sp"]

console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
// function showteamposition(x) {
var posicao
x = teams[x]
if(x=="flu") {
 posicao = "1"
} else if(x=="pr") {
  posicao = "2";
} else if(x=="fla") {
  posicao = "3";
} else if(x=="mg") {
  posicao = "4";
} else if(x=="sp") {
  posicao = "5";
} else
  return "Não temos a informação do time que está nessa posição."
  



return "O time que está em "+posicao+"º lugar é o,"+x;   

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
//
showTeamPosition(0)
showTeamPosition(1)
showTeamPosition(2)
showTeamPosition(3)
showTeamPosition(8)

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
//var cont = 20
while(cont < 31) {
  console.log(cont)
  cont++
}
/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
//
function converttohex(x) {
  var toloko 
  var cores = ["azul","vermelho","amarelo","preto","roxo"]
  var hexadecemais = [501,302,403,054,025]
  switch(x) {
    case cores[0]:
      toloko = hexadecemais[0]
      break
    case cores[1]:
      toloko = hexadecemais[1]
      break
    case cores[2]:
      toloko = hexadecemais[2]
      break
    case cores[3]:
      toloko = hexadecemais[3]
      break
    case cores[4]:
      toloko = hexadecemais[4]
      break
    default:
      return "Não temos o equivalente hexadecimal para "+x
  }
      
      
      return "O hexadecimal para a cor "+x+" "+toloko
  
    
    

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
//as cores normais funcionou mais as cores diferentes aprensentou a mensagem q n tem equivalente hexa 
