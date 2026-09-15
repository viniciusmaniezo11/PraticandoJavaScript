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

let numeros = [3, 10, 5, 2, 4]
let letras = ["c", "a", "x", "h"]

//* Para letras
letras.sort();
console.log(letras);

//* Para números
numeros.sort((a, b) => a - b)
console.log(numeros);

