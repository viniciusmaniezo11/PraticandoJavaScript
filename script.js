//let nome = "Diogo"
//let idade = 30

//! -----------------------------------
//! ------- CONCATENAÇÃO --------------
//! -----------------------------------

//console.log("Nome: " + nome,", Idade: " + idade);

// ------- INTERPOLAÇÃO -------
//console.log(`Nome: ${nome}, Idade: ${idade}`);

//console.log(typeof nome);
//console.log(typeof idade);

//let soma = "5" + 3; //* Soma: concatena
//let sub = "5" - 3; //*Subtração: Subrai

//console.log(soma)
//console.log(sub)

//console.log(typeof soma)
//console.log(typeof sub)

//! -----------------------------------
//! ------- CONVERTENDO VALORES -------
//! -----------------------------------

//let numero = "53" //* String

//let convertido = Number(numero) //* Converte o valor para número, mesmo colocando uma letra no valor ela é transformada no tipo "number"

//console.log(typeof convertido)

//! -----------------------------------
//! ----- OPERADORES RELACIONAIS ------
//! -----------------------------------

//* ==: Valida igual de valor (Somente valor)
// "10" == 10 -> true

//* ===: Valida igualdade de valor e tipo de dado
// "10" === 10 -> false

//* &&: Compara os dois valores e retorna true caso ambos sejam verdadeiros, caso não sejam retorna false.
//* ||: Siginifica OR.
//* !: Significa negação.

//! -----------------------------------
//! ----- ESTRUTURA DE REPETIÇÃO ------
//! -----------------------------------

//let frutas = ["Maçã", "Banana", "Acerola", "Uva"];

//console.log(frutas);

//* forEach (Para Cada): fruta (Palavra auxiliar) pega cada valor do array
//frutas.forEach(function(fruta) {
    //console.log(`Fruta: ${fruta}`);
//})

//* forEach resumido
//frutas.forEach(fruta => console.log(`Fruta: ${fruta}`));

//! -----------------------------------
//! ----- FUNÇÕES NATIVAS DO JS -------
//! -----------------------------------

//? --- FUNÇÃO MAP() ---
//* Percorre uma lista e cria uma nova lista com base em uma condição.

//let numeros = [1, 2 ,3, 4]

//let numerosDobrados = numeros.map(function(num) {
    //return num * 2;
    //* numerosDobrados = [2, 4, 6, 8] é oque é retornado
//})

//console.log(numerosDobrados)

//* map() resumido com arrow function e retorno implicito

//let numerosDobradosArrow = numeros.map(num => num * 2)
//console.log(numerosDobradosArrow);

//? --- FUNÇÃO FILTER() ---
//* Filtra os elementos com base em uma condição

//let numeros = [5, 10, 15, 20]

//* Filtra os números maior que 10
//let maioresQueDez = numeros.filter(num => num > 10)
//console.log(maioresQueDez)

//? --- FUNÇÃO REDUCE() --- 
//* Reduz os valores de um array para um unico valor

//let numeros = [1, 2, 3, 4]

//* Acumulador começa em 0 e soma com o auxiliar até o ultimo valor do array
//let soma = numeros.reduce((acumulador, auxiliar) => acumulador + auxiliar, 0)

//console.log(soma)

//? --- FUNÇÃO FIND() ---
//* Retorna o primeiro elemento que atende a condição

// let produtos = [
//     {id: 1, nome: "Teclado", preço: 50}, //Produto
//     {id: 2, nome: "Mouse", preço: 30}, 
//     {id: 2, nome: "Caderno", preço: 35}, 
//     {id: 3, nome: "Cadeira", preço: 20}, 
//     {id: 4, nome: "Headset", preço: 10}
// ]

// let item = produtos.find(produto => produto.id === 2);
// console.log(item)

//* Diferença entre filter() e find()
//* find() retorna somente o primeiro elemento que ele encontra com a condição já filter() retorna todos elementos que encontra com a condição
// let itemFiltrado = produtos.filter(produto => produto.id === 2)

// console.log(itemFiltrado);

//? --- FUNÇÃO SPLIT() ---
//* Divide a string em partes, transfromando em um array

// let frase = "JS é top"

// let palavras = frase.split("")

// console.log(palavras);

//? --- FUNÇÃO TRIM() ---
//* Remove espaços no final e final de uma string

// let nome = "         Paulo              "
// let nomeLimpo = nome.trim()

// console.log(nome);
// console.log(nomeLimpo);

//? --- FUNÇÃO INCLUDES() ---
//* Indica se existe um valor dentro de uma lista e retorna booleano (true ou false)

// let frutas = ["Maçã", "Banana"];

// let frutasIncludes = frutas.includes("Maçã")

// console.log(frutasIncludes);

//? --- FUNÇÃO TOLOWERCASE() E TOUPPERCASE() ---
//* toLowerCase() transforma o texto em minusculo e toUpperCase() transforma o texto em maiusculo

// let nome = "VINICIUS"
// let cargo = "estudante"

// console.log(nome.toLowerCase());
// console.log(cargo.toUpperCase());

//? --- FUNÇÃO SOME() ---
//* Verifica se pelo menos um item atende a condição e retorna um valor booleano (true ou false)

// let numeros = [1, 3, 5, 8];

// let temPar = numeros.some(num => num % 2 === 0)

// console.log(temPar);

//? --- FUNÇÃO EVERY() ---
//* Verifica se todos itens atendem a condição e retorna um valor booleano (true ou false)

// let numeros = [1, 3, 5, 8]

// let todosPares = numeros.every(num => num % 2 === 0)

// console.log(todosPares);

//? --- FUNÇÃO SORT() ---
//* Ordena os elementos do array

// let numeros = [3, 10, 5, 2, 4]
// let letras = ["c", "a", "x", "h"]

//* Para letras
// letras.sort();
// console.log(letras);

//* Para números
// numeros.sort((a, b) => a - b)
// console.log(numeros);

//? --- FUNÇÃO REVERSE() ---
//* Inverte a ordem dos elemntos no array

// let numeros = [1, 2, 3]

// numeros.reverse()
// console.log(numeros);

//? --- FUNÇÃO JOIN ---
//* Junta os elementos de um array em uma string

// let palavras = ["JS", "é", "top"]

// let frase = palavras.join(" ")
// console.log(frase);

//! -- Adicionado e removendo elementos do array (Push, Pop, Shift, Unshift) ---

// let lista = ["A", "B"];

//? ===== PUSH() -> Adiciona elementos no final do array =====

// lista.push("C")
// console.log(lista);

//? ===== POP() -> Remove o elemento no final da lista =====

// lista.pop();
// console.log(lista);

//? ===== SHIFT() -> Remove o elemento no começo da lista =====

// lista.shift();
// console.log(lista);

//? ===== UNSHIFT() -> Adiciona elementos no inicio da lista

// lista.unshift("A")
// console.log(lista);

//? --- FUNÇÃO SLICE() ---
//* Cria uma copia de uma parte da lista

/*
    array.slice(inicial, final)

    Inicial -> Onde começa
    Final -> Onde termina (Não inclui a posição/indice/index)
*/

// let numeros = [1, 2, 3, 4]

// let parte = numeros.slice(1, 3) //* Vai até a posição 3 mas não a pega
// console.log(parte);

//? --- FUNÇÃO SPLICE() ---
//*  Remove ou adiciona elementos em qualquer posição

/*
    array.slice(index, count, item1, ..., itemX)

    Index -> Indice(Posição do elemento no array)
    Count -> Número de elementos a serem removidos (Poder ser 0)
    Item1[...] ItemX -> Itens a serem adicionados
*/

// let numeros = [1, 2, 3, 4]

//? Removendo elementos sem adicionar
// numeros.splice(1, 1) 
// console.log(numeros);

//? Removendo elementos mas adicionando dois elementos

// let frutas = ["Banana", "Laranja", "Maçã", "Manga"]

// frutas.splice(0, 3, "Limão", "Kiwi")
// console.log(frutas);

//? Adicionando elementos
// frutas.splice(2, 0, "Limão", "Kiwi") //* Adiciona os itens na posição 2 e não depois da 2
// console.log(frutas);

//? --- FUNÇÃO REPLACE() ---
//* Substitui uma parte da string

/* 
    replace(valorProcurado, "valorQueSubstitui");
*/

// let texto = "Olá, Mundo!"

// let novoTexto = texto.replace("Mundo", "Cliente")
// console.log(novoTexto);

//! -----------------------------------
//! --------- NOSSAS FUNÇÕES ----------
//! -----------------------------------

//? --- FUNÇÃO COMUM ---

function exibirMensagem() {
    console.log("Bem vindo(a)!");
};

exibirMensagem();

//? --- FUNÇÃO COM PARAMETRO ---

// function cumprimentar(nome) {
//     console.log(`Olá ${nome}`);
// };

// cumprimentar("ana");
// cumprimentar("carlos");

//? --- FUNÇÃO COM MAIS DE UM PARAMETRO ---

// function somar(n1, n2) {
//     let soma = n1 + n2
//     console.log(soma);

//*    Se quiser utiliza a variavel "soma" fora da função deverá utilizar "return soma;"
// }

// somar(2, 2);

//* Outra forma de fazer a função somar
// const somar = (n1, n2) => n1 + n2;

// console.log(somar(2, 2));

//? --- FUNÇÃO PROMPT() ---
//* Recebe/Solicita uma informação do usuário, o valor vindo do prompt() normalmente é string

let nome = prompt("Digite o seu nome: ")

console.log(nome);

//? Recebendo um número e convertendo
//* Number() -> Converte de forma generica.

let idade = Number(prompt("Digite sua idade: "))

//* parseInt() -> Converte o valor para número inteiro.

idade = parseInt(prompt("Digite sua idade: "))

//* parseFloat() -> Converte o valor para número decimal ou ponto flutuante.

idade = parseFloat(prompt("Digite sua idade: "))